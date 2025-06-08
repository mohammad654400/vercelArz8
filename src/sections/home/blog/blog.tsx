// app/components/Blog.tsx (Server Component)
import BlogSlider from "./components/BlogSlider";
import { schemaData } from "@/schemas/blog-schema";

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
        <div className="flex gap-y-5 w-full justify-between items-center flex-col xl:flex-row">
          <h2 className="font-bold text-lg md:text-2xl w-full flex justify-center xl:justify-start">
            بلاگ ارز هشت
          </h2>
        </div>
        {/* Pass blog data to the client component */}
        <BlogSlider blogs={blogs} />
      </section>
    </>
  );
}
