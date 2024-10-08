import React from "react";
import BlogImage from "../assets/blog.svg";

export default function blogCard() {
  return (
    <div className="flex rounded-[20px] items-center border border-blue-300 shadow-lg shadow-indigo-300">
      <div className="pl-3 w-[170px] h-[140px]">
        <img src={BlogImage} alt="" className="w-full h-full" />
      </div>
      <div className="text-primary px-3 py-2 w-1/2">
        <p className="font-bold text-[10px] ">19 Jan 2022</p>
        <a href="/article" className="text-sm font-extrabold text-wrap">
          Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
        </a>
        <p className="font-normal text-[10px] text-wrap">
          Menjadi seorang programmer saat ini sudah sangat mudah untuk
          dipelajari oleh siapapun, da....
        </p>
      </div>
    </div>
  );
}
