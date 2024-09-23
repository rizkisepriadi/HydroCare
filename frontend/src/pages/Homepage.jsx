import React from "react";
import Navbar from "../component/Navbar.jsx";
import OverviewSection from "../component/OverviewSection.jsx";
import FeedBack from "../component/FeedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/Button.module.jsx";
import SquareBar from "../component/SquareBar.jsx";
import Temp from "../assets/Temp.svg";

export default function Homepage() {
  return (
    <div>
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
            <div className="flex items-center justify-center pb-5 px-2">
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
      <section className="w-full h-screen">
        <div className="relative flex justify-center items-center mx-auto h-full">
          <div className="flex flex-col justify-center items-center bg-base-100 max-h-[720px] mb-24 md:mb-20 w-full">
            <div className="relative w-[500px] sm:w-[520px] md:w-[660px] flex justify-center items-center">
              {/* Gambar Utama */}
              <div className="w-[450px] h-[237.53px] md:w-[567px] md:h-[300px] rounded-2xl shadow-imgHero">
                <img
                  src={Waterfall}
                  alt="Main Waterfall Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Gambar Kecil Kiri */}
              <div className="absolute top-5 left-0 md:top-6 xl:top-8 w-[80px] h-[80px] md:w-[115px] md:h-[115px] rounded-md shadow-img">
                <img
                  src={Person}
                  alt="Small Left Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Gambar Kecil Kanan */}
              <div className="absolute bottom-4 right-5 md:bottom-5 xl:bottom-7 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-md shadow-img">
                <img
                  src={Lake}
                  alt="Small Right Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-auto">
              <div className="flex flex-col pt-8 px-2 items-center gap-8 pb-[26px] w-[500px] md:w-[680px]">
                <p className="p-section">
                  Bergabunglah dengan ribuan orang yang peduli untuk menghemat air
                  bersih dan memastikan akses air untuk generasi mendatang.
                </p>
                <JoinButton />
              </div>
            </div>
        
          </div>

          {/* Feed Back */}
          <FeedBack />
        </div>
        
      </section>

      {/* About  */}
      <section className="bg-white bg-gradient-to-b from-white via-white to-base-100  ">
        <h1 className="text-primary text-xl font-extrabold text-center py-10">
          Selamatkan Air, Selamatkan <br />
          Masa Depan Kita
        </h1>
        <div className="px-6 border border-[#0063A7] border-opacity-10 mx-6 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(15,63,233,0.25),0px_-3px_4px_0px_rgba(15,63,233,0.25)]">
          <div className="text-primary text-justify text-sm font-semibold justify-center">
            <p className="pb-5  ">
              Jutaan orang di seluruh dunia masih berjuang mendapatkan air
              bersih. HydroCare mengajak Anda untuk menjadi bagian dari solusi
              global ini, mengurangi pemborosan dan meningkatkan akses air
              bersih bagi yang membutuhkan.
            </p>
            <p className="pb-8">
              Mari bergandengan tangan dalam misi ini. Kontribusi Anda, sekecil
              apapun, bisa menjadi harapan baru bagi mereka yang membutuhkan.
              Bersama, kita bisa membuat dunia yang lebih sehat dan adil.
            </p>
          </div>
        </div>
        <div className="pt-[31px] px-6 flex flex-col gap-[37px] bg-[url('/src/assets/bottle.svg')] bg-cover pb-20">
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
            className="self-end w-[300px] pr-2"
          />
          <SquareBar
            Number={"03"}
            Text={
              "Lebih dari 80% air limbah yang ada diseluruh dunia dibuang ke lingkungan tanpa diolah."
            }
          />
        </div>
      </section>

      <div className="bg-base-100">
        <div className="pt-[58.35px]">
          <img src={Temp} alt="Gambar template" className="" />
          
        </div>
      </div>
    </div>
  );
}
