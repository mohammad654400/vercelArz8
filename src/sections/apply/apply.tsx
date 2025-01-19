'use client';

import React, { useState, useCallback, useRef } from 'react';
import { validationSchema } from './yup/validation-schema';
import FormField from '@/sections/job/input/InputField';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import Modal from '@/components/Modal';
import ErrorJob from "@/assets/icons/modal/errorJob"
import SuccessJob from "@/assets/icons/modal/successJob"



interface ModalLine {
    text: string;
    highlightedWords?: { word: string; color: "green" | "red" }[];
}

export default function ApplyPage({ title }: { title: string }) {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(undefined);
    const fileUrlRef = useRef<string | undefined>(undefined);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [modalLines, setModalLines] = useState<ModalLine[]>([]);

    const formDataRef = useRef<Record<string, any>>({
        fullName: "",
        phoneNumber: "",
        file: null,
    });

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            formDataRef.current[name] = value;
        },
        []
    );

    const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 20 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, file: "حجم فایل نباید بیشتر از 20 مگابایت باشد." }));
                return;
            }
            if (file.type !== "application/pdf") {
                setErrors((prev) => ({ ...prev, file: "فقط فایل‌های PDF مجاز هستند." }));
                return;
            }
            setErrors((prev) => ({ ...prev, file: "" }));

            if (fileUrlRef.current) {
                URL.revokeObjectURL(fileUrlRef.current);
            }

            const newFileUrl = URL.createObjectURL(file);
            fileUrlRef.current = newFileUrl;
            setUploadedFileUrl(newFileUrl);

            formDataRef.current.file = file;
            setUploadedFileName(file.name);
        }
    }, []);

    const validateForm = useCallback(async () => {
        try {
            await validationSchema.validate(formDataRef.current, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err: any) {
            const newErrors: Record<string, string> = {};
            err.inner.forEach((error: Yup.ValidationError) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm();

        if (isValid) {

            setModalType("success");
            setModalLines([
                {
                    text: "درخواست شما با موفقیت ارسال شد.",
                    highlightedWords: [{ word: "موفقیت", color: "green" }],
                },
                {
                    text: " و با شما تماس گرفته خواهد شد.",

                },
            ]);
        } else {

            setModalType("error");
            setModalLines([
                {
                    text: "ارسال درخواست شما با مشکل روبرو شد.",
                    highlightedWords: [{ word: "مشکل", color: "red" }],
                },
                {
                    text: "لطفاً فرم را بازبینی کنید و دوباره تلاش کنید.",

                },
            ]);
        }
        setIsModalOpen(true);
    };

    return (
        <div className="base-style w-full pt-28">
            <div className="w-full">
                <h1 className="text-xl font-bold text-center mb-3">فرم ارسال درخواست و رزومه</h1>
                <h2 className="text-xs font-semibold text-center opacity-50 mb-8">{title}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                    <div className="w-full flex flex-col gap-4">
                        <div className='w-full grid grid-cols-1 gap-4 z-20'>

                            <FormField
                                name="fullName"
                                label="نام و خانوادگی"
                                type="text"
                                onChange={handleChange}
                                error={errors.fullName}
                            />
                            <FormField
                                name="phoneNumber"
                                label="شماره تماس"
                                type="text"
                                onChange={handleChange}
                                error={errors.phoneNumber}
                            />
                            <FormField
                                name="email"
                                label="ایمیل"
                                type="text"
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <FormField
                                name="maritalStatus"
                                label="وضعیت تاهل"
                                type="select"
                                options={["متاهل", "مجرد"]}
                                onChange={handleChange}
                                error={errors.maritalStatus}
                            />
                            <FormField
                                name="dutyStatus"
                                label="وضعیت نظام وظیفه"
                                type="select"
                                options={["مشمول", "معافیت تحصیلی", "معاف داعم"]}
                                onChange={handleChange}
                                error={errors.dutyStatus}
                            />

                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-3">فایل رزومه</label>
                            <div className="relative z-10 h-[157px] border border-gray-300 rounded-xl">
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                                    <div className='w-16 h-16'>
                                    <DocumentUpload />
                                    </div>

                                    <span className="text-xs lg:text-sm px-3 py-2 text-[#32323680] rounded-[10px] bg-[#FFE9AF] text-opacity-50">فایل رزومه خود را آپلود کنید</span>
                                </div>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                            {errors.file && <p className="text-sm text-red-500 mt-2">{errors.file}</p>}
                            {!uploadedFileName ? (
                                <p className="text-sm text-gray-500 mt-2">مشخصات فایل: pdf، حجم فایل کمتر از 20 مگابایت</p>
                            ) : (
                                <div className="mt-2">
                                    <span>مشاهده فایل: {uploadedFileName}</span>
                                    <a href={uploadedFileUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 ml-2">
                                        مشاهده پیش‌نمایش
                                    </a>
                                </div>
                            )}
                        </div>
                        <button type="submit" className="w-full h-10 sm:h-16 bg-primary text-white px-4 py-2 rounded-xl mt-12">
                            ارسال درخواست
                        </button>
                    </div>
                </form>
            </div>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    type={modalType}
                    icon={
                        modalType === "success" ? (
                            <div className="  w-24 h-24 lg:w-44 lg:h-44  text-foreground">
                                <SuccessJob />
                            </div>
                        ) : (
                            <div className=" w-24 h-24 lg:w-44 lg:h-44  text-foreground">
                                <ErrorJob />
                            </div>
                        )
                    }
                    lines={modalLines}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
