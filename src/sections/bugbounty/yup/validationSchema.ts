import * as Yup from 'yup';  

// تعریف نوع File برای تایید عملکرد  
const fileValidationSchema = Yup.mixed()  
    .test("fileSize", "فایل‌های انتخابی باید کوچکتر از 100 مگابایت باشند.", (value: File[]) => {  
        if (!value || value.length === 0) return true; // اگر فایلی وجود نداشته باشد، از چک خارج می‌شود  
        return value.reduce((total, file) => total + (file.size || 0), 0) <= 100 * 1024 * 1024; // 100 مگابایت  
    })  
    .test("fileType", "فقط فایل‌های JPEG, PNG, MP4 و ZIP مجاز هستند.",  
        (value: File[]) => {  
            if (!value || value.length === 0) return true; // اگر فایلی وجود نداشته باشد، از چک خارج می‌شود  
            return value.every((file) =>  
                ["image/jpeg", "image/png", "video/mp4", "application/zip", "application/octet-stream"].includes(file.type) ||  
                file.name.endsWith('.zip') // بررسی نام فایل  
            );  
        }  
    );  

    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

const validationSchema = Yup.object().shape({  
    fullName: Yup.string().required("نام و نام خانوادگی الزامی است."),  
    email: Yup.string()  
    .email("ایمیل معتبر نیست.")  
    .matches(emailValidationRegex, "ایمیل باید یک الگوی معتبر داشته باشد.")  
    .required("ایمیل الزامی است."),  
    title: Yup.string().required("عنوان الزامی است."),  
    vulnerableSector: Yup.string().required("انتخاب بخش آسیب‌پذیر الزامی است."),  
    description: Yup.string().required("توضیحات خطا الزامی است."),  
    pathOfError: Yup.string().required("مسیر ایجاد خطا الزامی است."),  
    Offer: Yup.string().optional(),  
    files: Yup.array() 
        .min(1, "حداقل یک فایل باید آپلود شود.")  
        .of(fileValidationSchema) // استفاده از schemes تعریف شده  
        .required("حداقل یک فایل الزامی است."),  
});  

export default validationSchema;