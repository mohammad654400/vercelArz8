export const bugBountyData = [
    {
        text: "حریم خصوصی تمامی کاربران ارزهشت باید به‌طور کامل رعایت شود. از افشاء، تغییر، سرقت یا نابودی اطلاعات کاربران به‌طور جدی خودداری کنید."
    },
    {
        text: "فرآیند تست باید فقط با استفاده از اکانت ارزهشت و شماره همراه متعلق به خودتان انجام شود."
    },
    {
        text: "قبل از شروع تست، حتماً محدوده برنامه را بررسی کنید تا مطمئن شوید دامنه‌ای که قصد تست آن را دارید در حوزه باگ بانتی قرار دارد."
    },
    {
        text: "از انجام هرگونه تست که ممکن است به فرآیندهای کسب‌وکار ارزهشت آسیب بزند یا اختلال ایجاد کند، اجتناب کنید."
    },
    {
        text: "باگ‌ها باید تنها در محدوده‌های مجاز ذکر شده در دستورالعمل باگ بانتی گزارش شوند."
    },
    {
        text: "هر گزارش باید شامل یک باگ امنیتی مشخص باشد و از استاندارد CVSS برای تعیین اهمیت آن استفاده شود."
    },
    {
        text: "گزارش‌ها باید شامل پیلود (کد، اسکریپت و ...) استفاده شده برای کشف باگ باشند و باگ‌ها باید قابل اثبات و تکرارپذیر باشند. همچنین، باید جزئیات گام‌به‌گام نحوه کشف باگ نیز ارائه شود."
    },
    {
        text: "نتایج اسکنرها و ابزارهای خودکار برای گزارش باگ‌ها قابل قبول نیستند."
    },
    {
        text: "هیچ‌گونه اطلاعات یا آسیب‌پذیری مرتبط نباید بدون رضایت کتبی ارزهشت به اشخاص ثالث، شبکه‌های اجتماعی، مطبوعات یا سایر شرکت‌ها افشا شود."
    },
    {
        text: "در صورت گزارش نقض یا نشت داده، باید مکان دقیق داده‌ها را مشخص کنید و از به اشتراک‌گذاری اطلاعات مربوط با دیگران خودداری کنید."
    },
    {
        text: "پس از ثبت گزارش، در مدت 1 روز کاری وضعیت دریافت یا رد آسیب‌پذیری اعلام خواهد شد."
    },
    {
        text: "تیم امنیتی ارزهشت حداکثر طی 10 روز کاری گزارش را بررسی کرده و در صورت تأیید، ایمیلی شامل سطح شدت و مقدار پاداش ارسال خواهد شد."
    },
    {
        text: "حداکثر طی 14 روز کاری، پاداش به حساب بانکی یا آدرس رمزارز شما واریز خواهد شد."
    },
];



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