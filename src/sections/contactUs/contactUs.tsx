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
        <div className="bg-background base-style">

            <div className="flex flex-col lg:flex-row lg:pt-24 w-full gap-8  justify-between ">

                <div className="flex flex-col order-2 lg:order-1 gap-8 justify-center  w-full lg:w-[60%] lg:max-w-[1000px] lg:min-w-[509px]">

                    <h1 className="text-foreground lg:text-4xl sm:text-2xl text-xl  font-bold">تماس با پشتیبانی صرافی ارزهشت</h1>
                    <span className="text-foreground text-justify text-sm sm:text-base font-semibold sm:leading-10 leading-7">ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده است تا در سریع‌ترین زمان ممکن به شما کمک کند.</span>

                    <div className="flex flex-col">


                        <span className="text-foreground text-base font-semibold mb-5">اطلاعات تماس</span>

                        <div className="flex flex-col sm:flex-row lg:max-w-[1000px] lg:min-w-[500px] gap-4 w-full justify-between">

                            <div className="flex w-full  sm:w-[75%] lg:max-w-[720px]  gap-4 justify-between h-full   flex-col ">
                                <div className="flex h-[53px] w-full gap-4 justify-between  ">
                                    <div className="flex h-full w-1/2 items-center justify-start bg-secondary rounded-xl  p-3">
                                        <Call />
                                        <span className="md:text-lg sm:text-base text-sm text-foreground mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">021-284299</span>
                                    </div>
                                    <div className="flex h-full w-1/2  items-center justify-start bg-secondary rounded-xl p-3">
                                        <Support />
                                        <span className="md:text-lg sm:text-base text-sm text-foreground mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">پشتیبانی آنلاین</span>
                                    </div>
                                </div>
                                <div className="flex h-[99px] w-full  justify-between p-3 flex-col rounded-xl bg-secondary">
                                    <div className="flex items-center">
                                        <Location />
                                        <span className="lg:text-base text-sm  text-foreground mr-3 font-normal">آدرس</span>

                                    </div>
                                    <span className="lg:text-base text-sm   text-foreground font-normal">مراغه جام جم ، مجتمع سهند ، طبقه 5</span>

                                </div>
                            </div>


                            <div className="flex  w-full gap-4 sm:w-[25%] sm:min-w-[195px] lg:max-w-[240px] justify-between h-full">
                                <div className=" flex-col gap-5 w-full h-full justify-between hidden sm:flex  ">
                                    <div className="flex h-[53px] gap-4 w-full justify-between ">
                                        <div className="bg-secondary h-full w-[90px] rounded-xl text-center p-3">
                                            <span className="md:text-xl sm:text-base text-sm text-foreground font-semibold text-center">تلگرام</span>
                                        </div>

                                        <div className="bg-secondary h-full w-[90px] rounded-xl text-center p-3 ">
                                            <span className="md:text-xl sm:text-base text-sm text-foreground font-semibold text-center">ایمیل</span>
                                        </div>
                                    </div>
                                    <div className="flex h-[99px] gap-4 w-full justify-between ">
                                        <div className="bg-secondary h-full w-[90px] rounded-xl p-3  flex self-center items-center justify-center ">
                                            <div className="h-14 w-14">
                                                <Telegram />
                                            </div>

                                        </div>
                                        <div className="bg-secondary h-full w-[90px] rounded-xl p-3  flex self-center items-center justify-center">
                                            <div className="h-14 w-14">
                                                <Email />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-[53px] justify-between flex flex-row gap-4  sm:hidden ">
                                    <div className="flex h-full w-[50%] items-center justify-start bg-secondary rounded-xl  py-3">
                                        <div className="w-7 mx-5">
                                            <Telegram />
                                        </div>

                                        <span className="md:text-lg text-base text-foreground font-semibold">تلگرام</span>
                                    </div>

                                    <div className="flex h-full w-[50%] items-center justify-start bg-secondary rounded-xl  py-3">
                                        <div className="w-7 mx-5">
                                            <Email />
                                        </div>

                                        <span className="md:text-lg text-base text-foreground font-semibold">ایمیل</span>
                                    </div>
                                </div>



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

            <div className="relative  -mt-[5%] w-full h-[1100px] flex items-center justify-between overflow-hidden full-screen">


                <form onSubmit={handleSubmit} className=" flex flex-col  w-full mx-auto md:mx-12 lg:mx-16 xl:mx-0 sm:w-[70%]  lg:h-[50%] max-h-[500px] xl:min-h-[600px]  sm:min-w-[300px] md:min-w-[400px]  bg-secondary p-5 rounded-xl z-10 -mt-[10%] ">
                    <span className="text-Seventh text-xl font-bold mb-7">ارسال پیام</span>
                    <div className="flex w-full space-x-4 sm:gap-4 mb-5 flex-col sm:flex-row sm:justify-between">

                        <div className="flex flex-col w-full sm:w-1/2 mb-4 sm:mb-0">
                            <label htmlFor="fullName" className="block text-Seventh text-base font-normal">نام خانوادگی</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none "
                                onChange={handleChange}
                            />
                            {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}

                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 mb-0" style={{ marginLeft: "0" }}>
                            <label htmlFor="phoneNumber" className="block text-Seventh text-base font-normal">شماره تماس</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
                                onChange={handleChange}
                            />
                            {errors.fullName && <div className="text-red-500 text-sm">{errors.phoneNumber}</div>}

                        </div>

                    </div>

                    <div className="flex flex-col mb-6 h-[40%]">
                        <label htmlFor="message" className="block text-Seventh text-base font-normal">پیام</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full sm:h-56 bg-fifth text-foreground mt-2 p-4 rounded-lg focus:outline-none"
                            onChange={handleChange}
                        />
                        {errors.fullName && <div className="text-red-500 text-sm">{errors.message}</div>}

                    </div>


                    <button
                        type="submit"
                        className="lg:w-60 w-full h-14 bg-primary my-auto text-white px-4 py-2 rounded-xl transition-colors self-end"
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
