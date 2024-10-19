import React from "react";
import Pagination from "../component/pagination";

export default function FeedBack() {
  return (
    <div className="flex items-center justify-center bg-base-200 w-full md:h-[160px] bottom-0 left-0 px-2 md:px-[7%] shadow-custom">
      <div className="flex flex-col md:flex-row md:gap-7 justify-center items-center py-3 w-full">
        <div className="flex flex-col md:items-start text-primary max-w-[400px]">
          <h1 className="text-lg xl:text-xl 2xl:text-2xl font-bold pb-2 text-center md:text-left">
            Pendapat Mereka<br className="hidden md:inline"></br> Tentang
            HydroCare
          </h1>
          <p className="text-sm lg:text-base xl:text-lg md:text-left font-medium text-center opacity-70">
            HydroCare telah membantu lebih dari 21.000 penduduk
          </p>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
