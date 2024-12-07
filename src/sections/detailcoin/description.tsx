import React, { useState } from 'react'

export default function DetailDescription() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);
  return (
    <div>
        <h1 className="my-8 text-lg ">
        <span className="text-primary">خرید و فروش سریع</span> ارزهای دیجیتال با
        ارز هشت{" "}
      </h1>
      <div
        className={`relative overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-full" : "max-h-20"
        }`}
      >
        <p>
        ارز هشت یک پلتفرم آنلاین معاملاتی است که به شما امکان خرید، فروش و مدیریت انواع ارزهای دیجیتال را می‌دهد. با استفاده از ارز هشت، شما می‌توانید به سادگی و امنیت کامل، دارایی‌های دیجیتال خود را معامله کنید و وارد دنیای هیجان‌انگیز ارزهای دیجیتال شوید.
        ارز دیجیتال یا رمز ارز نوعی پول الکترونیکی است که به صورت مجازی وجود دارد و از رمزنگاری برای تأمین امنیت تراکنش‌ها و کنترل ایجاد واحدهای جدید استفاده می‌کند. به عبارت ساده‌تر، ارز دیجیتال پولی است که به صورت آنلاین و بدون نیاز به واسطه‌های مالی مانند بانک‌ها قابل انتقال است.
        </p>

        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent dark:bg-gradient-to-t from-gray-600 to-transparent pointer-events-none"></div>
        )}
      </div>
      <button
        onClick={toggleExpand}
        className="w-full mt-2 hover:text-primary focus:outline-none"
      >
        {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
      </button>
    </div>
    
  )
}
