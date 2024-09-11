import React from "react";
import Navbar from "../component/Navbar.jsx";
import FeedBack from "../component/FeedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/Button.module.jsx";
import SquareBar from "../component/SquareBar.jsx";
import Temp from "../assets/Temp.svg";

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
                <br></br> Masa Depan yang Lebih Baik.
              </p>
            </div>
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
              className="rounded-2xl w-[366.79px] h-[193.06px]"
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
      {/* About  */}
      <div className="bg-white bg-gradient-to-b from-white via-white to-base-100  ">
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
      </div>
      <div className="bg-base-100">
        <div className="pt-[58.35px]">
          <img src={Temp} alt="Gambar template" className="" />
          
        </div>
      </div>
    </div>
  );
}
