import React from "react";
import BlogImage from "../assets/blog.svg";

export default function blogCard() {
  return (
    <a
      href="/article"
      className="card card-side lg:card bg-base-200 shadow-xl  lg:w-[250px] xl:w-[300px] xl:h-[400px] text-primary"
    >
      <figure className="px-3 py-3 w-1/2 lg:w-full">
        <img
          src={BlogImage}
          alt="Article"
          className="rounded-xl w-full h-full"
        />
      </figure>
      <div className="card-compact pt-3 lg:pt-1 px-3 items-center text-left w-1/2 lg:w-full">
        <p className="text-[10px] md:text-sm self-start">19 Jan 2022</p>
        <p className="text-xs md:text-lg lg:text-base xl:text-lg font-extrabold text-wrap">
          Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
        </p>
        <p className="pb-3 lg:pb-3 text-[10px] md:text-[15px] lg:text-sm lg:text-base text-wrap">
          Menjadi seorang programmer saat ini sudah sangat mudah untuk
          dipelajari oleh...
        </p>
      </div>
    </a>
  );
}
