import React from "react";
import OverviewSection from "../component/OverviewSection";

export default function hero() {
  return (
    <section className="bg-[url('/src/assets/HOME.svg')] bg-cover bg-center h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        {/* container */}
        <div className="lg:mb-10 2xl:mb-24 max-w-[680px]">
          {/* Text di atas */}
          <div className="flex items-center justify-center pb-5">
            <p className="p-section">
              Bersama Menciptakan Dunia Dengan Air Bersih
            </p>
          </div>

          {/* Heading utama */}
          <div className="flex items-center justify-center pb-5">
            <div className="flex items-center justify-center">
              <h1 className="text-center lg:text-6xl 2xl:text-7xl tracking-[0.2em] font-extrabold text-[#0063A7] text-shadow-custom text-5xl">
                HydroCar<span className="tracking-normal">e</span>
              </h1>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="flex items-center justify-center pb-5 px-2">
            <p className="p-section">
              Kita Ubah Setiap Tetes Air Menjadi Harapan Baru Bagi Mereka yang
              Kesulitan Mendapatkan Air Bersih. Mari Bergerak untuk Masa Depan
              yang Lebih Baik.
            </p>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <OverviewSection />
    </section>
  );
}
