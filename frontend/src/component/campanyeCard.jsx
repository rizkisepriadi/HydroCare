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
          <h1 className="text-center  text-lg font-extrabold">
            Kampanye yang sedang berlangsung
          </h1>
          <div className="pl-5 pt-4">
            <div>
              <p className="font-semibold">Tanggal Acara</p>
              <p className="font-bold text-xl">17 Juni 2024</p>
            </div>
            <div>
              <p className="font-semibold">Pelaksanaan</p>
              <p className="font-bold text-xl">Hybrid</p>
            </div>
            <div>
              <p className="font-semibold">User yang Berpatipasi</p>
              <p className="font-bold text-xl pb-6">12.890</p>
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
