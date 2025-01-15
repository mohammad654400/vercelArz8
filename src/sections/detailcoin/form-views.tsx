import React, { useState } from "react";

interface FormViewsProps {
  addComment: (name: string, text: string) => void;
}

export default function FormViews({ addComment }: FormViewsProps) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullname || !formData.comments) {
      alert("لطفاً نام و نظر خود را وارد کنید.");
      return;
    }

    addComment(formData.fullname, formData.comments);

    setFormData({ fullname: "", email: "", comments: "" });
    alert("نظر شما با موفقیت ارسال شد.");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full gap-y-5 flex flex-col">
      <div>
        <textarea
          id="comments"
          name="comments"
          placeholder="نظر خود را بنویسید..."
          value={formData.comments}
          onChange={handleChange}
          className="w-full p-3 rounded-[20px] h-36 bg-secondary focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="flex gap-x-4">
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="نام"
          value={formData.fullname}
          onChange={handleChange}
          autoComplete="off"
          className="w-full p-2 rounded-[15px] bg-secondary focus:ring-0 focus:outline-none h-12"
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="ایمیل"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          className="w-full p-2 rounded-[15px] bg-secondary focus:ring-0 focus:outline-none h-12"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-primary text-white rounded-[15px] text-base font-bold px-12 py-4 text-center">
          ارسال نظر
        </button>
      </div>
    </form>
  );
}
