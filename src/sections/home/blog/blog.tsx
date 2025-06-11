// app/components/Blog.tsx (Server Component)
import Link from "next/link";
import BlogSlider from "./components/BlogSlider";
import { schemaData } from "@/schemas/blog-schema";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";

async function fetchBlogs() {
  try {
    const res = await fetch("https://arz8.com/blog/wp-json/api/v1/latest-posts?limit=8", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  } catch (err) {
    console.error('Blog fetch failed: ', err)
  }
}

export default async function Blog() {
  const blogs = await fetchBlogs();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="flex flex-col gap-y-[14px] md:gap-y-[40px] sm:mt-16">
        <div className="flex flex-row items-center justify-between mb-6">
          <h2 className="text-lg sm:text-2xl font-bold  text-center flex">بلاگ ارزهشت</h2>
          <Link
            href={"https://dev.arz8.com/blog/"}
            className="group flex text-[18px]  font-semibold gap-2 items-center justify-center text-white bg-primary rounded-2xl px-[10px] py-2 duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:translate-y-0 active:bg-primary">
            مقالات بیشتر...
            <div className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowLeft />
            </div>
          </Link>
        </div>
        {/* Pass blog data to the client component */}
        <BlogSlider blogs={blogs} />
      </section>
    </>
  );
}
