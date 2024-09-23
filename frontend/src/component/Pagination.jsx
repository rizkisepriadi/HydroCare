import React, { useState, useEffect } from "react";
import kutip from "../assets/kutip.svg";

const TextCarousel = () => {
  const texts = [
    "Bantuan dan donasi sangat penting bagi negara kami, karena el-nino ini membuat bencana kekeringan yang dapat berkepanjangan!!",
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
    <div className="flex flex-col items-start max-w-[720px] flex-wrap">
      <div className="m-1 pt-2 md:pt-0 w-[20px] h-[20px] md:w-[26px] md:h-[22px]">
        <img
          src={kutip}
          alt="Main Waterfall Image"
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-center md:text-left md:pt-0 text-primary">
        {texts[currentIndex]}
      </div>

      {/*user*/} 
      <div className="flex pt-1 w-full justify-between">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex justify-center items-center text-primary">
            <div className="flex flex-col">
              <h1 className="text-xs md:text-base font-extrabold">Jenny Wilson</h1>
              <p className="text-[10px] md:text-xs font-medium">President of Amerika</p>
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
