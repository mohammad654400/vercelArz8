import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

// Memoized Blog Card Component to avoid unnecessary re-renders
const BlogCard = memo(({ title, link, imageUrl }: { title: string; link: string; imageUrl: string | null }) => {
  return (
    //this first div is used to help center the blog card in different sizes
    <div className="w-full flex items-center justify-center h-full">
      <div className="text-xs rounded-lg max-w-[277px] h-[242px] transition-all duration-300 px-2 flex flex-col justify-between">
        <Image
          unoptimized
          className="rounded-3xl max-w-[261px] max-h-[124px]"
          alt={`تصویر مقاله: ${title}`}
          src={imageUrl || "/fallback-image.jpg"}
          width={261}
          height={124}
          quality={100}
          loading="lazy"
        />
        <h3 dir="rtl" className="text-xs flex justify-center md:text-sm text-wrap text-justify font-bold leading-[38px] md:leading-[30px] py-2 px-1 md:py-[11px]">
          {title}
        </h3>
        <div className="flex justify-between items-center w-full">
          <Link href={link} className="text-primary text-sm md:text-base font-bold">
            ...ادامه مطلب
          </Link>
          <div className="border-[0.74px] border-foreground px-[10px] rounded-[15px] text-sm font-semibold leading-6 text-center">
            مقالات
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogCard