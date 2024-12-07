"use client"
import Image from "next/image";
import OrbitAnimation from "./OrbitAnimation";
import PhotoContactSupport from "@/assets/images/contactUs/Asset 1@300x 2.png"
import Call from "@/assets/icons/contactUs/call"
import Email from "@/assets/icons/contactUs/email"
import Location from "@/assets/icons/contactUs/location"
import Support from "@/assets/icons/contactUs/support"
import Telegram from "@/assets/icons/contactUs/telegram"
import { useCallback, useRef, useState } from "react";
import { Modal } from "../apply/modal/Modal";
import { validationSchema } from './yup/validationSchema';


const orbits = [
    {
        radius: 100,
        speed: 0.5,
        opacity: 0.9,
        images: [
            { src: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzB5iXAAlY42kuL~WS4LxeX4GKxd85lsJOWlpnLi3yRKn2lR6MmM53Ia1L9lwTAmZ4oZ6ZEXUM-aGpw0jyJRkmY8domyqqEhZbJwcQiwKA5fUHI3nzLwC9bXtwQqqUSapMgfWBGfkkqOLXG8dgGJlL1YYhZiKdQFe9XipwOT9bi4o8K4h3jGZCldW9VBH-1HfkCZg-P232AKPOrful8goap7jCjev-V6wHO9MCP8DtJo-eZDDI6FmVhyRoD1VvNMtMu9BLeQHRMRRWH7rBROdwGO1YwGbmnD96qVgZoWBh9GBAspdvXbD0lbiBlfTUvBzrOJtxusx8k2T14loyZAg__", size: 55 },
            { src: "https://s3-alpha-sig.figma.com/img/032d/8a85/d141711c096f32eab25e8a03399d7919?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnjE~t5sgcafBL13ERAQ-SlRTziW~P6eyIT3Acbm7oxdDQOFAKISDpiREv9zn0EvwF4cMCVfncOisQeCvmWVkKoyfRR7QMLf9uNPqGzOSbalxtOe9hP0PhzyNA2TPI3H60wmel6bYE69Gu8qsA8tEJ5dNmC3xhAR46ErR2LujCJEtqpeSEeqSK38DCCIFMRa0cYZuLBW6CwU0AcPwLiKZ38E3CkjtjAGwj-LNayQ1GAwdI4bvzwkRus0OPIXr6RyQAlts~q7WgOtg9kfoml9uwipP29h3YD3aXf8uzhhVMAxWJimgAQ~WMnuR9FGnL2UcAHSm-0xzL4V9ovQ0bRzng__", size: 45 },
        ],
    },
    {
        radius: 226,
        speed: 0.4,
        opacity: 0.8,
        images: [
            { src: "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UgMgbTosnVPsAmwPd2ezrwgYbkQWKkfUpalR~O0h1qRY5Ihb29N430mZMiv1WEPks5aFWIEaW2LeCjUhyuoGBJW6yqNCBnV7hj4A1Yrc1x2O39A6VG~zTtUWsjDJyrNsy0xd3b0g0zYbR3SWgavn44-JNrZrIEA5tbwivB3192t8vdWvw6nuZ84-BtZrxp4KcgUmIP0UWX~zwOHvtkzGC4HvIiJvtcxhqSkawMBpTY7qU22aDV9tViaLsQ4C1Wr0XiGaMoC6g-SOaSJr-D9XtjItNlEja3YNWQuA~U~X3ZthRky2RjqHgoOPnPtm7ukmjVUNbMFHVLOm74L6nqVVIw__", size: 55 },
            { src: "https://s3-alpha-sig.figma.com/img/ebd9/fba1/691af02d3a7ca8be2811716f82d9212b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UvqYnm9godktv2eajzLjqUYFuK-5u2TldhJRhPPm3ojC6UNaWbfmxervM2Ny2eWi-9BjGvsGtDPk8c9XvckfhKDK0gwXGwxiTyIaHrlRw-qS53MCU0rMZeR-d-Cv7D1mdWuCwrpQkUrEmlnlDZlwtueiYuSz9UyRRR-zCw8II4fjIGDLDwz0z~B8ZoHx6EuKwFe~MsgEtvbGB34X-1-5Y9iYySDDX2K30cqbskpjOeljpcBC68H66RSnK7sujIFm0MtXF7myd6WvyfnXNyU-hb25gJhQ1Z8O9EFMvIS5fPEfIX1sFiGfOafSifQHAAhqe7iBFuV-wUDQVGsIXQeg5w__", size: 75 }
        ],
    },
    {
        radius: 352,
        speed: 0.3,
        opacity: 0.7,
        images: [
            { src: "https://s3-alpha-sig.figma.com/img/cc50/918a/135ade981f1f6c8244faf50d3e2eeaa6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2Oyv-N1WH5MMJzQBLugGodhTRQg0~OK3SnoJph6xTEj4LAB-YiwGM-05h4QSD8cIUipcrl2G~VGiwrSoRuvsCAg2uNQRHKO8kv-6XUFYYGU~znZF9XopahfZitfjCE~apJsXw9ny4ojUggFNQJ0mnqBqstPQXALG7LhsmvflKcd9zUAZRuI9wYg4g-APmp5juhb0jUWThyaicejE-HT31W9kbb-Z0wt2pe0zAvVwQbwP-BYZDf7ljuuR3X0tww3sF9UDbt7rUpMp4NzqBcMPoGs-1jpycfu4a0p8iMwnLHYxioCaYVpalxmHn2vGtUTKX7MBVEf4GM2GvszSAJuGw__", size: 85 },
            { src: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vzfjwxud7m8Yc2Q1cpPpPGHm6cNKRYlOwQHtCwLIK1~9iSI-erPnmzwwreTEPQP7tW3S-qM9UdM8ssNvvxDqRS90IaBGqxDhiZ1aQrzMQMn-dJrtutFxcYjH07zrmyLs4s3R2jP9jvUykqVW0-0YSPlOI7UOPLvx4kcBnm1ziuMyuFPHwxZp8~3umDaVupahUoJPDnFtn8khOGebFJdklpf0x5osuU-RFi5NCcf-0RY2vVXO1p0JPR9gWJ8l5yS6I5yyO-6tZWqMHqBqZrM7BJUBbBa4QMg-aDQ1fZOqsFcVefiMBAVyXSXWbY7hVg4v5D2cVg1MUw0UG2eNJLoyDw__", size: 81 },
        ],
    },
    {
        radius: 478,
        speed: 0.2,
        opacity: 0.6,
        images: [
            { src: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzB5iXAAlY42kuL~WS4LxeX4GKxd85lsJOWlpnLi3yRKn2lR6MmM53Ia1L9lwTAmZ4oZ6ZEXUM-aGpw0jyJRkmY8domyqqEhZbJwcQiwKA5fUHI3nzLwC9bXtwQqqUSapMgfWBGfkkqOLXG8dgGJlL1YYhZiKdQFe9XipwOT9bi4o8K4h3jGZCldW9VBH-1HfkCZg-P232AKPOrful8goap7jCjev-V6wHO9MCP8DtJo-eZDDI6FmVhyRoD1VvNMtMu9BLeQHRMRRWH7rBROdwGO1YwGbmnD96qVgZoWBh9GBAspdvXbD0lbiBlfTUvBzrOJtxusx8k2T14loyZAg__", size: 99 },
            { src: "https://s3-alpha-sig.figma.com/img/f6e4/02df/f94d91c8643f6698b126e7dec5854350?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgkjryH9RGlmZZ9qLQioFNvpjjVjED3L8OhP2L65AVGPnI5gJMhx4Qmt-L272jS3nK-TszEOLH3RusHcj3vATy2WT3qOmRIJ87m36xBsCMof2iNpso5HwEF43xb3D2x61iIFbOOMxHoYToVIrPW-0-Z4E3F5VtXWy33npO9OrQaydMnNHytZu5DU3Iq89Gt3j9MKRAvGby3R4QmdS1tVINaU7nQdMl4O099UMp6B7E5pxlhjpuOO4E0b1zrbS1QlpKSTSUUz1hEVVznwbF4XtrD75jZgv2dtm5XZ5IchjNjYV7PYi-QJL6ODWHUAvZnrWPiw84NQu3XAcgrQjMueJw__", size: 105 },
        ],
    },
];


export default function ContactUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({});


    // const [formData, setFormData] = useState({
    //     fullName: "",
    //     phoneNumber: "",
    //     message: ""
    // });

    const formDataRef = useRef<Record<string>>({
        fullName: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        formDataRef.current[name] = value;
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
        <div className=" bg-background">

            <div className="flex flex-col lg:flex-row w-full pt-28 justify-between">

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

            <div className="relative w-full h-[1100px] flex items-center justify-between overflow-hidden">


                <form onSubmit={handleSubmit} className="w-[50%] h-[40%] min-w-[560px] mr-11 flex flex-col bg-secondary p-6 rounded-xl z-10">
                    <div className="flex justify-between space-x-4 mb-6 flex-col sm:flex-row">
                        <div className="flex flex-col w-[47%] mb-4 sm:mb-0">
                            <label htmlFor="fullName" className="block text-black">نام خانوادگی</label>
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
                            <label htmlFor="phoneNumber" className="block text-black">شماره تماس</label>
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
                        <label htmlFor="message" className="block text-black">پیام</label>
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
                            <OrbitAnimation orbits={orbits} />
                        </div>
                    </div>
                </div>
            </div>


            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} isSuccess={isSuccessModal} />}
        </div>
    );
}
