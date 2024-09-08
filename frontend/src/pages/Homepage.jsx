import React from "react";
import Navbar from "../component/Navbar.jsx";
import FeedBack from "../component/FeedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/Button.module.jsx";

export default function Homepage() {
  return (
    <div className="">
      <Navbar />
      {/* Hero */}
      <section className="bg-[url('/src/assets/HOME.svg')] bg-cover bg-center h-screen">
        {/* section 1 */}
        <div className="flex items-center justify-center h-full">
          {/* container */}
          <div>
            <div className="flex items-center justify-center pb-5">
              <p className="text-center text-xl text-[#0063A7] font-medium text-shadow-custom">
                Bersama Menciptakan Dunia Dengan Air Bersih
              </p>
            </div>
            <div className="flex items-center justify-center pb-5">
              <div className="flex items-center justify-center">
                <h1 className="text-center text-8xl tracking-[0.2em] font-extrabold text-[#0063A7] text-shadow-custom">
                  HydroCare
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center pb-5">
              <p className="text-center text-xl text-[#0063A7] font-medium text-shadow-custom">
                Kita Ubah Setiap Tetes Air Menjadi Harapan Baru <br></br> Bagi
                Mereka yang Kesulitan Mendapatkan Air Bersih.Mari Bergerak untuk
                <br></br> Masa Depan yang Lebih Baik.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center pb-5"> 
            <p className='text-center text-xl text-[#0063A7] font-medium text-shadow-custom'>Kita Ubah Setiap Tetes Air Menjadi Harapan Baru <br></br> Bagi Mereka yang Kesulitan Mendapatkan Air Bersih.Mari Bergerak untuk<br></br> Masa Depan yang Lebih Baik.</p>
          </div>
        </div>
      </section>
      {/* Invitation */}
      <section>
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
