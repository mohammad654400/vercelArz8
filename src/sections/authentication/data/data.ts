const levelsData = [
  {
    level: "سطح صفر",
    requiredInformation: ["ایمیل: داشتن ایمیل معتبر و وریفای شده"],

    accessibility: ["مشاهده قسمت های مختلف"],

    restrictions: ["عدم واریز رمز ارز", "عدم امکان واریز و برداشت ریالی", "عدم خرید و فروش ارز دلاری", "عدم خرید و فروش ارز دلاری"],
  },


  {
    level: "سطح یک",
    requiredInformation: ["ثبت و تایید موبایل به نام صاحب اکانت", "ثبت اطلاعات اولیه", "داشتن حداقل یک کارت بانکی تایید شده"],

    accessibility: ["امکانات سطح قبلی", "واریز نامحدود رمزارز", "ترید نامحدود رمز ارز ها", "واریز ریالی از درگاه بانکی با توجه به قوانین بانک مرکزی هر کارت 50 میلیون و مجموع کارت های بانکی 100 میلیون تومان", "برداشت تومانی نامحدود", "برداشت تومان تا 50 میلیون تومان"],

    restrictions: ["عدم امکان برداشت رمزارز", "عدم خرید ارز های دلاری"],
  },

  {
    level: "سطح دو",
    requiredInformation: ["تصویر مدارک: مدارک را در کنار هم قرار داده و عکس بگیرید و بفرستید."],

    accessibility: ["امکانات سطح قبلی", "برداشت تومان تا 100 میلیون تومان"],

    restrictions: ["عدم امکان برداشت رمزارز", "عدم خرید ارز های دلاری"],
  },

  {
    level: "سطح سه",
    requiredInformation: ["سه روز از واریز: گذشت 72 ساعت از واریز تومان در سطح دو", "تصویر سلفی: ثبت تصویر سلفی طبق مقررات و عکس نمونه"],

    accessibility: ["امکانات سطح قبلی", "برداشت تومان نامحدود", " امکان برداشت رمز ارز تا مبلغ 50 میلیون تومان", "امکان خرید ارز دلاری تا مبلغ 50 میلیون تومان"],

    restrictions: ["گذشت 72 ساعت از واریز تومان در سطح دو"],
  },

  {
    level: "سطح چهار",
    requiredInformation: ["اطلاعات موقعیت و تلفن ثابت: آدرس دقیق و کد پستی و تلفن ثابت رو تایید کنید"],

    accessibility: ["امکانات سطح قبلی", "امکان برداشت رمز ارز تا مبلغ 100 میلیون تومان", "امکان خرید ارز دلاری تا مبلغ 100 میلیون تومان"],

    restrictions: ["گذشت 72 ساعت از سطح سه"],
  },

  {
    level: "سطح پنج ",
    requiredInformation: ["مکالمه تصویری: هماهنگی با پشتیبانی جهت برقراری مکالمه تصویری"],

    accessibility: ["امکانات سطح قبلی", "امکان برداشت رمز ارز تا مبلغ 500 میلیون تومان", "امکان خرید ارز دلاری تا مبلغ 500 میلیون تومان"],

    restrictions: ["هیچ محدودیتی وجود ندارد"],
  },

];

export default levelsData;

import CurrencyTransactions from "@/assets/icons/guidanceCenter/currencyTransactions";
import Support24 from "@/assets/icons/downloadApp/support24";
import Security from "@/assets/icons/downloadApp/security";
import User from "@/assets/icons/authentication/user";
interface CardData {
  icon: () => JSX.Element; 
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  {
    icon: Security,
    title: "امنیت بالا",
    description: "اطلاعات کاربران به‌صورت کاملاً محرمانه ذخیره می‌شود.",
  },
  {
    icon: User,
    title: "سرعت در تأیید",
    description: "بررسی و تأیید مدارک کمتر از 15 دقیقه زمان می‌برد.",
  },
  {
    icon: CurrencyTransactions,
    title: "امکان معامله بی‌درنگ",
    description:
      "پس از تأیید هویت، می‌توانید بلافاصله به معامله ارزهای دیجیتال بپردازید.",
  },
  {
    icon: Support24,
    title: "پشتیبانی 24 ساعته",
    description:
      "تیم پشتیبانی ارز هشت به‌صورت شبانه‌روزی در دسترس شما است.",
  },
];
