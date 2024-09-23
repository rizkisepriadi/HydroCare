import React from "react";
import Navbar from "../component/navbar.jsx";
import OverviewSection from "../component/overviewSection.jsx";
import FeedBack from "../component/feedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/button.module.jsx";
import SquareBar from "../component/squareBar.jsx";
import CampanyeCard from "../component/campanyeCard.jsx";
import BlogCard from "../component/blogCard.jsx";
import Footer from "../component/footer.jsx";
import FAQ from "../component/faq.jsx";

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

      {/* Invitation */}
      <section className="w-full">
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
        {/* Feed Back */}
        <FeedBack />
      </section>

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
      {/* Campanye Card */}
      <CampanyeCard />

      {/* Blog */}
      <div className="flex flex-col px-[30px]">
        <h1 className="text-primary text-center font-extrabold text-xl">
          Blog, Berita dan Event
        </h1>
        <div className="pt-9 flex flex-col pb">
          <a href="#" className="flex justify-end text-primary pb-2">
            Lihat Semua
          </a>
          <div className="flex flex-col gap-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
