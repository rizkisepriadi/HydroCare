import React from 'react'
import BlogCard from "../component/blogCard.jsx";


export default function article() {
  return (
    <div className="flex flex-col px-[30px]">
    <h1 className="text-primary text-center font-extrabold text-xl">
      Article
    </h1>
    <div className="pt-9 flex flex-col pb">
      <a href="#" className="flex justify-end text-primary pb-2">
        Lihat Semua
      </a>
      <div className="flex flex-col gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </div>  )
}
