'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { validationSchema } from './yup/validation-schema';
import FormField from '@/sections/job/input/InputField';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import Modal from '@/components/Modal';
import ErrorJob from "@/assets/icons/modal/errorJob"
import SuccessJob from "@/assets/icons/modal/successJob"
import usePostData from '@/hooks/usePostData';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Spinner from '@/components/spinner'

interface ModalLine {
    text: string;
    highlightedWords?: { word: string; color: "green" | "red" }[];
}

interface FormDataType {
    name: string;
    mobile: string;
    email: string;
    position: string;
    marriage: string;
    conscription: string;
    file: File | null;
}

export default function ApplyPage({ title }: { title: string }) {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(undefined);
    const fileUrlRef = useRef<string | undefined>(undefined);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"success" | "error" | "loading">("loading");
    const [modalLines, setModalLines] = useState<ModalLine[]>([]);

    const formDataRef = useRef<FormDataType>({
        name: "",
        mobile: "",
        email: "",
        position: title ?? "نامشخص",
        marriage: "",
        conscription: "",
        file: null,
    });

    const { mutate, isError, isSuccess } = usePostData("jobs");

    useEffect(() => {
        if (isSuccess) {
            setModalType("success");
            setModalLines([{ text: "پیام شما با موفقیت ارسال شد.", highlightedWords: [{ word: "موفقیت", color: "green" }] }]);
            setIsModalOpen(true);
            window.location.reload();
        } else if (isError) {
            setModalType("error");
            setModalLines([{ text: "ارسال پیام با مشکل روبرو شد", highlightedWords: [{ word: "مشکل", color: "red" }] }]);
            setIsModalOpen(true);
        }
    }, [isError, isSuccess]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        formDataRef.current = {
            ...formDataRef.current,
            [name]: value,
        };
        console.log(`Field "${name}" changed: `, value);
    }, []);

    const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            console.log("Selected file:", file);

            // Checking file size
            if (file.size > 20 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, file: "حجم فایل نباید بیشتر از 20 مگابایت باشد." }));
                console.error("File size exceeds limit: ", file.size);
                return;
            }

            // Checking file type
            if (!["application/pdf", "image/png"].includes(file.type)) {
                setErrors((prev) => ({ ...prev, file: "فقط فایل‌های PDF و PNG مجاز هستند." }));
                console.error("Invalid file type: ", file.type);
                return;
            }

            setErrors((prev) => ({ ...prev, file: "" }));

            // Revoke previous file URL if exists
            if (fileUrlRef.current) {
                URL.revokeObjectURL(fileUrlRef.current);
            }

            // Create new file URL for preview
            const newFileUrl = URL.createObjectURL(file);
            fileUrlRef.current = newFileUrl;
            setUploadedFileUrl(newFileUrl);

            // Store file in formDataRef
            formDataRef.current.file = file;
            setUploadedFileName(file.name);
            console.log("File uploaded successfully:", file.name);
        }
    }, []);


    const validateForm = useCallback(async () => {
        try {
            console.log("Validating form data:", formDataRef.current);
            await validationSchema.validate(formDataRef.current, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err: any) {
            const newErrors: Record<string, string> = {};
            err.inner.forEach((error: Yup.ValidationError) => {
                if (error.path) {
                    newErrors[error.path] = error.message;
                }
            });
            setErrors(newErrors);
            console.error("Form validation failed: ", newErrors);
            return false;
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (!isValid) return;

        if (!executeRecaptcha) {
            console.error("reCAPTCHA هنوز بارگذاری نشده است.");
            return;
        }

        try {
            const recaptchaToken = await executeRecaptcha("apply_form");
            const formData = new FormData();
            formData.append("name", formDataRef.current.name);
            formData.append("mobile", formDataRef.current.mobile);
            formData.append("email", formDataRef.current.email);
            formData.append("position", formDataRef.current.position);
            formData.append("marriage", formDataRef.current.marriage);
            formData.append("conscription", formDataRef.current.conscription);
            formData.append("recaptcha", recaptchaToken);

            if (formDataRef.current.file) {
                formData.append("file", formDataRef.current.file);
            } else {
                console.error("فایلی برای ارسال وجود ندارد.");
                return;
            }

            mutate(formData);
            setModalType("loading");
            setModalLines([
                {
                    text: "رزومه ی شما در حال آپلود است",
                    highlightedWords: [{ word: "آپلود", color: "green" }],
                },
                {
                    text: "...لطفا منتظر بمانید",

                },
            ]);
            setIsModalOpen(true);

        } catch (error) {
            console.error("خطای ارسال فرم:", error);
        }
    };

    return (
        <div className="base-style w-full py-28">
            <div className="w-full">
                <h1 className="text-xl font-bold text-center mb-3">فرم ارسال درخواست و رزومه</h1>
                <h2 className="text-xs font-semibold text-center opacity-50 mb-8">{title}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                    <div className="w-full flex flex-col gap-4">
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 '>

                            <FormField
                                name="name"
                                label="نام و خانوادگی"
                                type="text"
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <FormField
                                name="mobile"
                                label="شماره تماس"
                                type="text"
                                onChange={handleChange}
                                error={errors.mobile}
                            />
                            <FormField
                                name="email"
                                label="ایمیل"
                                type="text"
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <div className='z-10'>
                                <FormField
                                    name="marriage"
                                    label="وضعیت تاهل"
                                    type="select"
                                    options={["", "متاهل", "مجرد"]}
                                    onChange={handleChange}
                                    error={errors.marriage}
                                />
                            </div>

                            <div className='z-10'>
                                <FormField
                                    name="conscription"
                                    label="وضعیت نظام وظیفه"
                                    type="select"
                                    options={["", "خانم هستم", "مشمول", "معافیت تحصیلی", "معاف داعم"]}
                                    onChange={handleChange}
                                    error={errors.conscription}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-3">فایل رزومه</label>
                                <div className="relative z-0 h-[157px] border border-gray-300 rounded-xl">
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

                        </div>

                        <button type="submit" className="self-end w-full h-[38px] sm:h-16 bg-primary text-white text-sm px-4 py-2 rounded-xl mt-10 lg:mt-12 lg:w-48 lg:h-12 lg:rounded-2xl lg:text-xl">
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
                        modalType === "loading" ? (
                            <div className=" w-24 h-24 lg:w-44 lg:h-44 text-foreground">
                                <Spinner />
                            </div>
                        ) :
                            modalType === "success" ? (
                                <div className=" w-24 h-24 lg:w-44 lg:h-44 text-foreground">
                                    <SuccessJob />
                                </div>
                            ) : (
                                <div className=" w-24 h-24 lg:w-44 lg:h-44 text-foreground">
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
