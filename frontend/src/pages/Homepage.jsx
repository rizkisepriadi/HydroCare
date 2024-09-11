import React from "react";
import Navbar from "../component/Navbar.jsx";
import OverviewSection from "../component/OverviewSection.jsx";
import FeedBack from "../component/FeedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/Button.module.jsx";

export default function Homepage() {
  return (
    <div className="">
      <Navbar />

      {/* Home*/}
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
            <div className="flex items-center justify-center pb-5">
              <p className="p-section">
                Kita Ubah Setiap Tetes Air Menjadi Harapan Baru Bagi Mereka yang Kesulitan Mendapatkan Air Bersih. Mari Bergerak
                untuk Masa Depan yang Lebih Baik.
              </p>
            </div>
          </div>
        </div>
        {/* Overview Section */}
        <OverviewSection />
      </section>


      {/* Invitation */}
      <section className="w-full">
        <div className="relative flex justify-center bg-base-100">
          <div className="relative">
            <img
              src={Waterfall}
              alt="Main Waterfall Image"
              className="rounded-2xl shadow-xl w-[366.79px] h-[193.06px]"
            />
            <div className="absolute top-5 left-[-30px] rounded-[30px]">
              <img
                src={Person}
                alt="Small Left Image"
                className="rounded-[20px] w-[107.22px] h-[107.04]"
              />
            </div>
            <div className="absolute bottom-5 right-[-20px] rounded-[30px]">
              <img
                src={Lake}
                alt="Small Right Image"
                className="rounded-[20px] w-[94.59px] h-[94.43px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-8 items-center gap-8 pb-[26px]">
          <h1 className="text-primary text-center text-base font-bold px-3">
            Bergabunglah dengan ribuan orang yang peduli untuk menghemat air
            bersih dan memastikan akses air untuk generasi mendatang.
          </h1>
          <JoinButton />
        </div>
      </section>

      {/* Feed Back */}
      <FeedBack />
    </div>
  );
}
