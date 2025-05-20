import { memo } from "react";

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

// Memoized Components
const ContactForm = memo(
  ({ onSubmit, isSubmitting, errors, formData, onChange, }: ContactFormProps) => (
    <form onSubmit={onSubmit} className="flex flex-col w-full mx-4 md:mx-12 lg:mx-16 xl:mx-0 sm:w-[70%] bg-secondary p-5 rounded-xl z-10">
      <span className="text-Seventh text-xl font-bold mb-7">ارسال پیام</span>
      <div className="flex w-full space-x-4 sm:gap-4 mb-5 flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col w-full sm:w-1/2 mb-4 sm:mb-0">
          <label htmlFor="fullName" className="block text-Seventh text-base font-normal">نام خانوادگی</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
            onChange={onChange}
          />
          {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label htmlFor="phoneNumber" className="block text-Seventh text-base font-normal">شماره تماس</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
            onChange={onChange}
            maxLength={11}
          />
          {errors.phoneNumber && <div className="text-red-500 text-sm">{errors.phoneNumber}</div>}
        </div>
      </div>
      <div className="flex flex-col h-[40%] mb-7">
        <label htmlFor="message" className="block text-Seventh text-base font-normal">پیام</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          className="w-full sm:h-48 bg-fifth text-foreground mt-2 p-4 rounded-lg focus:outline-none"
          onChange={onChange}
        />
        {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`lg:w-60 w-full h-14 px-4 py-2 rounded-xl transition-colors self-end ${isSubmitting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-primary text-white  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)]  active:translate-y-0 active:bg-primary"
          }`}
      >
        {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
      </button>
    </form>
  )
);
// this line change the component name to its real name. cause memo will probably break its real name.
ContactForm.displayName = "ContactForm";

export default ContactForm