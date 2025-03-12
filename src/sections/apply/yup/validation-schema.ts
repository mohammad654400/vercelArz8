import email from '@/assets/icons/contactUs/email';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, "نام و نام خانوادگی باید حداقل 5 حرف باشد.")
        .required("نام و نام خانوادگی الزامی است."),

    mobile: Yup.string()
        .matches(/^09\d{9}$/, "شماره تماس باید با 09 شروع شود و دقیقا ۱۱ رقم باشد.")
        .required("شماره تماس الزامی است."),

    email: Yup.string().email()
        .required("ایمیل الزامی است."),

    file: Yup.mixed<File>()
        .nullable()
        .required("آپلود فایل الزامی است.")
        .test("fileSize", "حجم فایل نباید بیشتر از 200 مگابایت باشد.", (value) => {
            if (!value) return true;
            return value.size <= 200 * 1024 * 1024;
        })
        .test("fileType", "فقط فایل‌های PDF و PNG مجاز هستند.", (value) => {
            if (!value) return true;
            const allowedTypes = ["application/pdf", "image/png"];
            return allowedTypes.includes(value.type);
        }),

    marriage: Yup.string()
        .required("وضعیت تاهل الزامی است.")
        .oneOf(["متاهل", "مجرد"], "لطفا یکی از گزینه‌ها را انتخاب کنید."), // فرض بر این است که گزینه‌های "متاهل" و "مجرد" هستند.  

    conscription: Yup.string()
        .required("وضعیت نظام وظیفه الزامی است.")
        .oneOf(["خانم هستم", "مشمول", "معافیت تحصیلی", "معاف داعم"], "لطفا یکی از گزینه‌ها را انتخاب کنید."), // گزینه‌های مناسب را وارد کنید.  


});
