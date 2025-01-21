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
import Modal from '@/components/Modal';
import ErrorContactUs from "@/assets/icons/modal/errorContactUs"
import SuccessContactUs from "@/assets/icons/modal/successContactUs"
import { validationSchema } from './yup/validationSchema';
import * as Yup from 'yup';

interface ModalLine {
    text: string;
    highlightedWords?: { word: string; color: "green" | "red" }[];
}

interface FormData {
    fullName: string;
    phoneNumber: string;
    message: string;
}

export default function ContactUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [modalLines, setModalLines] = useState<ModalLine[]>([]);
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
                if (error.path) {
                    newErrors[error.path] = error.message;
                }
            });
            setErrors(newErrors);
            return false;
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (isValid) {
            setModalType("success");
            setModalLines([
                {
                    text: "پیام شما با موفقیت ارسال شد.",
                    highlightedWords: [{ word: "موفقیت", color: "green" }],
                },

            ]);
        } else {
            setModalType("error");
            setModalLines([
                {
                    text: "ارسال پیام با مشکل روبرو شد",
                    highlightedWords: [{ word: "مشکل", color: "red" }],
                },

            ]);
        }
        setIsModalOpen(true);
    };



    return (
        <div className="bg-background base-style">

            <div className="flex flex-col lg:flex-row pt-[110px] lg:pt-[194px] w-full gap-8  justify-between ">

                <div className="flex flex-col order-2 lg:order-1 gap-8 justify-center  w-full lg:w-[60%] lg:max-w-[1000px] lg:min-w-[509px]">
                    <div className="grid gap-[10px]">
                        <h1 className="text-foreground xl:text-[40px] lg:text-4xl sm:text-2xl text-xl  font-bold">تماس با پشتیبانی صرافی ارزهشت</h1>
                        <span className="text-foreground text-justify text-xs sm:text-base font-semibold sm:leading-10 leading-7">ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده است تا در سریع‌ترین زمان ممکن به شما کمک کند.</span>

                    </div>

                    <div className="flex flex-col">


                        <span className="text-foreground text-base font-semibold mb-5">اطلاعات تماس</span>

                        <div className="flex flex-row lg:max-w-[1000px] lg:min-w-[500px] gap-4 w-full ">

                            <div className="flex w-[65%] sm:w-[72%] gap-4 justify-between h-full flex-col">
                                <div className="flex h-[30px] sm:h-[53px] w-full gap-2 sm:gap-4 justify-between  ">
                                    <div className="flex h-full w-full items-center justify-start bg-secondary rounded-xl  p-3">
                                        <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                                            <Call />
                                        </div>

                                        <span className="xl:text-2xl md:text-lg sm:text-base text-sm text-foreground mr-1 sm:mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">021-284299</span>
                                    </div>
                                    <div className="flex h-full w-full  items-center justify-start bg-secondary rounded-xl p-3">
                                        <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                                            <Support />
                                        </div>

                                        <span className="xl:text-2xl md:text-lg sm:text-base text-sm text-foreground mr-1 sm:mr-3 font-semibold whitespace-nowrap text-ellipsis overflow-hidden">پشتیبانی آنلاین</span>
                                    </div>
                                </div>
                                <div className="flex h-[54px] sm:h-[99px] w-full  justify-between p-2 sm:p-3 flex-col rounded-xl bg-secondary">
                                    <div className="flex items-center">
                                        <div className="w-[14px] h-[14px] sm:w-[25px] sm:h-[25px]">
                                            <Location />
                                        </div>

                                        <span className="xl:text-xl lg:text-base text-xs  text-foreground mr-2 sm:mr-3 font-normal">آدرس</span>

                                    </div>
                                    <span className="xl:text-xl lg:text-base text-xs mt-1 sm:mt-0 text-foreground font-normal">مراغه جام جم ، مجتمع سهند ، طبقه 5</span>

                                </div>
                            </div>


                            <div className="flex w-[35%] sm:w-[28%] h-full">
                                <div className="flex-col gap-4 w-full h-full  flex  ">
                                    <div className="flex h-[30px] sm:h-[53px] gap-4 w-full  ">
                                        <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl text-center flex items-center justify-center  ">
                                            <span className="xl:text-2xl md:text-xl sm:text-base text-sm text-foreground font-semibold text-center ">تلگرام</span>
                                        </div>

                                        <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl text-center flex items-center justify-center ">
                                            <span className="xl:text-2xl md:text-xl sm:text-base text-sm text-foreground font-semibold text-center">ایمیل</span>
                                        </div>
                                    </div>
                                    <div className="flex h-[54px] sm:h-[99px] gap-4 w-full  ">
                                        <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl  flex self-center items-center justify-center ">
                                            <div className="w-10 h-10 sm:h-14 sm:w-14">
                                                <Telegram />
                                            </div>

                                        </div>
                                        <div className="bg-secondary h-full w-[54px] sm:w-[90px] rounded-lg sm:rounded-xl   flex self-center items-center justify-center">
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

            <div className="relative   w-full h-[1100px] flex items-center justify-between overflow-hidden full-screen">


                <form onSubmit={handleSubmit} className=" flex flex-col  w-full mx-4 md:mx-12 lg:mx-16 xl:mx-0 sm:w-[70%]    bg-secondary p-5 rounded-xl z-10  ">
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

                    <div className="flex flex-col h-[40%] mb-7">
                        <label htmlFor="message" className="block text-Seventh text-base font-normal">پیام</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full sm:h-48 bg-fifth text-foreground mt-2 p-4 rounded-lg focus:outline-none"
                            onChange={handleChange}
                        />
                        {errors.fullName && <div className="text-red-500 text-sm">{errors.message}</div>}

                    </div>


                    <button
                        type="submit"
                        className="lg:w-60 w-full h-14 bg-primary  text-white px-4 py-2  rounded-xl transition-colors self-end"
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


            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    type={modalType}
                    lines={modalLines}
                    icon={
                        modalType === "success" ? (
                            <div className="  w-24 h-24 lg:w-44 lg:h-44">
                                <SuccessContactUs />
                            </div>
                        ) : (
                            <div className=" w-24 h-24 lg:w-44 lg:h-44">
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
