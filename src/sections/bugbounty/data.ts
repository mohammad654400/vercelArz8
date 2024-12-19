export const bugBountyData = [
    {
        text: "حریم خصوصی تمامی کاربران ارزهشت باید رعایت شود. از افشاء، تغییر، سرقت و نابودی اطلاعات کاربران به شدت خودداری شود."
    },
    {
        text: "فرآیند تست فقط با استفاده از اکانت ارزهشت و شماره همراه متعلق به خودتان انجام شود."
    },
    {
        text: "قبل از شروع تست، بخش محدوده برنامه را بررسی کنید تا اطمینان حاصل کنید دامنه مورد نظر در حوزه باگ بانتی قرار دارد."
    },
    {
        text: "از انجام هرگونه تست که در فرآیند کسب‌وکار ارزهشت اختلال ایجاد کند، اجتناب کنید."
    },
    {
        text: "باگ‌ها باید فقط در محدوده‌های مجاز ذکر شده گزارش شوند."
    },
    {
        text: "هر گزارش باید شامل یک باگ امنیتی مشخص و مطابق با استاندارد CVSS برای تعیین اهمیت باشد."
    },
    {
        text: "گزارش‌ها باید شامل پیلود (کد، اسکریپت و ...) استفاده شده برای کشف باگ باشند و باگ‌ها باید قابل اثبات و تکرارپذیر باشند. همچنین جزئیات گام‌به‌گام نحوه کشف باگ ارائه شود."
    },
    {
        text: "نتایج اسکنرها و ابزارهای خودکار برای گزارش باگ‌ها قابل قبول نیستند."
    },
    {
        text: "هیچ‌گونه اطلاعات یا آسیب‌پذیری مرتبط نباید بدون رضایت کتبی ارزهشت به اشخاص ثالث، شبکه‌های اجتماعی، مطبوعات یا سایر شرکت‌ها افشا شود."
    },
    {
        text: "در صورت گزارش نقض یا نشت داده، مکان دقیق داده‌ها را ارائه دهید و اطلاعات مرتبط را با دیگران به اشتراک نگذارید."
    },
    {
        text: "پس از ثبت گزارش، در مدت 1 روز کاری دریافت یا رد آسیب‌پذیری اعلام می‌شود."
    },
    {
        text: "حداکثر طی 10 روز کاری تیم امنیتی ارزهشت گزارش را بررسی کرده و در صورت تأیید، ایمیل شامل سطح شدت و مقدار پاداش ارسال خواهد شد."
    },
    {
        text: "در نهایت، حداکثر طی 14 روز کاری پاداش به حساب بانکی یا آدرس رمزارز شما واریز خواهد شد."
    },
]


import AuthIcon from "@/assets/icons/bugbounty/authicon";
import CrossSiteIcon from "@/assets/icons/bugbounty/crossSite";
import ImportAccessIcon from "@/assets/icons/bugbounty/importAccess";
import InformationIcon from "@/assets/icons/bugbounty/information";
import ServerSideIcon from "@/assets/icons/bugbounty/serverSide";
import SqIinjectionIcon from "@/assets/icons/bugbounty/sqIinjectionIcon";
export const damage=[
    {
        text:"Improper Authentication",
        icon: AuthIcon,
    },
    {
        text:"Cross-site Scripting (XSS)",
        icon: CrossSiteIcon,
    },
    {
        text:"Improper Access Control",
        icon: ImportAccessIcon,
    },

    {
        text:"SQL Injection",
        icon: SqIinjectionIcon,
    },
 
    {
        text:"Server-Side Request Forgery (SSRF)",
        icon: ServerSideIcon,
    },
   
    {
        text:"Information Disclosure",
        icon: InformationIcon,
    },


]

export const expertData = [
    { id: 1, name: "محمد جواد کنویسی", amount: "500,000,000 تومان" },
    { id: 2, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 3, name: "علی اکبر ذبیح نژاد", amount: "100,000,000 تومان" },
    { id: 4, name: "محمد جواد کنویسی", amount: "400,000,000 تومان" },
    { id: 5, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 6, name: "علی اکبر ذبیح نژاد", amount: "100,000,000 تومان" }
];