import React from "react";
import BlogImage from "../assets/blog.svg";

export default function blogCard() {
  return (
    <div className="flex bg-base-200 rounded-[20px] items-center shadow-md shadow-blue-300">
      <div className="pl-3 w-1/2 h-full">
        <img src={BlogImage} alt="" className="rounded-3xl" />
      </div>
      <div className="text-primary p-3 w-1/2">
        <p className="font-bold text-xs">19 Jan 2022</p>
        <h1 className="text-sm font-extrabold text-wrap">
          Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare{" "}
        </h1>
        <p className="font-normal text-xs text-wrap">
          Menjadi seorang programmer saat ini sudah sangat mudah untuk
          dipelajari oleh siapapun, da....
        </p>
        <a href="" className="text-xs font-normal flex justify-end">
          Selengkapnya
        </a>
      </div>
    </div>
  );
}
