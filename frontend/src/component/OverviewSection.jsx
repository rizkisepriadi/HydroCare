import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function OverviewSection() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");

  const [activeSlide, setActiveSlide] = useState("left");
  const [transitionClass, setTransitionClass] = useState("translate-x-0");

  // Slide switching
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionClass(
        activeSlide === "left" ? "translate-x-full" : "-translate-x-full"
      );
      setTimeout(() => {
        setActiveSlide((prevSlide) =>
          prevSlide === "left" ? "right" : "left"
        );
        setTransitionClass("translate-x-0");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  // Slide content for both large and small screens
  return (
    <div className="relative w-full opacity-70 px-[7%]">
      {isLargeScreen ? (
        <div className="absolute bottom-0 left-0 mb-20 px-14 bg-base-200 h-[120px] w-full shadow-lg">
          <div className="flex justify-center items-center w-full mx-auto h-full max-h-[900px]">
            {activeSlide === "left" ? (
              <div
                className={`flex justify-between items-center w-full text-primary transition-transform duration-500 ease-in-out ${
                  activeSlide === "left" ? transitionClass : "translate-x-full"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold leading-tight">21.000+</h1>
                  <p className="text-base font-medium">Orang terbantu</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold leading-tight">10.000+</h1>
                  <p className="text-base font-medium">Liter Air Bersih</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold leading-tight">150+</h1>
                  <p className="text-base font-medium">Anggota Aktif</p>
                </div>
              </div>
            ) : (
              <div
                className={`flex justify-center items-center gap-5 text-primary transition-transform duration-500 ease-in-out ${
                  activeSlide === "right"
                    ? transitionClass
                    : "-translate-x-full"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <p className="font-medium text-center text-Base">
                    Kota-kota dengan Kontribusi User Terbesar untuk Kesuksesan
                    Program Ini
                  </p>
                  <ul className="grid items-center justify-center grid-flow-col grid-rows-2 text-base font-bold list-disc sm:flex sm:justify-center sm:items-center">
                    <li className="mx-4 ">Indonesia</li>
                    <li className="mx-4">Singapura</li>
                    <li className="mx-4">Malaysia</li>
                    <li className="mx-4">Brunei</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="absolute bottom-0 mb-12 left-0 h-[160px] w-full bg-base-200 p-5 shadow-lg px-[7%]">
          <div className="flex justify-center gap-20 items-center w-full mx-auto h-full max-h-[900px]">
            {/* Left section (statistik) */}
            <div className="flex justify-center gap-10 text-primary">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold leading-tight text-center">
                  21.000+
                </h1>
                <p className="text-base font-medium text-center">
                  Orang terbantu
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold leading-tight text-center">
                  10.000+
                </h1>
                <p className="text-base font-medium text-center">
                  Liter Air Bersih
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold leading-tight text-center">
                  150+
                </h1>
                <p className="text-base font-medium text-center">
                  Anggota Aktif
                </p>
              </div>
            </div>
            {/* Right section (negara) */}
            <div className="flex flex-col justify-between text-primary">
              <p className="text-lg font-medium break-all">
                Kota-kota dengan Kontribusi User Terbesar untuk Kesuksesan
                Program Ini
              </p>
              <ul className="flex flex-wrap pl-5 text-base font-bold list-disc justify-stretch">
                <li className="pr-8">Palembang</li>
                <li className="pr-8">Jambi</li>
                <li className="pr-8">Jakarta</li>
                <li className="pr-8">Bogor</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
