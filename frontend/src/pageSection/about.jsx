import SquareBar from "../component/squareBar.jsx";
import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import BottleImage from "../assets/bottle1.svg";

export default function about() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");

  return (
    <section className="bg-white bg-gradient-to-b from-white via-white to-base-100 px-[7%]">
      <h1 className="text-primary text-xl font-extrabold text-center lg:pt-10 xl:pt-20 lg:mb-5 py-10 md:text-2xl">
        Selamatkan Air, Selamatkan
        <span className="lg:hidden">
          <br />
        </span>{" "}
        Masa Depan Kita
      </h1>
      <div className="bg-[url('/src/assets/bottle.svg')] bg-opacity-90 lg:bg-none flex flex-col lg:flex-row bg-cover bg-center relative lg:justify-between lg:gap-40">
        {isLargeScreen ? (
          <div className="border border-[#0063A7] border-opacity-10 p-2 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(15,63,233,0.25),0px_-3px_4px_0px_rgba(15,63,233,0.25)]">
            <div className="text-primary text-justify text-sm md:text-base font-semibold justify-center">
              <p className="pb-5  ">
                Jutaan orang di seluruh dunia masih berjuang mendapatkan air
                bersih. HydroCare mengajak Anda untuk menjadi bagian dari solusi
                global ini, mengurangi pemborosan dan meningkatkan akses air
                bersih bagi yang membutuhkan.
              </p>
              <p className="pb-8">
                Mari bergandengan tangan dalam misi ini. Kontribusi Anda,
                sekecil apapun, bisa menjadi harapan baru bagi mereka yang
                membutuhkan. Bersama, kita bisa membuat dunia yang lebih sehat
                dan adil.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="flex flex-col gap-8">
              <div className="border border-[#0063A7] w-[280px] border-opacity-10 p-2 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(15,63,233,0.25),0px_-3px_4px_0px_rgba(15,63,233,0.25)] xl:w-[400px]">
                <p className="text-primary text-justify font-semibold text-sm xl:text-base">
                  Jutaan orang di seluruh dunia masih berjuang mendapatkan air
                  bersih. HydroCare mengajak Anda untuk menjadi bagian dari
                  solusi global ini, mengurangi pemborosan dan meningkatkan
                  akses air bersih bagi yang membutuhkan.
                </p>
              </div>
              <div className="border border-[#0063A7] w-[280px] border-opacity-10 p-2 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(15,63,233,0.25),0px_-3px_4px_0px_rgba(15,63,233,0.25)] xl:w-[400px]">
                <p className="text-primary text-justify font-semibold text-sm xl:text-base">
                  Mari bergandengan tangan dalam misi ini. Kontribusi Anda,
                  sekecil apapun, bisa menjadi harapan baru bagi mereka yang
                  membutuhkan. Bersama, kita bisa membuat dunia yang lebih sehat
                  dan adil.
                </p>
              </div>
            </div>
            <img
              src={BottleImage}
              alt=""
              className="absolute z-0 bg-cover w-full h-full "
            />
          </div>
        )}

        <div className="pt-[31px] lg:pt-0 px-6 md:px-0 bg-cover pb-20 ">
          <div className="flex flex-col items-center gap-[37px] lg:gap-6 lg:justify-end">
            <SquareBar
              Number={"01"}
              Text={
                "Setiap 90 detik, seorang anak meninggal karena penyakit terkait air yang tidak bersih."
              }
            />
            <SquareBar
              Number={"02"}
              Text={
                "1 dari 10 orang di dunia tidak memiliki akses ke air bersih."
              }
            />
            <SquareBar
              Number={"03"}
              Text={
                "Lebih dari 80% air limbah yang ada diseluruh dunia dibuang ke lingkungan tanpa diolah."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
