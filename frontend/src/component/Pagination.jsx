import React, { useState, useEffect } from "react";

const TextCarousel = () => {
  const texts = [
    "Bantuan dan donasi sangat pentingbagi negara kami, karena el-nino ini membuat bencara kekeringan yangberkepanjangan!!",
    "Text 2",
    "Text 3",
    "Text 4",
  ]; // Gantilah dengan teks yang Anda inginkan
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk mengubah teks secara otomatis
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === texts.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // Gantilah 3000 dengan interval yang Anda inginkan (ms)

  //   return () => clearInterval(intervalId);
  // }, [texts.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-base font-semibold text-center pt-[35px] px-10">
        {texts[currentIndex]}
      </div>
      <div className="flex pt-9 gap-[100px]">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex text-primary">
            <div className="flex flex-col">
              <h1 className="text-xs font-extrabold">Jenny Wilson</h1>
              <p className="text-[10px] font-medium">President of Amerika</p>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          {texts.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition duration-300 ${
                index === currentIndex ? "bg-blue-600" : "bg-blue-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
