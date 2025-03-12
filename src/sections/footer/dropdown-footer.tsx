import React, { useState } from "react";
import Phone from "@/assets/icons/footer/phone";
import Fax from "@/assets/icons/footer/fax";
import TownyFour from "@/assets/icons/footer/TownyFour";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import Link from "next/link";

export default function DropdownMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg">
      {/* Useful Links */}
      <DropdownItem
        title="لینک‌های مفید"
        section="links"
        isOpen={openSection === "links"}
        toggle={toggleSection}
      >
 <ul className="flex flex-col gap-4 mt-2 pl-4 text-[14px] cursor-pointer">
          <li><Link href="https://app.arz8.com/support" className="hover:text-primary">ارسال تیکت پشتیبانی</Link></li>
          <li><Link href="/faq" className="hover:text-primary">آموزش‌های صرافی</Link></li>
          <Link href="/job"><li>فرصت های شغلی</li></Link> 
          <li><Link href="/rules" className="hover:text-primary">قوانین و مقررات</Link></li>
          <li><Link href="/fee" className="hover:text-primary">سطوح کاربری</Link></li>
          <li><Link href="/contact-us" className="hover:text-primary">تماس با ما</Link></li>
          <li><Link href="/about" className="hover:text-primary">درباره ما</Link></li>
        </ul>
      </DropdownItem>

      {/* Exchange Guide */}
      <DropdownItem
        title="راهنمای صرافی"
        section="guide"
        isOpen={openSection === "guide"}
        toggle={toggleSection}
      >
        <ul className="flex flex-col gap-4 mt-2 pl-4 text-[14px] cursor-pointer">
          <li><Link href="/coins/BTC" className="hover:text-primary">خرید و فروش ارزدیجیتال</Link></li>
          <li><Link href="/coins" className="hover:text-primary">قیمت لحظه‌ای ارزها</Link></li>
          <li><Link href="/download" className="hover:text-primary">دانلود اپلیکیشن</Link></li>
          <li><Link href="/wheel-luck" className="hover:text-primary">گردونه شانس</Link></li>
          <li><Link href="/calculate" className="hover:text-primary">ماشین حساب</Link></li>
          <li><Link href="/bug-bounty" className="hover:text-primary">باگ بانتی</Link></li>
          <li><Link href="https://arz8.com/blog/" className="hover:text-primary">وبلاگ</Link></li>
        </ul>
      </DropdownItem>

      {/* Contact Information */}
      <DropdownItem
        title="اطلاعات تماس"
        section="contact"
        isOpen={openSection === "contact"}
        toggle={toggleSection}
      >
        <ul className="flex flex-col gap-4 mt-2 pl-4 text-[14px] cursor-pointer">
          <li className="flex items-center gap-2 hover:text-primary"><TownyFour /> پشتیبانی آنلاین</li>
          <li className="flex items-center gap-2"><Fax /> 021-91035288</li>
          <li className="flex items-center gap-2"><Phone /> <a href="tel:021284299">021-284299</a> </li>
        </ul>
      </DropdownItem>
    </div>
  );
}

interface DropdownItemProps {
  title: string;
  section: string;
  isOpen: boolean;
  toggle: (section: string) => void;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, section, isOpen, toggle, children }) => {
  return (
    <div>
      <button
        onClick={() => toggle(section)}
        className="flex justify-between w-full items-center text-right text-[16px] font-bold py-2 pr-3"
        aria-expanded={isOpen}
      >
        <span className="absolute bg-primary h-6 right-9 w-1 rounded-lg"></span>
        {title}
        <span className="text-primary text-xl">
          {isOpen ? <p className="w-5 h-5 text-foreground" ><ArrowUp/></p> :  <p className="w-5 h-5 text-foreground" ><ArrowDown/></p> }
        </span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
};