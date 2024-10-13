import React from "react";
import BlogCard from "../component/blogCard.jsx";

export default function article() {
  return (
    <div className="flex flex-col px-[10%]">
      <h1 className="text-primary text-xl font-extrabold text-center xl:pt-20 lg:mb-5 lg:pt-10 lg:pb-0 py-10 md:text-2xl">
      Article
      </h1>
      <div className="flex flex-col">
        <a href="#" className="flex justify-end text-primary pb-2">
          Lihat Semua
        </a>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-4 xl:gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          </div>
      </div>
    </div>
  );
}
