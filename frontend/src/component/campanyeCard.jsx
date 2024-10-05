import Temp from "../assets/Temp.svg";
import { CampanyeButton } from "./button.module";
import { useState } from "react";

export default function CampanyeCard() {
  const texts = [
    "Bantuan dan donasi sangat pentingbagi negara kami, karena el-nino ini membuat bencara kekeringan yangberkepanjangan!!",
    "Text 2",
    "Text 3",
    "Text 4",
  ]; // Gantilah dengan teks yang Anda inginkan
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-base-100 px-[30px] pb-[86px]">
      <div className="bg-base-200 mt-[58.35px]">
        <img src={Temp} alt="Gambar template" className="" />
        <div className="bg-base-200 text-primary rounded-[20px] shadow-md shadow-blue-300">
          <h1 className="text-center  text-lg font-bold">
            Kampanye yang sedang berlangsung
          </h1>
          <div className="flex flex-col gap-2 pl-5 pt-4 font-semibold">
            <div>
              <p className="text-sm">Tanggal Acara</p>
              <p>17 Juni 2024</p>
            </div>
            <div>
              <p className="text-sm">Pelaksanaan</p>
              <p>Hybrid</p>
            </div>
            <div>
              <p className="text-sm">User yang Berpatipasi</p>
              <p>12.890</p>
            </div>
          </div>
          <CampanyeButton />
          <div className="flex py-3 justify-center">
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
    </div>
  );
}
