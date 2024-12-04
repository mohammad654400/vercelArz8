'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { validationSchema } from './yup/validationSchema';
import { provincesWithCities } from './data/data';
import InputAndSelectField from './input/InputField';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import { Modal } from './modal/Modal';


export default function ApplyPage({ title }: { title: string }) {

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(undefined);
    const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
    const fileUrlRef = useRef<string | undefined>(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cityOptionsRef = useRef<string[]>([]);
    const [trigger, setTrigger] = useState<number>(0);
    const [isSuccessModal,setIsSuccessModal]=useState(false)


    const formDataRef = useRef<Record<string, any>>({
        fullName: "",
        gender: "",
        birthDate: "",
        militaryStatus: "",
        salary: "",
        province: "",
        city: "",
        maritalStatus: "",
        jobType: "",
        phoneNumber: "",
        email: "",
        previousWork: "",
        file: null,
        photo: null,
    });
    console.log("formDataRef", formDataRef)
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        formDataRef.current[name] = value; 
        setTrigger(prev => prev + 1);
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
            setTrigger(prev => prev + 1);
        }
    }, []);

    const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const photo = e.target.files[0];
            if (photo.size > 5 * 1024 * 1024) {
                setErrors((prev) => ({ ...prev, photo: "حجم تصویر نباید بیشتر از 5 مگابایت باشد." }));
                return;
            }
            if (!["image/jpeg", "image/png"].includes(photo.type)) {
                setErrors((prev) => ({ ...prev, photo: "فقط فرمت‌های JPEG و PNG مجاز هستند." }));
                return;
            }
            setErrors((prev) => ({ ...prev, photo: "" }));
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewPhoto(event.target?.result as string);
            };
            reader.readAsDataURL(photo);
            formDataRef.current.photo = photo;
            setTrigger(prev => prev + 1);
        }
    }, []);





    useEffect(() => {
        if (formDataRef.current.province) {
            cityOptionsRef.current = provincesWithCities[formDataRef.current.province];
            formDataRef.current.city = ""; 
            setTrigger(prev => prev + 1);
        } else {
            cityOptionsRef.current = [];
        }
    }, [formDataRef.current.province]);

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
        console.log("formDataRef2:", formDataRef.current);
        setIsSuccessModal(true)
        setIsModalOpen(true);
    };



    return (
        <div >
            <h1 className="text-xl font-bold text-start mb-3">فرم ارسال درخواست و رزومه</h1>
            <h2 className='text-xs font-semibold opacity-50 mb-8'>{title}</h2>
            <form onSubmit={handleSubmit} className='items-center justify-center w-full' >
                <div className="grid grid-cols-2 gap-6">
               
                <InputAndSelectField
                        name="fullName"
                        label="نام خانوادگی"
                        value={formDataRef.current.fullName}
                        type="text"
                        onChange={handleChange}
                        error={errors.fullName}
                    />
                    <InputAndSelectField
                        name="phoneNumber"
                        label="شماره تماس"
                        value={formDataRef.current.phoneNumber}
                        type="text"
                        onChange={handleChange}
                        error={errors.phoneNumber}
                    />
                    <InputAndSelectField
                        name="email"
                        label="ایمیل"
                        value={formDataRef.current.email}
                        type="email"
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <InputAndSelectField
                        name="birthDate"
                        label="تاریخ تولد"
                        value={formDataRef.current.birthDate}
                        type="date"
                        onChange={handleChange}
                        error={errors.birthDate}
                    />

                    <InputAndSelectField
                        name="gender"
                        label="جنسیت"
                        value={formDataRef.current.gender}
                        onChange={handleChange}
                        error={errors.gender}
                        type={"select"}
                        options={['مرد', 'زن']}
                    />

                    <InputAndSelectField
                        name="militaryStatus"
                        label="وضعیت نظام وظیفه"
                        value={formDataRef.current.militaryStatus}
                        onChange={handleChange}
                        error={errors.militaryStatus} 
                        type={"select"}
                        options={['تمام شده', 'معاف', 'در حال انجام']}
                    />
                    <InputAndSelectField
                        name="maritalStatus"
                        label="وضعیت تاهل"
                        value={formDataRef.current.maritalStatus}
                        onChange={handleChange}
                        error={errors.maritalStatus}
                        type={"select"}
                        options={['مجرد', 'متاهل']}
                    />

                    <InputAndSelectField
                        name="jobType"
                        label="نوع همکاری"
                        value={formDataRef.current.jobType}
                        onChange={handleChange}
                        error={errors.jobType}
                        type={"select"}
                        options={['تمام‌وقت', 'نیمه‌وقت']}
                    />

                    <InputAndSelectField
                        name="salary"
                        label="حقوق درخواستی"
                        value={formDataRef.current.salary}
                        onChange={handleChange}
                        type={"select"}
                        error={errors.salary}
                        options={['5 میلیون تومان', '10 میلیون تومان', '15 میلیون تومان', '20 میلیون تومان', '25 میلیون تومان']}
                    />

                    <InputAndSelectField 
                    name="previousWork" 
                    label="نام محل کار قبلی" 
                    value={formDataRef.current.previousWork} 
                    onChange={handleChange} 
                    error={errors.previousWork} 
                    type={"text"} />

                    <InputAndSelectField
                        name="province"
                        label="استان"
                        value={formDataRef.current.province}
                        onChange={handleChange}
                        error={errors.province}
                        type={"select"}
                        options={Object.keys(provincesWithCities)}
                    />
                    <InputAndSelectField
                        name="city"
                        label="شهر"
                        value={formDataRef.current.city}
                        onChange={handleChange}
                        error={errors.city}
                        type={"select"}
                        options={cityOptionsRef.current}
                    />

                    <div>
                        <label className="block text-sm font-medium">فایل رزومه</label>
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

                    <div>
                        <label className="block text-sm font-medium">تصویر پروفایل</label>
                        <div className="relative z-10 h-[157px] border border-gray-300 rounded-xl">
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                                <DocumentUpload />
                                <span className="text-sm text-gray-600">تصویر پروفایل خود را آپلود کنید</span>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        {errors.photo && <p className="text-sm text-red-500 mt-2">{errors.photo}</p>}
                        {!previewPhoto ? (
                            <p className="text-sm text-gray-500 mt-2">مشخصات تصویر: فرمت‌های JPEG، PNG، حجم کمتر از 5 مگابایت</p>
                        ) : (
                            <div className="mt-2">
                                <span className="block text-sm text-gray-700 mb-2">پیش‌نمایش تصویر:</span>
                                <img src={previewPhoto} alt="Preview" className="w-32 h-32 object-cover rounded-full" />
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-full flex items-center justify-center mt-12'>
                    <button type="submit" className=" w-full h-10 sm:w-1/3 sm:min-w-[470px] sm:h-16 bg-primary text-white px-4 py-2 rounded-xl">
                        ارسال درخواست
                    </button>
                </div>

            </form>


            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} isSuccess={isSuccessModal} />}
        </div>
    );
}
