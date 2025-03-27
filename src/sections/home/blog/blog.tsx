import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import LongArrow from "@/assets/icons/arrrow/long-arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";
import Link from "next/link";
import BlogSchema from "./blog-schema";

const fetchBlogs = async () => {
  const res = await fetch("https://arz8.com/blog/wp-json/api/v1/latest-posts?limit=8");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export default function Blog() {
  const { baseColor, highlightColor } = useTheme();
  const sliderRef = useRef<Slider>(null);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5,
  });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, } },
      { breakpoint: 449, settings: { slidesToShow: 1, slidesToScroll: 1, } },
    ],
  };

  return (
    <>
      <BlogSchema />

      <section className="flex flex-col gap-y-[14px] md:gap-y-[60px] sm:mt-16">
        <div className="flex gap-y-5 w-full justify-between items-center flex-col xl:flex-row">
          <h2 className="font-bold text-lg md:text-4xl w-full flex justify-center xl:justify-start">بلاگ ارز هشت</h2>
        </div>

        {/* Scrollable Cards Section */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="ml-14">
            {isLoading
              ? [...Array(4)].map((_, index) => (
                <div dir="rtl" className="bg-background flex flex-col rounded-lg max-w-[285px] max-h-[286px] transition-all duration-300 px-2" key={index}>
                  <Skeleton height={180} width={276} className="rounded-3xl" baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton height={30} width={200} baseColor={baseColor} highlightColor={highlightColor} />
                  <div className="flex justify-between">
                    <Skeleton height={30} width={60} baseColor={baseColor} highlightColor={highlightColor} />
                    <Skeleton height={30} width={60} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>
                </div>
              ))
              : blogs?.map((blog: any, index: number) => (
                <BlogCard key={index} title={blog.title} link={blog.link} imageUrl={blog.thumbnail} />
              ))}
          </Slider>
          <button
            aria-label="مشاهده اسلاید بعدی بلاگ"
            className="absolute top-20 -left-0 md:-left-10 w-[37px] h-[37px] text-foreground cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}>
            <LongArrow />
          </button>
        </div>
      </section>
    </>
  );
}

// Blog Card Component
function BlogCard({ title, link, imageUrl }: { title: string; link: string; imageUrl: string | null }) {
  return (
    <div className="text-xs bg-background rounded-lg max-w-[277px] max-h-[286px] transition-all duration-300 px-2">
      <Image
        className="rounded-3xl max-w-[261px] max-h-[124px]"
        alt={title}
        src={imageUrl || "/fallback-image.jpg"}
        width={261}
        height={124}
        quality={100}
        loading="lazy"
      />
      <p dir="rtl" className="text-xs flex justify-center md:text-sm text-wrap text-justify font-bold leading-[38px] md:leading-[30px] py-2 px-1 md:py-[11px]">
        {title}
      </p>
      <div className="flex justify-between items-center w-full">
        <Link href={link} className="text-primary text-sm md:text-base font-bold">
          ...ادامه مطلب
        </Link>
        <div className="border-[0.74px] border-foreground px-[10px]  rounded-[15px] text-sm font-semibold leading-6 text-center">مقالات</div>
      </div>
    </div>
  );
}