import React, { useRef, memo } from "react";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import LongArrow from "@/assets/icons/arrrow/long-arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";
import { schemaData } from "@/schemas/blog-schema";
import BlogCard from "./components/BlogCard";
// Fetch blogs
const fetchBlogs = async () => {
  const res = await fetch("https://arz8.com/blog/wp-json/api/v1/latest-posts?limit=8");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export default function Blog() {
  const { baseColor, highlightColor } = useTheme();
  const sliderRef = useRef<Slider>(null);
  const { data: blogs = [], isLoading } = useQuery<Array<{ title: string; link: string; thumbnail: string }>>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 30,
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
      { breakpoint: 1285, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="flex flex-col gap-y-[14px] md:gap-y-[40px] sm:mt-16">
        <div className="flex gap-y-5 w-full justify-between items-center flex-col xl:flex-row">
          <h2 className="font-bold text-lg md:text-2xl w-full flex justify-center xl:justify-start">بلاگ ارز هشت</h2>
        </div>
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
                <div key={index} className="w-full h-full px-2 flex items-stretch justify-center">
                  <BlogCard key={index} title={blog.title} link={blog.link} imageUrl={blog.thumbnail} />
                </div>
              ))}
          </Slider>
          <button aria-label="مشاهده اسلاید بعدی بلاگ" className="absolute top-20 -left-0 md:-left-8 w-[37px] h-[37px] text-foreground cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
            <LongArrow />
          </button>
        </div>
      </section>
    </>
  );
}
