import email from '@/assets/icons/contactUs/email';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(5, "نام و نام خانوادگی باید حداقل 5 حرف باشد.")
        .required("نام و نام خانوادگی الزامی است."),
 
    phoneNumber: Yup.string()
        .matches(/^\d{10,11}$/, "شماره تماس نامعتبر است.")
        .required("شماره تماس الزامی است."),
        
    email:Yup.string().email()
    .required("ایمیل الزامی است."),

    file: Yup.mixed<File>()
        .nullable()
        .required("آپلود فایل الزامی است.")
        .test("fileSize", "حجم فایل نباید بیشتر از 200 مگابایت باشد.", (value) => {
            if (!value) return true;
            return value.size <= 200 * 1024 * 1024;
        })
        .test("fileType", "فقط فایل‌های PDF مجاز هستند.", (value) => {
            if (!value) return true;
            return value.type === "application/pdf";
        }),
   
});
