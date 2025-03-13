"use client";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import usePostData from "@/hooks/usePostData";
import OrbitAnimation from "./animation/OrbitAnimation";
import PhotoContactSupport from "@/assets/images/contactUs/Asset 1@300x 2.png";
import Modal from "@/components/Modal";
import ErrorContactUs from "@/assets/icons/modal/errorContactUs";
import SuccessContactUs from "@/assets/icons/modal/successContactUs";
import { validationSchema } from "./yup/validationSchema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Cookies from "js-cookie";
import { SHA256 } from "crypto-js";
import Call from "@/assets/icons/contactUs/call";
import Email from "@/assets/icons/contactUs/email";
import Support from "@/assets/icons/contactUs/support";
import Location from "@/assets/icons/contactUs/location";
import Telegram from "@/assets/icons/contactUs/telegram";

interface ModalLine {
  text: string;
  highlightedWords?: { word: string; color: "green" | "red" }[];
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  errors: Record<string, string>;
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// Cookie will expire after 24 hours
const COOKIE_EXPIRY = 1;
const SUBMISSION_HISTORY_KEY = "contactSubmissionHistory";

// Memoized Components
const ContactForm = memo(
  ({
    onSubmit,
    isSubmitting,
    errors,
    formData,
    onChange,
  }: ContactFormProps) => (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full mx-4 md:mx-12 lg:mx-16 xl:mx-0 sm:w-[70%] bg-secondary p-5 rounded-xl z-10"
    >
      <span className="text-Seventh text-xl font-bold mb-7">ارسال پیام</span>
      <div className="flex w-full space-x-4 sm:gap-4 mb-5 flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col w-full sm:w-1/2 mb-4 sm:mb-0">
          <label
            htmlFor="fullName"
            className="block text-Seventh text-base font-normal"
          >
            نام خانوادگی
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
            onChange={onChange}
          />
          {errors.fullName && (
            <div className="text-red-500 text-sm">{errors.fullName}</div>
          )}
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label
            htmlFor="phoneNumber"
            className="block text-Seventh text-base font-normal"
          >
            شماره تماس
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
            onChange={onChange}
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col h-[40%] mb-7">
        <label
          htmlFor="message"
          className="block text-Seventh text-base font-normal"
        >
          پیام
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          className="w-full sm:h-48 bg-fifth text-foreground mt-2 p-4 rounded-lg focus:outline-none"
          onChange={onChange}
        />
        {errors.message && (
          <div className="text-red-500 text-sm">{errors.message}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`lg:w-60 w-full h-14 px-4 py-2 rounded-xl transition-colors self-end ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary text-white  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)]  active:translate-y-0 active:bg-primary"
        }`}
      >
        {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
      </button>
    </form>
  )
);

ContactForm.displayName = "ContactForm";

// Custom Hooks
const useSubmissionHistory = () => {
  const [submissionHistory, setSubmissionHistory] = useState<string[]>([]);

  useEffect(() => {
    const loadSubmissionHistory = () => {
      try {
        const storedHistory = localStorage.getItem(SUBMISSION_HISTORY_KEY);
        if (storedHistory) {
          setSubmissionHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error("Error loading submission history:", error);
        const cookieHistory = Cookies.get(SUBMISSION_HISTORY_KEY);
        if (cookieHistory) {
          try {
            setSubmissionHistory(JSON.parse(cookieHistory));
          } catch (e) {
            console.error("Error parsing cookie history:", e);
          }
        }
      }
    };

    loadSubmissionHistory();
  }, []);

  const saveSubmission = useCallback(
    (hash: string) => {
      const updatedHistory = [...submissionHistory, hash].slice(-10);
      setSubmissionHistory(updatedHistory);

      try {
        localStorage.setItem(
          SUBMISSION_HISTORY_KEY,
          JSON.stringify(updatedHistory)
        );
        Cookies.set(SUBMISSION_HISTORY_KEY, JSON.stringify(updatedHistory), {
          expires: COOKIE_EXPIRY,
          sameSite: "strict",
        });
      } catch (error) {
        console.error("Error saving submission history:", error);
      }
    },
    [submissionHistory]
  );

  return { submissionHistory, saveSubmission };
};

export default function ContactUs() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [modalLines, setModalLines] = useState<ModalLine[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submissionHistory, saveSubmission } = useSubmissionHistory();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const formDataRef = useRef<FormData>(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  const { mutate, isPending } = usePostData(
    "contact-us",
    () => {
      setModalType("success");
      setModalLines([
        {
          text: "پیام شما با موفقیت ارسال شد.",
          highlightedWords: [{ word: "موفقیت", color: "green" }],
        },
      ]);
      setIsModalOpen(true);
      setFormData({ fullName: "", phoneNumber: "", message: "" });
      setIsSubmitting(false);
    },
    () => {
      setModalType("error");
      setModalLines([
        {
          text: "ارسال پیام با مشکل روبرو شد",
          highlightedWords: [{ word: "مشکل", color: "red" }],
        },
      ]);
      setIsModalOpen(true);
      setIsSubmitting(false);
    }
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    },
    []
  );

  const validateForm = useCallback(async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: Record<string, string> = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        if (error.path) newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  }, [formData]);

  const createSubmissionHash = useCallback((data: FormData): string => {
    const submissionString = `${data.fullName.trim()}-${data.phoneNumber.trim()}-${data.message.trim()}`;
    return SHA256(submissionString).toString();
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      if (isSubmitting || isPending) return;

    const isValid = await validateForm();
    if (!isValid) return;

    const currentSubmissionHash = createSubmissionHash(formData);

    if (submissionHistory.includes(currentSubmissionHash)) {
      setModalType("error");
      setModalLines([
        {
          text: "این پیام قبلاً ارسال شده است",
          highlightedWords: [{ word: "قبلاً", color: "red" }],
        },
      ]);
      setIsModalOpen(true);
      return;
    }

    if (!executeRecaptcha) {
      console.error("reCAPTCHA not loaded yet.");
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
        saveSubmission(currentSubmissionHash);

      mutate({
        name: formData.fullName,
        mobile: formData.phoneNumber,
        msg: formData.message,
        recaptcha: recaptchaToken,
      });
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      setIsSubmitting(false);
    }
    },
    [
      formData,
      isSubmitting,
      isPending,
      validateForm,
      createSubmissionHash,
      submissionHistory,
      executeRecaptcha,
      saveSubmission,
      mutate,
    ]
  );

  return (
    <div className="bg-background base-style">
      <div className="flex flex-col lg:flex-row pt-[110px] lg:pt-[194px] w-full gap-8 justify-between">
        <div className="flex flex-col order-2 lg:order-1 gap-8 justify-center w-full lg:w-[60%] lg:max-w-[1000px] lg:min-w-[509px]">
          <div className="grid gap-[10px]">
            <h1 className="text-foreground xl:text-[40px] lg:text-4xl sm:text-2xl text-xl font-bold">
              تماس با پشتیبانی صرافی ارزهشت
            </h1>
            <span className="text-foreground text-justify text-xs sm:text-base font-semibold sm:leading-10 leading-7">
              ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای
              شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای
              بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده
              است تا در سریع‌ترین زمان ممکن به شما کمک کند.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-foreground text-base font-semibold mb-5">
              اطلاعات تماس
            </span>

            <div className="flex flex-row lg:max-w-[1000px] lg:min-w-[500px] gap-4 w-full">
              <div className="flex w-[65%] sm:w-[72%] gap-4 justify-between h-full flex-col">
                <div className="flex h-[30px] sm:h-[53px] w-full gap-2 sm:gap-4 justify-between">
                  <div className="flex h-full w-full items-center justify-start bg-secondary rounded-xl p-3">
                    <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                      <Call />
                    </div>
                    <span className="xl:text-2xl md:text-lg sm:text-base text-sm text-foreground mr-1 sm:mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                      021-284299
                    </span>
                  </div>
                  <div className="flex h-full w-full items-center justify-start bg-secondary rounded-xl p-3">
                    <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                      <Support />
                    </div>
                    <span className="xl:text-2xl md:text-lg sm:text-base text-sm text-foreground mr-1 sm:mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                      پشتیبانی آنلاین
                    </span>
                  </div>
                </div>
                <div className="flex h-[54px] sm:h-[99px] w-full justify-between p-2 sm:p-3 flex-col rounded-xl bg-secondary">
                  <div className="flex items-center">
                    <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                      <Location />
                    </div>
                    <span className="xl:text-xl lg:text-base text-xs text-foreground mr-2 sm:mr-3 font-normal">
                      آدرس
                    </span>
                  </div>
                  <span className="xl:text-xl lg:text-base text-xs mt-1 sm:mt-0 text-foreground font-normal">
                    مراغه جام جم ، مجتمع سهند ، طبقه 5
                  </span>
                </div>
              </div>

              <div className="flex w-[35%] sm:w-[28%] h-full">
                <div className="flex-col gap-4 w-full h-full flex">
                  <div className="flex h-[30px] sm:h-[53px] gap-4 w-full">
                    <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl text-center flex items-center justify-center">
                      <span className="xl:text-2xl md:text-xl sm:text-base text-sm text-foreground font-semibold text-center">
                        تلگرام
                      </span>
                    </div>
                    <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl text-center flex items-center justify-center">
                      <span className="xl:text-2xl md:text-xl sm:text-base text-sm text-foreground font-semibold text-center">
                        ایمیل
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[54px] sm:h-[99px] gap-4 w-full">
                    <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl flex self-center items-center justify-center">
                      <div className="w-10 h-10 sm:h-14 sm:w-14">
                        <Telegram />
                      </div>
                    </div>
                    <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl flex self-center items-center justify-center">
                      <div className="w-10 h-10 sm:h-14 sm:w-14">
                        <Email />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-[40%] order-1 lg:order-2 justify-center lg:justify-end">
          <Image
            src={PhotoContactSupport}
            alt="Contact Us Image"
            width={392}
            height={504}
            priority
          />
        </div>
      </div>
      
      <div className="relative w-full h-[1100px] flex items-center justify-between overflow-hidden full-screen">
        <ContactForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting || isPending}
          errors={errors}
          formData={formData}
              onChange={handleChange}
            />
        <div className="absolute w-[50%] h-full left-0 top-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <OrbitAnimation />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          type={modalType}
          lines={modalLines}
          icon={
            modalType === "success" ? (
              <div className="lg:w-24 lg:h-44">
                <SuccessContactUs />
              </div>
            ) : (
              <div className="lg:w-24 lg:h-44">
                <ErrorContactUs />
              </div>
            )
          }
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
