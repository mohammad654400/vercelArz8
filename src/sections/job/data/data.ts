import clock from "@/assets/icons/job/clock"
import emoji from "@/assets/icons/job/emoji"
import insurance from "@/assets/icons/job/insurance"
import share from "@/assets/icons/job/share"

export interface whyUs {
    title: string;
    content: string;
    icon: React.ComponentType;
}

export const whyUs: whyUs[] = [
    { content: "فضای بسیار صمیمی همراه پیرفت دوره ای برای همه کارمندان", title: "محیط پویا ", icon: emoji },
    { content: "از همان اول استخدام در عنوان شغلی خودتان بیمه میشوید.", title: "بیمه", icon: insurance },
    { content: "با عضویت در تیم ها میتوانید مهارت های خودتان را ارتقا دهید.", title: " تیم سازی ", icon: share },
    { content: "با حضور ساعتی در شرکت کار های خود را انجام دهید.", title: "ساعت کاری منعطف", icon: clock },
];

export interface JobListing {
    id: number;
    title:String;
    titleFn: string;
    city: string;
    jobCategory: string;
    employmentType: "ساعتی" | "پروژه‌ای" | "تمام وقت";
    workMode: "حضوری" | "دورکاری";
    gender: string;
    age: string;
    skillLevel: string;
    minExperience: string;
    salaryRange: string;
    workingDays: string;
    responsibilities: string[];
    requirements: string[];
}

export const jobListings: JobListing[] = [
    {
        id: 1,
        title:"senior-technical-support",
        titleFn: "استخدام پشتیبان تلفنی",
        city: "تهران",
        jobCategory: "پشتیبانی",
        employmentType: "تمام وقت",
        workMode: "حضوری",
        gender: "خانم",
        age: "از 25 تا 40 سال",
        skillLevel: "متوسط",
        minExperience: "1 سال",
        salaryRange: "7 تا 15 میلیون تومان",
        workingDays: "شنبه تا پنجشنبه",
        responsibilities: [
            "پاسخ‌گویی حرفه‌ای به تماس‌های مشتریان",
            "ارائه راهنمایی دقیق و حل مشکلات مشتریان",
            "ثبت اطلاعات تماس و مدیریت درخواست‌ها",
            "حفظ رضایت مشتری و ارائه بازخورد مثبت",
        ],
        requirements: [
            "آشنایی با فنون مذاکره و ارتباط تلفنی",
            "توانایی کار با کامپیوتر و نرم‌افزارهای مربوطه",
            "مسئولیت‌پذیری و صبر بالا",
            "حفظ محرمانگی اطلاعات مشتریان",
        ],
    },
    {
        id: 2,
        title:"senior-react-developer",
        titleFn: "توسعه‌دهنده وب",
        city: "مشهد",
        jobCategory: "فناوری اطلاعات",
        employmentType: "پروژه‌ای",
        workMode: "دورکاری",
        gender: "آقا یا خانم",
        age: "حداقل 20 سال",
        skillLevel: "حرفه‌ای",
        minExperience: "2 سال",
        salaryRange: "15 تا 25 میلیون تومان",
        workingDays: "شنبه تا پنجشنبه",
        responsibilities: [
            "طراحی و پیاده‌سازی وب‌سایت‌های پیشرفته",
            "رفع اشکالات فنی و بهبود عملکرد وب‌سایت‌ها",
            "همکاری با تیم طراحی و تولید محتوا",
            "نوشتن کدهای بهینه و خوانا",
        ],
        requirements: [
            "تسلط بر HTML, CSS, JavaScript",
            "آشنایی با فریم‌ورک‌های مدرن مانند React یا Vue",
            "توانایی مدیریت زمان و رعایت ددلاین‌ها",
        ],
    },
    {
        id: 3,
        titleFn:"کارشناس ارشد سئو",
        title: "Senior-seo-expert",
        city: "اصفهان",
        jobCategory: " کارشناس ارشد سئو",
        employmentType: "ساعتی",
        workMode: "حضوری",
        gender: "آقا",
        age: "از 22 تا 35 سال",
        skillLevel: "مبتدی تا متوسط",
        minExperience: "6 ماه",
        salaryRange: "ساعتی 50 هزار تومان",
        workingDays: "شنبه تا چهارشنبه",
        responsibilities: [
            "معرفی و فروش محصولات به مشتریان",
            "ایجاد ارتباط موثر و پایدار با مشتریان",
            "ارائه گزارش‌های فروش روزانه",
        ],
        requirements: [
            "فن بیان قوی و مهارت ارتباطی بالا",
            "آشنایی با تکنیک‌های فروش و بازاریابی",
            "ظاهر مرتب و حرفه‌ای",
        ],
    },
];



export interface OurCompanions{
    name:string;
    position:string
}

export const OurCompanions:OurCompanions[]=[
    {name:"امیر رستمی",position:"مدیرعامل"},
    {name:"یونس سعیدی",position:"هم بنیانگذار"},
    {name:"امیر رستمی",position:"مدیرعامل"},
    {name:"یونس سعیدی",position:"هم بنیانگذار"},
    {name:"امیر رستمی",position:"مدیرعامل"},
    {name:"یونس سعیدی",position:"هم بنیانگذار"},
    {name:"امیر رستمی",position:"مدیرعامل"},
    {name:"یونس سعیدی",position:"هم بنیانگذار"},
    {name:"یونس سعیدی",position:"هم بنیانگذار"},
]