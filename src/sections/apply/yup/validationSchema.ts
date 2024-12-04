import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(5, "نام و نام خانوادگی باید حداقل 5 حرف باشد.")
        .required("نام و نام خانوادگی الزامی است."),
    gender: Yup.string().required("جنسیت الزامی است."),
    birthDate: Yup.string().required("تاریخ تولد الزامی است."),
    militaryStatus: Yup.string().required("وضعیت نظام وظیفه الزامی است."),
    salary: Yup.string().required("حقوق درخواستی الزامی است."),
    province: Yup.string().required("استان الزامی است."),
    city: Yup.string().required("شهر الزامی است."),
    maritalStatus: Yup.string().required("وضعیت تاهل الزامی است."),
    jobType: Yup.string().required("نوع همکاری الزامی است."),
    phoneNumber: Yup.string()
        .matches(/^\d{10,11}$/, "شماره تماس نامعتبر است.")
        .required("شماره تماس الزامی است."),
    email: Yup.string()
        .email("ایمیل نامعتبر است.")
        .required("ایمیل الزامی است."),
    previousWork: Yup.string().required("نام محل کار قبلی الزامی است."),
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
    photo: Yup.mixed<File>()
        .nullable()
        .required("آپلود تصویر الزامی است.")
        .test("fileSize", "حجم تصویر نباید بیشتر از 5 مگابایت باشد.", (value) => {
            if (!value) return true;
            return value.size <= 5 * 1024 * 1024;
        })
        .test("fileType", "فقط فرمت‌های JPEG و PNG مجاز هستند.", (value) => {
            if (!value) return true;
            return ["image/jpeg", "image/png"].includes(value.type);
        }),
});
