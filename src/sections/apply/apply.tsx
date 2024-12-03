'use client';
'use client';

import React, { useState } from 'react';
import { provincesWithCities } from './data/data';

export default function ApplyPage() {
    const [formData, setFormData] = useState({

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

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
    const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const maxFileSize = 5 * 1024 * 1024; // 5MB

            if (file.size > maxFileSize) {
                alert("حجم عکس باید کمتر از 5 مگابایت باشد.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    if (ctx) {
                        ctx.drawImage(img, 0, 0);
                        const pngData = canvas.toDataURL('image/png');
                        setPreviewPhoto(pngData);
                        setFormData({ ...formData, photo: pngData });
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const maxFileSize = 20 * 1024 * 1024; // 20MB

            if (file.size > maxFileSize) {
                alert("حجم فایل باید کمتر از 20 مگابایت باشد.");
                return;
            }

            if (file.type !== 'application/pdf') {
                alert("فقط فایل‌های PDF مجاز هستند.");
                return;
            }

            setFormData({ ...formData, file: file });
            setUploadedFileName(file.name);
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName) newErrors.fullName = "نام و نام خانوادگی الزامی است.";
        if (!formData.gender) newErrors.gender = "جنسیت الزامی است.";
        if (!formData.birthDate) newErrors.birthDate = "تاریخ تولد الزامی است.";
        if (!formData.militaryStatus) newErrors.militaryStatus = "وضعیت نظام وظیفه الزامی است.";
        if (!formData.salary) newErrors.salary = "حقوق درخواستی الزامی است.";
        if (!formData.province) newErrors.province = "استان الزامی است.";
        if (!formData.city) newErrors.city = "شهر الزامی است.";
        if (!formData.maritalStatus) newErrors.maritalStatus = "وضعیت تاهل الزامی است.";
        if (!formData.jobType) newErrors.jobType = "نوع همکاری الزامی است.";
        if (!formData.phoneNumber) newErrors.phoneNumber = "شماره تماس الزامی است.";
        else if (!/^\d{10,11}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "شماره تماس نامعتبر است.";
        if (!formData.email) newErrors.email = "ایمیل الزامی است.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "ایمیل نامعتبر است.";
        if (!formData.previousWork) newErrors.previousWork = "نام محل کار قبلی الزامی است.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("لطفاً تمام فیلدها را به‌درستی پر کنید.");
            return;
        }
        console.log(formData);
        alert("فرم با موفقیت ارسال شد!");
    };

    return (
        <div className="bg-background px-5 py-10 lg:px-[120px]">
            <h1 className="text-4xl font-bold text-center mb-8">فرم ارسال درخواست و رزومه</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">


                {/* نام خانوادگی */}
                <div>
                    <label className="block text-sm font-medium">نام خانوادگی</label>
                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 rounded-xl border bg-transparent"
                        placeholder="نام خانوادگی"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                </div>

                {/* شماره تماس */}
                <div>
                    <label className="block text-sm font-medium">شماره تماس</label>
                    <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent"
                        placeholder="09123456789"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
                </div>

                {/* ایمیل */}
                <div>
                    <label className="block text-sm font-medium">ایمیل</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent"
                        placeholder="example@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>




                {/* تاریخ تولد */}
                <div>
                    <label className="block text-sm font-medium">تاریخ تولد</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent"
                    />
                    {errors.birthDate && <p className="text-red-500 text-xs">{errors.birthDate}</p>}

                </div>
                {/* جنسیت */}
                <div>
                    <label className="block text-sm font-medium">جنسیت</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="زن" className="bg-third text-foreground">زن</option>
                        <option value="مرد" className="bg-third text-foreground">مرد</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                </div>

                {/* وضعیت تاهل */}
                <div>
                    <label className="block text-sm font-medium">وضعیت تاهل</label>
                    <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="مجرد" className="bg-third text-foreground">مجرد</option>
                        <option value="متاهل" className="bg-third text-foreground">متاهل</option>
                    </select>
                    {errors.maritalStatus && <p className="text-red-500 text-xs">{errors.maritalStatus}</p>}
                </div>

                {/* وضعیت نظام وظیفه */}
                <div>
                    <label className="block text-sm font-medium">وضعیت نظام وظیفه</label>
                    <select
                        name="militaryStatus"
                        value={formData.militaryStatus}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="مشمول" className="bg-third text-foreground">مشمول</option>
                        <option value="معاف" className="bg-third text-foreground">معاف</option>
                        <option value="معافیت تحصیلی" className="bg-third text-foreground">معافیت تحصیلی</option>
                    </select>
                    {errors.militaryStatus && <p className="text-red-500 text-xs">{errors.militaryStatus}</p>}
                </div>



                {/* نوع همکاری */}
                <div>
                    <label className="block text-sm font-medium">نوع همکاری</label>
                    <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="تمام وقت" className="bg-third text-foreground">تمام وقت</option>
                        <option value="ساعتی" className="bg-third text-foreground">ساعتی</option>
                        <option value="پروژه‌ای" className="bg-third text-foreground">پروژه‌ای</option>
                    </select>
                    {errors.jobType && <p className="text-red-500 text-xs">{errors.jobType}</p>}
                </div>


                {/* حقوق درخواستی */}
                <div>
                    <label className="block text-sm font-medium">حقوق درخواستی</label>
                    <select
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="5 میلیون" className="bg-third text-foreground">5 میلیون</option>
                        <option value="10 میلیون" className="bg-third text-foreground">10 میلیون</option>
                        <option value="15 میلیون" className="bg-third text-foreground">15 میلیون</option>
                    </select>
                    {errors.salary && <p className="text-red-500 text-xs">{errors.salary}</p>}
                </div>


                {/* نام محل کار قبلی */}
                <div>
                    <label className="block text-sm font-medium">نام محل کار قبلی</label>
                    <input
                        name="previousWork"
                        value={formData.previousWork}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent"
                        placeholder="نام محل کار قبلی"
                    />
                    {errors.previousWork && <p className="text-red-500 text-xs">{errors.previousWork}</p>}
                </div>
                {/* استان */}
                <div>
                    <label className="block text-sm font-medium">استان</label>
                    <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                    >
                        <option value="">انتخاب کنید</option>
                        {Object.keys(provincesWithCities).map((province) => (
                            <option key={province} value={province} className="bg-third text-foreground">
                                {province}
                            </option>
                        ))}
                    </select>
                    {errors.province && <p className="text-red-500 text-xs">{errors.province}</p>}
                </div>

                {/* شهر */}
                <div>
                    <label className="block text-sm font-medium">شهر</label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-2 rounded border bg-transparent text-foreground"
                        disabled={!formData.province}
                    >
                        <option value="">انتخاب کنید</option>
                        {formData.province &&
                            provincesWithCities[formData.province].map((city) => (
                                <option key={city} value={city} className="bg-third text-foreground">
                                    {city}
                                </option>
                            ))}
                    </select>
                    {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                </div>




                {/* آپلود فایل */}
                <div >
                    <label className="block text-sm font-medium">فایل رزومه</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="w-full p-2 rounded border bg-transparent"
                    />
                    <span>مشخصات فایل: pdf، حجم فایل کمتر از 20 مگابایت</span>
                    {uploadedFileName && (
                        <span className="text-sm text-green-500 mt-2 block">
                            فایل "{uploadedFileName}" آپلود شد.
                        </span>
                    )}
                </div>

                {/* آپلود عکس */}
                <div >
                    <label className="block text-sm font-medium">آپلود عکس</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="w-full p-2 rounded border bg-transparent"
                    />
                    <span>مشخصات فایل: حجم فایل کمتر از 5 مگابایت</span>
                    {previewPhoto && (
                        <div className="mt-4">
                            <img src={previewPhoto} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
                            <p className="text-sm text-green-500 mt-2">عکس به فرمت PNG ذخیره شد.</p>
                        </div>
                    )}

                </div>

                {/* دکمه ارسال */}
                <div className="col-span-1 lg:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-primary text-white w-[90%] h-14 rounded-xl"
                    >
                        ارسال درخواست
                    </button>
                </div>
            </form>
        </div>
    );
}
