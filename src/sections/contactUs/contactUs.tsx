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

            <div className="flex flex-col lg:flex-row w-full pt-28 justify-between px-5  lg:px-[120px] lg:py-[30px]">

                <div className="flex flex-col order-2 lg:order-1 mt-10 lg:mt-0  w-full lg:w-[65%]">
                    <h1 className="text-foreground lg:text-4xl text-2xl  font-bold">تماس با پشتیبانی صرافی ارزهشت</h1>
                    <span className="text-foreground text-base font-semibold leading-10 mt-4">ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده است تا در سریع‌ترین زمان ممکن به شما کمک کند.</span>

                    <span className="text-foreground text-base font-semibold mt-5 mb-3">اطلاعات تماس</span>

                    <div className="flex flex-col sm:flex-row  w-full justify-between">

                        <div className="flex flex-col gap-5 justify-between h-full sm:w-[66%] w-full  ">
                            <div className="flex h-[53px] w-full justify-between ">
                                <div className="flex h-full w-[48%] items-center justify-start bg-secondary rounded-xl  p-3">
                                    <Call />
                                    <span className="md:text-2xl text-lg text-foreground font-semibold">021-284299</span>
                                </div>
                                <div className="flex h-full w-[48%]  items-center justify-start bg-secondary rounded-xl p-3">
                                    <Support />
                                    <span className="md:text-2xl text-lg text-foreground mr-3 font-semibold">پشتیبانی آنلاین</span>
                                </div>
                            </div>
                            <div className="flex h-[99px] w-full justify-between p-3 flex-col rounded-xl bg-secondary">
                                <div className="flex items-center">
                                    <Location />
                                    <span className="text-xl  text-foreground mr-3 font-normal">آدرس</span>

                                </div>
                                <span className="text-xl  text-foreground font-normal">مراغه جام جم ، مجتمع سهند ، طبقه 5</span>

                            </div>
                        </div>


                        <div className="h-full w-full  sm:w-[31%] ">
                            <div className="flex flex-col gap-5 w-full h-full justify-between hidden sm:flex  ">
                                <div className="flex h-[53px] w-full justify-between ">
                                <div className="bg-secondary h-full w-[99px] rounded-xl text-center p-3">
                                    <span className="lg:text-2xl text-lg text-foreground font-semibold text-center">تلگرام</span>
                                </div>

                                <div className="bg-secondary h-full w-[99px] rounded-xl text-center p-3">
                                    <span className="lg:text-2xl text-lg text-foreground font-semibold text-center">ایمیل</span>
                                </div>
                                </div>
                                <div className="flex h-[99px] w-full justify-between ">
                                <div className="bg-secondary h-full w-[99px] rounded-xl p-3  ">
                                    <Telegram />
                                </div>
                                <div className="bg-secondary h-full w-[99px] rounded-xl p-3  ">
                                    <Email />
                                </div>
                                </div>
                            </div>

                            <div className="w-full h-[53px] justify-between flex flex-row  sm:hidden  mt-5">
                            <div className="flex h-full w-[48%] items-center justify-start bg-secondary rounded-xl  p-3">
                                    <Telegram />
                                    <span className="md:text-2xl text-lg text-foreground font-semibold">تلگرام</span>
                                </div>
                            
                                <div className="flex h-full w-[48%] items-center justify-start bg-secondary rounded-xl  p-3">
                                    <Email />
                                    <span className="md:text-2xl text-lg text-foreground font-semibold">ایمیل</span>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>

                <div className="flex w-full lg:w-[30%] order-1 lg:order-2  justify-center lg:justify-end">
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


                <form onSubmit={handleSubmit} className="w-[50%] h-[40%] min-w-[300px] md:min-w-[560px]  flex flex-col bg-secondary p-6 rounded-xl z-10">
                    <div className="flex w-full space-x-4 mb-6 flex-col sm:flex-row sm:justify-between">
                        <div className="flex flex-col w-full sm:w-[47%] mb-4 sm:mb-0">
                            <label htmlFor="fullName" className="block text-foreground">نام خانوادگی</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                className="w-full text-foreground bg-background h-10 mt-2 px-4 rounded-lg focus:outline-none "
                                placeholder="نام خانوادگی"
                                onChange={handleChange}
                            />
                            {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}

                        </div>
                        <div className="flex flex-col w-full sm:w-[47%] mb-0" style={{marginLeft:"0"}}>
                            <label htmlFor="phoneNumber" className="block text-foreground">شماره تماس</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                className="w-full text-foreground bg-background h-10 mt-2 px-4 rounded-lg focus:outline-none"
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
                            className="w-full h-full bg-background text-foreground mt-2 p-4 rounded-lg focus:outline-none"
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
