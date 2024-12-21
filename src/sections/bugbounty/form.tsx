import React, { useCallback, useRef, useState } from 'react';  
import DocumentUpload from "@/assets/icons/job/documentUpload";  
import FormField from '@/components/input/InputField';  
import validationSchema from './yup/validationSchema';  

export default function FormBugBounty() {  
    const [errors, setErrors] = useState<Record<string, string>>({});  
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);  
    const [totalFileSize, setTotalFileSize] = useState(0);  

    const formDataRef = useRef<{  
        fullName: string;  
        email: string;  
        files: File[];  
        title: string;  
        vulnerableSector: string;  
        description: string;  
        pathOfError: string;  
        Offer?: string;
        [key: string]: any;  
    }>({  
        fullName: "",  
        email: "",  
        files: [],  
        title: "",  
        vulnerableSector: "",  
        description: "",  
        pathOfError: "",  
        Offer: "",  
    });  

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {  
        const { name, value } = e.target;  
        formDataRef.current[name] = value;  
    }, []);  

    const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {  
        const files = Array.from(e.target.files || []);  
        
        // چاپ نوع MIME برای دیباگ  
        files.forEach(file => {  
            console.log(`${file.name}: ${file.type}`);  
        });  

        const newUploadedFiles: File[] = [];  
        let newTotalFileSize = totalFileSize;   

        for (const file of files) {  
            if (newTotalFileSize + file.size > 100 * 1024 * 1024) {  
                setErrors((prev) => ({ ...prev, files: "حجم کل فایل‌ها نباید بیشتر از 100 مگابایت باشد." }));  
                return;  
            }  
            newUploadedFiles.push(file);  
            newTotalFileSize += file.size;  
        }  

        setUploadedFiles((prevFiles) => {  
            const combinedFiles = [...prevFiles, ...newUploadedFiles];  

            // فیلتر کردن فایل‌های تصویری و ویدیو/ZIP  
            const imageFiles = combinedFiles.filter(file => ["image/jpeg", "image/png"].includes(file.type));  
            const videoOrZipFiles = combinedFiles.filter(file =>   
                ["video/mp4", "application/zip", "application/octet-stream"].includes(file.type) || file.name.endsWith('.zip')  
            );  

            if (imageFiles.length > 5) {  
                setErrors((prev) => ({ ...prev, files: "حداکثر 5 تصویر مجاز است." }));  
                return prevFiles; // بازگرداندن فایل‌های قبلی در صورت بروز خطا  
            }  

            if (videoOrZipFiles.length > 1) {  
                setErrors((prev) => ({ ...prev, files: "فقط یک ویدیو یا فایل ZIP مجاز است." }));  
                return prevFiles; // بازگرداندن فایل‌های قبلی در صورت بروز خطا   
            }  

            return combinedFiles; // بازگرداندن فایل‌های ترکیب شده در صورت موفقیت همه چک‌ها   
        });  

        setTotalFileSize(newTotalFileSize);  
        formDataRef.current.files = [...uploadedFiles, ...newUploadedFiles];  // به‌روزرسانی آرایه فایل‌ها  
        setErrors((prev) => ({ ...prev, files: "" }));  
    }, [totalFileSize, uploadedFiles]);  // اضافه کردن ‘uploadedFiles’ به دیپندنسی‌ها  

    const handleFileRemove = useCallback((index: number) => {  
        const updatedFiles = uploadedFiles.filter((_, i) => i !== index);  
        const removedFileSize = uploadedFiles[index].size;  
        setUploadedFiles(updatedFiles);  
        setTotalFileSize((prev) => prev - removedFileSize);  
        // به‌روزرسانی files در formDataRef بعد از حذف  
        formDataRef.current.files = updatedFiles;  
    }, [uploadedFiles]);  

    const validateForm = useCallback(async () => {  
        try {  
            await validationSchema.validate(formDataRef.current, { abortEarly: false });  
            setErrors({});  
            return true;  
        } catch (err: any) {  
            const newErrors: Record<string, string> = {};  
            if (err.inner) {  
                err.inner.forEach((error: Yup.ValidationError) => {  
                    newErrors[error.path] = error.message;  
                });  
            }  
            setErrors(newErrors);  
            return false;  
        }  
    }, []);  

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault();  
        const isValid = await validateForm();  
        if (!isValid) {  
            return;  
        }  
        alert("فرم با موفقیت ارسال شد");  
    };  

    return (  
        <div className="bg-secondary rounded-xl w-full py-5 px-4">  
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>  
                <div className="grid sm:grid-cols-2 gap-4">  
                    <FormField  
                        name="fullName"  
                        label="نام و نام خانوادگی"  
                        type="text"  
                        onChange={handleChange}  
                        error={errors.fullName}  
                    />  
                    <FormField  
                        name="email"  
                        label="ایمیل"  
                        type="text"  
                        onChange={handleChange}  
                        error={errors.email}  
                    />  
                    <FormField  
                        name="title"  
                        label="عنوان"  
                        type="text"  
                        onChange={handleChange}  
                        error={errors.title}  
                    />  
                    <FormField  
                        name="vulnerableSector"  
                        label="بخش آسیب‌پذیر"  
                        type="select"  
                        options={["احراز هویت", "خرید", "فروش", "برداشت ارزی", "برداشت ریالی", "سایر"]}  
                        onChange={handleChange}  
                        error={errors.vulnerableSector}  
                    />  
                </div>  

                <FormField  
                    name="description"  
                    label="توضیحات خطا"  
                    type="textarea"  
                    onChange={handleChange}  
                    error={errors.description}  
                />  
                <FormField  
                    name="pathOfError"  
                    label="مسیر ایجاد خطا"  
                    type="textarea"  
                    onChange={handleChange}  
                    error={errors.pathOfError}  
                />  
                <FormField  
                    name="Offer"  
                    label="پیشنهاد جهت رفع آسیب (اختیاری)"  
                    type="textarea"  
                    onChange={handleChange}  
                    error={errors.Offer}  
                />  

                <div>  
                    <label className="block text-sm font-medium mb-3">فایل‌ها</label>  
                    <div className="relative z-10 h-[157px] border border-gray-300 rounded-xl mb-4">  
                        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">  
                            <DocumentUpload />  
                            <span className="text-sm text-gray-600">فایل‌های خود را آپلود کنید</span>  
                        </div>  
                        <input  
                            type="file"  
                            accept=".jpeg,.jpg,.png,.mp4,.zip"  
                            multiple  
                            onChange={handleFileUpload}  
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"  
                        />  
                    </div>  
                    {errors.files && <p className="text-red-500 text-xs mt-1">{errors.files}</p>}  
                    {uploadedFiles.length > 0 && (  
                        <div className="space-y-2">  
                            {uploadedFiles.map((file, index) => (  
                                <div key={index} className="flex justify-between items-center">  
                                    <span className="text-sm">{file.name}</span>  
                                    <button  
                                        type="button"  
                                        onClick={() => handleFileRemove(index)}  
                                        className="text-red-500 text-xs"  
                                    >  
                                        حذف  
                                    </button>  
                                </div>  
                            ))}  
                            <p className="text-sm text-gray-600">  
                                حجم کل: {(totalFileSize / (1024 * 1024)).toFixed(2)} مگابایت  
                            </p>  
                        </div>  
                    )}  
                </div>  

                <button type="submit" className="w-full h-10 sm:h-16 bg-primary text-white px-4 py-2 rounded-xl">  
                    ارسال درخواست  
                </button>  
            </form>  
        </div>  
    );  
}