'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { validationSchema } from './yup/validationSchema';
import FormField from '../../components/input/InputField';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import { Modal } from './modal/Modal';


export default function ApplyPage({ title }: { title: string }) {

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(undefined);
    const fileUrlRef = useRef<string | undefined>(undefined);

    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false)


    const formDataRef = useRef<Record<string, any>>({
        fullName: "",
        phoneNumber: "",
        file: null,

    });




    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        formDataRef.current[name] = value;

    }, []);


    const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 200 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, file: "حجم فایل نباید بیشتر از 200 مگابایت باشد." }));
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
        if (!isValid) {
            setIsSuccessModal(false)
            setIsModalOpen(true);
            return;
        }
        setIsSuccessModal(true)
        setIsModalOpen(true);
    };



    return (
        <div className='base-style w-full pt-20'>
            <div className='w-1/2'>

                <h1 className="text-xl font-bold text-start mb-3">فرم ارسال درخواست و رزومه</h1>
                <h2 className='text-xs font-semibold opacity-50 mb-8'>{title}</h2>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center sm:w-1/2 sm:min-w-[470px]' >
                    <div className="w-full ">

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


                        <div>
                            <label className="block text-sm font-medium mb-3">فایل رزومه</label>
                            <div className="relative z-10 h-[157px] border border-gray-300 rounded-xl">
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                                    <DocumentUpload />
                                    <span className="text-sm text-gray-600">فایل رزومه خود را آپلود کنید</span>
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

                        <button type="submit" className=" w-full h-10 sm:h-16 bg-primary text-white px-4 py-2 rounded-xl  mt-12">
                            ارسال درخواست
                        </button>

                    </div>



                </form>

            </div>
            <div className='w-1/2'></div>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} isSuccess={isSuccessModal} />}
        </div>
    );
}
