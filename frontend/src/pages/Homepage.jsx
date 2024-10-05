import React from "react";
import Navbar from "../pageSection/navBar.jsx";
import FeedBack from "../pageSection/feedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/button.module.jsx";
import SquareBar from "../component/squareBar.jsx";
import CampanyeCard from "../component/campanyeCard.jsx";
import BlogCard from "../component/blogCard.jsx";
import Footer from "../pageSection/footer.jsx";
import FAQ from "../pageSection/faq.jsx";
import Hero from "../pageSection/hero.jsx";

export default function Homepage() {
  return (
    <div>
      <Navbar />

      {/* Hero*/}
      <Hero />

      {/* Invitation */}
      <section className="w-full h-screen">
        <div className="relative flex justify-center items-center mx-auto h-full">
          <div className="flex flex-col justify-center items-center bg-base-100 max-h-[720px] mb-40 md:mb-28 w-full">
            <div className="relative w-[350px] sm:w-[550px] md:w-[660px] flex justify-center items-center">
              {/* Gambar Utama */}
              <div className="w-[300px] h-[150px] sm:w-[500px] sm:h-[237.53px] md:w-[567px] md:h-[300px] rounded-2xl shadow-imgHero">
                <img
                  src={Waterfall}
                  alt="Main Waterfall Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Gambar Kecil Kiri */}
              <div className="absolute top-5 left-0 md:top-6 xl:top-8 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[115px] md:h-[115px] rounded-md shadow-img">
                <img
                  src={Person}
                  alt="Small Left Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Gambar Kecil Kanan */}
              <div className="absolute bottom-4 right-0 md:bottom-5 xl:bottom-7 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-md shadow-img">
                <img
                  src={Lake}
                  alt="Small Right Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-auto">
              <div className="flex flex-col pt-4 px-2 items-center gap-5 pb-[26px] w-[380] md:w-[680px]">
                <p className="p-section">
                  Bergabunglah dengan ribuan orang yang peduli untuk menghemat
                  air bersih dan memastikan akses air untuk generasi mendatang.
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
        <div className="pt-[31px] px-6 bg-[url('/src/assets/bottle.svg')] bg-cover pb-20">
          <div className="flex flex-col items-center gap-[37px]">
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
      </section>
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
