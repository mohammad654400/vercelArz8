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
        gender: "خانم و آقا",
        age: "از 18 سال",
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
        titleFn: "توسعه‌دهنده ارشد React",
        city: "مشهد",
        jobCategory: "فناوری اطلاعات",
        employmentType:  "تمام وقت",
        workMode: "حضوری",
        gender: "آقا یا خانم",
        age: "حداقل 20 سال",
        skillLevel: "حرفه‌ای",
        minExperience: "2 سال",
        salaryRange: "15 تا 25 میلیون تومان",
        workingDays: "شنبه تا پنجشنبه",
        responsibilities: [
            "طراحی، توسعه و پیاده‌سازی وب‌سایت‌های پیشرفته با استفاده از React",
            "رفع اشکالات فنی، بهبود عملکرد و بهینه‌سازی وب‌سایت‌ها",
            "همکاری موثر با تیم طراحی UI/UX و تیم تولید محتوا",
            "نوشتن کدهای تمیز، بهینه و قابل نگهداری",
            "مشارکت در طراحی معماری و ساختار کلی پروژه‌های وب",
            "تست، رفع اشکالات و بهبود قابلیت‌های وب‌سایت‌های موجود",
            "مستندسازی کد و نگهداری مستندات فنی"
        ],
        requirements: [
            "تسلط کامل بر HTML، CSS و JavaScript و React و Next.js و ES6",
            "تجربه عملی در استفاده از فریم‌ورک React و آشنایی با ویژگی‌های جدید آن",
            "آشنایی با کتابخانه‌های مدیریت وضعیت مانند Redux یا Context API",
            "توانایی طراحی و پیاده‌سازی کامپوننت‌های قابل استفاده مجدد",
            "آشنایی با اصول و مفاهیم Responsive Design و توسعه وب برای موبایل",
            "توانایی مدیریت زمان و رعایت ددلاین‌ها در محیط پروژه‌های تیمی",
            "آشنایی با ابزارهای کنترل نسخه (Git) و فرآیندهای CI/CD",
            "آشنایی با ابزارهای توسعه مانند Webpack و Babel",
            "تسلط بر استفاده از هوک‌های React (مثل useState، useEffect، useContext، useReducer و...)",
            "آشنایی با مفهوم Static Site Generation (SSG) و قابلیت‌های Next.js در این زمینه",
            "توانایی نوشتن تست‌های واحد (Unit Tests) و تست‌های انتها به انتها (End-to-End) با استفاده از ابزارهایی مانند Jest و Cypress",
            "آشنایی با مفهوم Server-Side Rendering (SSR) و Static Site Generation (SSG) در Next.js",
            "آشنایی با بهینه‌سازی عملکرد در React و Next.js، شامل lazy loading، code splitting و prefetching",
            "توانایی کار با API‌های RESTful و GraphQL و مدیریت درخواست‌های شبکه در React",
            "آشنایی با محیط‌های توسعه و تست در مرورگر، Debugging و profiling کدهای React"
        ],
    },
    {
        id: 3,
        titleFn:"کارشناس ارشد سئو",
        title: "Senior-seo-expert",
        city: "مشهد",
        jobCategory: " کارشناس سئو",
        employmentType: "تمام وقت",
        workMode: "حضوری",
        gender: "آقا",
        age: "از 22 تا 35 سال",
        skillLevel: "متوسط تا حرفه ای",
        minExperience:  "حداقل 3 سال تجربه در زمینه سئو",
        salaryRange: "توافقی",
        workingDays: "شنبه تا پنجشنبه",
        responsibilities: [
            "انجام تحلیل‌های سئو و ارائه راهکارهای بهینه‌سازی سایت",
            "بررسی و تحلیل کلیدواژه‌ها و اجرای استراتژی‌های مرتبط با آن‌ها",
            "بهبود رتبه سایت در موتورهای جستجو (SEO on-page و off-page)",
            "ارائه گزارش‌های هفتگی و ماهانه از پیشرفت پروژه‌های سئو",
            "کار بر روی بهینه‌سازی صفحات وب برای تجربه کاربری بهتر",
            "ایجاد لینک‌های باکیفیت و استفاده از استراتژی‌های Link Building",
            "ارتباط موثر با تیم محتوای وب‌سایت برای بهبود سئو",
            "مراقبت از عملکرد سایت و به‌روزرسانی‌های الگوریتمی"
        ],
        requirements: [
            "تجربه عملی در بهینه‌سازی موتور جستجو (SEO) با استفاده از ابزارهای معتبر مانند Google Analytics, Ahrefs, SEMrush",
            "آشنایی با اصول و تکنیک‌های سئو داخلی و خارجی",
            "توانایی تحلیل داده‌ها و ایجاد استراتژی‌های سئو مبتنی بر آن",
            "آشنایی با اصول سئو در موبایل و تجربه در بهینه‌سازی سایت‌های ریسپانسیو",
            "آشنایی با ابزارهای تحقیق کلمات کلیدی و تحلیل رقبا",
            "توانایی نگارش گزارش‌های تحلیلی و قابل فهم برای تیم و مدیران",
            "روحیه کار تیمی و توانایی برقراری ارتباط موثر با دیگر بخش‌ها"
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