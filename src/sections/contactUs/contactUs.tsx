"use client"
import Image from "next/image";
import OrbitAnimation from "./animation/OrbitAnimation";
import PhotoContactSupport from "@/assets/images/contactUs/Asset 1@300x 2.png"
import Call from "@/assets/icons/contactUs/call"
import Email from "@/assets/icons/contactUs/email"
import Location from "@/assets/icons/contactUs/location"
import Support from "@/assets/icons/contactUs/support"
import Telegram from "@/assets/icons/contactUs/telegram"
import { useCallback, useRef, useState } from "react";
import { Modal } from "../apply/modal/Modal";
import { validationSchema } from './yup/validationSchema';

interface FormData {
    fullName: string;
    phoneNumber: string;
    message: string;
}

export default function ContactUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({});


    const formDataRef = useRef<FormData>({
        fullName: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        formDataRef.current[name as keyof FormData] = value;
    };


    const validateForm = useCallback(async () => {
        try {
            await validationSchema.validate(formDataRef.current, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err: any) {
            const newErrors: Record<string, string> = {};
            err.inner.forEach((error: Yup.ValidationError) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    }, [formDataRef]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (!isValid) {
            setIsSuccessModal(false);
            setIsModalOpen(true);
            return;
        }

        setIsSuccessModal(true);
        setIsModalOpen(true);
    };

    return (
        <div className=" bg-background ">

            <div className="flex flex-col lg:flex-row w-full pt-28 justify-between sm:px-[120px] sm:py-[30px]">

                <div className="flex flex-col order-2 lg:order-1 mt-10 lg:mt-0  w-full lg:w-[60%]">
                    <h1 className="text-foreground text-4xl font-bold">تماس با پشتیبانی صرافی ارزهشت</h1>
                    <span className="text-foreground text-base font-semibold leading-10 mt-4">ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده است تا در سریع‌ترین زمان ممکن به شما کمک کند.</span>

                    <span className="text-foreground text-base font-semibold mt-5">اطلاعات تماس</span>

                    <div className="flex flex-row justify-between items-center mt-3">
                        <div className="flex flex-col">
                            <div className="flex h-14">
                                <div className="flex h-full items-center justify-center bg-secondary rounded-xl  p-3">
                                    <Call />
                                    <span className="text-2xl text-foreground mr-3 font-semibold">021-284299</span>
                                </div>
                                <div className="flex h-full items-center justify-center bg-secondary rounded-xl mr-5 p-3">
                                    <Support />
                                    <span className="text-2xl text-foreground mr-3 font-semibold">پشتیبانی آنلاین</span>
                                </div>
                            </div>
                            <div className="flex h-24 flex-col bg-secondary rounded-xl  p-4 mt-5">
                                <div className="flex h-full items-center">
                                    <Location />
                                    <span className="text-xl text-foreground mr-3 font-normal">آدرس</span>

                                </div>
                                <span className="text-xl text-foreground font-normal">مراغه جام جم ، مجتمع سهند ، طبقه 5</span>

                            </div>

                        </div>
                        <div className="flex flex-col">
                            <div className="bg-secondary h-14 rounded-xl text-center p-3">
                                <span className="text-2xl text-foreground font-semibold">تلگرام</span>
                            </div>

                            <div className="bg-secondary h-24 rounded-xl mt-5  p-3">
                                <Telegram />
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <div className="bg-secondary rounded-xl h-14  p-3 text-center">
                                <span className="text-2xl text-foreground font-semibold">ایمیل</span>
                            </div>

                            <div className="bg-secondary h-24 rounded-xl mt-5  p-3">
                                <Email />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex w-full lg:w-[40%] order-1 lg:order-2  justify-center lg:justify-end">
                    <Image
                        src={PhotoContactSupport}
                        alt="Sample Image"
                        width={392}
                        height={504}
                        layout="intrinsic"
                        priority
                    />
                </div>

            </div>

            <div className="relative w-full h-[1100px] flex items-center justify-between overflow-hidden sm:px-[120px]">


                <form onSubmit={handleSubmit} className="w-[50%] h-[40%] min-w-[560px]   flex flex-col bg-secondary p-6 rounded-xl z-10">
                    <div className="flex justify-between space-x-4 mb-6 flex-col sm:flex-row">
                        <div className="flex flex-col w-[47%] mb-4 sm:mb-0">
                            <label htmlFor="fullName" className="block text-foreground">نام خانوادگی</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                className="w-full h-10 mt-2 px-4 rounded-lg"
                                placeholder="نام خانوادگی"
                                onChange={handleChange}
                            />
                            {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}

                        </div>
                        <div className="flex flex-col  w-[47%] mb-4 sm:mb-0">
                            <label htmlFor="phoneNumber" className="block text-foreground">شماره تماس</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                className="w-full h-10 mt-2 px-4 rounded-lg"
                                placeholder="شماره تماس"
                                onChange={handleChange}
                            />
                            {errors.fullName && <div className="text-red-500 text-sm">{errors.phoneNumber}</div>}

                        </div>

                    </div>

                    <div className="flex flex-col mb-6 h-[40%]">
                        <label htmlFor="message" className="block text-foreground">پیام</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full h-full mt-2 px-4 rounded-lg"
                            placeholder="پیام"
                            onChange={handleChange}
                        />
                        {errors.fullName && <div className="text-red-500 text-sm">{errors.message}</div>}

                    </div>


                    <button
                        type="submit"
                        className="w-60 h-14 bg-primary mt-7 text-white px-4 py-2 rounded-xl transition-colors self-end"
                    >
                        ارسال درخواست
                    </button>
                </form>


                <div className="absolute w-[50%] h-full left-0 top-0">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                            <OrbitAnimation />
                        </div>
                    </div>
                </div>
            </div>


            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} isSuccess={isSuccessModal} />}
        </div>
    );
}
