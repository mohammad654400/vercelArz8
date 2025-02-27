import * as Yup from "yup";

// تعریف اعتبارسنجی فایل‌ها
const fileValidationSchema = Yup.mixed()
  .test("fileSize", "حجم کل فایل‌ها باید کمتر از 100 مگابایت باشد.", (value) => {
    if (!value || !Array.isArray(value) || value.length === 0) return true;
    const totalSize = value.reduce((total, file) => total + file.size, 0);
    return totalSize <= 100 * 1024 * 1024; // حداکثر 100 مگابایت
  })
  .test("fileType", "فقط فایل‌های JPEG, PNG, MP4 و ZIP مجاز هستند.", (value) => {
    if (!value || !Array.isArray(value) || value.length === 0) return true;
    return value.every((file) =>
      ["image/jpeg", "image/png", "video/mp4", "application/zip", "application/octet-stream"].includes(file.type)
    );
  });

const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
          .min(3, "نام و نام خانوادگی باید حداقل3 حرف باشد.")
          .required("نام و نام خانوادگی الزامی است."),
  email:Yup.string().email()
      .required("ایمیل الزامی است."),
      
  title: Yup.string().required("عنوان الزامی است."),
  vulnerableSector: Yup.string().required("انتخاب بخش آسیب‌پذیر الزامی است."),
  description: Yup.string().required("توضیحات خطا الزامی است."),
  pathOfError: Yup.string().required("مسیر ایجاد خطا الزامی است."),
  Offer: Yup.string().optional(),
  files: Yup.array()
    .min(1, "حداقل یک فایل باید آپلود شود.")
    .of(fileValidationSchema)
    .required("فایل‌ها الزامی هستند."),
});

export default validationSchema;
