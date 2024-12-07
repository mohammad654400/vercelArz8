'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { validationSchema } from './yup/validationSchema';
import { provincesWithCities } from './data/data';
import FormField from './input/InputField';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import { Modal } from './modal/Modal';


export default function ApplyPage({ title }: { title: string }) {

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(undefined);
    const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
    const fileUrlRef = useRef<string | undefined>(undefined);
    // select city
    const [province, setProvince] = useState<string>("");
    const [cityOptions, setCityOptions] = useState<string[]>([]);
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false)


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




    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        formDataRef.current[name] = value;


        if (name === "province") {
            formDataRef.current.city = "";
            setProvince(value);
            setCityOptions(provincesWithCities[value] || []);
        }
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
        <div >
            <h1 className="text-xl font-bold text-start mb-3">فرم ارسال درخواست و رزومه</h1>
            <h2 className='text-xs font-semibold opacity-50 mb-8'>{title}</h2>
            <form onSubmit={handleSubmit} className='items-center justify-center w-full' >
                <div className="grid grid-cols-2 gap-6">

                    <FormField
                        name="fullName"
                        label="نام خانوادگی"
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
                        type="email"
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormField
                        name="birthDate"
                        label="تاریخ تولد"
                        type="date"
                        onChange={handleChange}
                        error={errors.birthDate}
                    />

                    <FormField
                        name="gender"
                        label="جنسیت"
                        onChange={handleChange}
                        error={errors.gender}
                        type={"select"}
                        options={['مرد', 'زن']}
                    />

                    <FormField
                        name="militaryStatus"
                        label="وضعیت نظام وظیفه"
                        onChange={handleChange}
                        error={errors.militaryStatus}
                        type={"select"}
                        options={['تمام شده', 'معاف', 'در حال انجام']}
                    />
                    <FormField
                        name="maritalStatus"
                        label="وضعیت تاهل"
                        onChange={handleChange}
                        error={errors.maritalStatus}
                        type={"select"}
                        options={['مجرد', 'متاهل']}
                    />

                    <FormField
                        name="jobType"
                        label="نوع همکاری"
                        onChange={handleChange}
                        error={errors.jobType}
                        type={"select"}
                        options={['تمام‌وقت', 'نیمه‌وقت']}
                    />

                    <FormField
                        name="salary"
                        label="حقوق درخواستی"
                        onChange={handleChange}
                        type={"select"}
                        error={errors.salary}
                        options={['5 میلیون تومان', '10 میلیون تومان', '15 میلیون تومان', '20 میلیون تومان', '25 میلیون تومان']}
                    />

                    <FormField
                        name="previousWork"
                        label="نام محل کار قبلی"
                        onChange={handleChange}
                        error={errors.previousWork}
                        type={"text"} />

                    <FormField
                        name="province"
                        label="استان"
                        value={province}
                        onChange={handleChange}
                        error={errors.province}
                        type={"select"}
                        options={Object.keys(provincesWithCities)}
                    />
                    <FormField
                        name="city"
                        label="شهر"
                        onChange={handleChange}
                        error={errors.city}
                        type={"select"}
                        options={cityOptions}
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
