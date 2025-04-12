
import Magicpen from "@/assets/icons/downloadApp/magicpen"
import SpotRate from "@/assets/icons/downloadApp/spotRate"
import Diversity from "@/assets/icons/downloadApp/diversity"
import EarningMoney from "@/assets/icons/downloadApp/earningMoney"
import Support24 from "@/assets/icons/downloadApp/support24"
import Security from "@/assets/icons/downloadApp/security"
interface CardData {
  icon: () => JSX.Element; 
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  {
    icon: Magicpen,
    title: "احراز هویت سریع و آسان",
    description: "سطوح مختلف احراز هویت و شروع به معامله با تایید شماره تلفن همراه",
  },
  {
    icon: SpotRate,
    title: "نرخ لحظه ایی",
    description: "امکان مشاهده قیمت لحظه ایی ارز ها همراه با چارت یا نمودار پیشرفته با امکانات تحلیل تکنیکال.",
  },
  {
    icon: Diversity,
    title: "تنوع بالای ارز",
    description:
      "در ارز هشت، با دسترسی به بیش از ۱۳۰۰ نوع ارز دیجیتال، انتخاب‌های متنوعی برای خرید و فروش در اختیارتان قرار دارد.",
  },
  {
    icon: Support24,
    title: "پشتیبانی",
    description:
      "چندین راه ارتباطی مختلف مانند چت آنلاین، تیکت، تلگرام و پشتیبانی تلفنی",
  },
  {
    icon: Security,
    title: "امنیت",
    description:
      "نگهداری ارز ها در کیف پول های آفلاین و سخت افزاری",
  },
  {
    icon: EarningMoney,
    title: "کسب درآمد",
    description:
      "معرفی دوستان و کسب 30 درصد از کارمزد معاملات آنها ",
  },
];
