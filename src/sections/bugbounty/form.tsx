import React, { useCallback, useRef, useState } from "react";
import validationSchema from "./yup/validationSchema";
import FormField from "@/components/input/InputField";
import DocumentUpload from "@/assets/icons/job/documentUpload";
import { Modal } from "./modal";
import ChartSuccess from "@/assets/icons/job/chartSuccess";
import ChartError from "@/assets/icons/job/chartSuccess";

export default function FormBugBounty() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [totalFileSize, setTotalFileSize] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formDataRef = useRef<Record<string, any>>({
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
    const newUploadedFiles = [...uploadedFiles, ...files];
    const totalSize = newUploadedFiles.reduce((sum, file) => sum + file.size, 0);

    if (totalSize > 100 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, files: "حجم کل فایل‌ها نباید بیشتر از 100 مگابایت باشد." }));
      return;
    }

    setUploadedFiles(newUploadedFiles);
    setTotalFileSize(totalSize);
    formDataRef.current.files = newUploadedFiles;
    setErrors((prev) => ({ ...prev, files: "" }));
  }, [uploadedFiles]);

  const handleFileRemove = useCallback((index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    const newTotalSize = updatedFiles.reduce((sum, file) => sum + file.size, 0);

    setUploadedFiles(updatedFiles);
    setTotalFileSize(newTotalSize);
    formDataRef.current.files = updatedFiles;
  }, [uploadedFiles]);

  const validateForm = useCallback(async () => {
    try {
      await validationSchema.validate(formDataRef.current, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();

    if (!isValid) {
      setIsSuccess(false);
      setShowModal(true);
      return;
    }

    setIsSuccess(true);
    setShowModal(true);
    console.log("Form submitted successfully!", formDataRef.current);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    setShowModal(false);
    setIsSuccess(false);
  };

  return (
    <div className="rounded-[30px] w-full py-[24.7px] xl:py-10 px-5 bg-secondary">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-x-7 gap-y-5 text-xs lg:text-sm">
          <FormField
            name="fullName"
            label="نام و نام خانوادگی (یا لقب)"
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
            label="عنوان باگ "
            type="text"
            onChange={handleChange}
            error={errors.title}
          />
          <FormField
            name="vulnerableSector"
            label="بخش آسیب پذیر"
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
          <label className="block text-sm font-medium mb-3">بارگذاری مستندات</label>
          <div className="relative z-10 h-[160px] lg:h-[227px] border border-dashed lg:border-solid border-gray-300 rounded-xl mb-4">
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-[14px] pb-[11px] lg:pt-[37px] lg:pb-[21px]">
              <div className="w-[51px] h-[51px] lg:w-[69px] lg:h-[69px]">
                <DocumentUpload />
              </div>

              <button className="mt-[8px] mb-[13px] lg:mt-[11px] lg:mb-[30px] w-[78px] h-[26px] lg:w-[105px] lg:h-[35px] rounded-[7.43px] lg:rounded-[10px] bg-primary text-xs lg:text-base font-bold text-white text-center">
                آپلود فایل
              </button>
              <span className="text-[9px] md:text-sm font-normal opacity-50 text-center text-sixth px-4">
                حداکثر ۵ تصویر jpeg یا PNG ،یک ویدیو MP4 یا یک فایل Zip ،حداکثر حجم کل فایل ها 100 مگابایت باشد
              </span>
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

        <div className="flex items-start mb-[19px]">
          <input
            id="accept-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="peer hidden"
          />

          <label
            htmlFor="accept-checkbox"
            className={`w-5 h-5 lg:w-8 lg:h-8 flex items-start justify-center rounded lg:rounded-lg border border-[#ADADAD80] cursor-pointer ${
              isChecked ? "bg-[#FFF6DD]" : "bg-white"
            }`}
          >
            {isChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 lg:w-7 lg:h-7 text-[#FFC107]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </label>

          <label
            htmlFor="accept-checkbox"
            className="lg:text-[25px] text-sm font-normal flex self-center text-foreground mr-[17px]"
          >
            ارسال این گزارش به معنی پذیرش قوانین و مقررات باگ بانتی ارزهشت است.
          </label>
        </div>

        <button
          type="submit"
          className="w-[124px] h-[40px] lg:w-[232px] lg:h-[75px] bg-primary text-white rounded-xl self-end text-[13.44px] lg:text-[25px]"
        >
          ارسال باگ
        </button>
      </form>

      {showModal && (
        <Modal
          onClose={handleClose}
          isSuccess={isSuccess}
          successMessage="درخواست شما با موفقیت ارسال شد."
          errorMessage="اطلاعات وارد شده اشتباه است."
          successKeywords={["موفقیت"]}
          errorKeywords={["اشتباه"]}
          successIcon={<ChartSuccess />}
          errorIcon={<ChartError />}
        />
      )}
    </div>
  );
}
