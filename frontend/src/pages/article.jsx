import React from "react";
import BlogImage from "../assets/blog1.svg";
import Navbar from "../pageSection/navBar";
import Footer from "../pageSection/footer";
import BlogCard from "../component/blogCard";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Article() {
  const isLargeScreen = useMediaQuery("(min-width: 800px)");

  return (
    <div>
      <Navbar />
      <div className="px-[10%] pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[7%]">
        <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-8 pt-3 text-primary">
          <div>
            <div className="flex justify-center items-start">
              <img
                src={BlogImage}
                alt="Blog"
                className="xl:w-full xl:mb-5 h-full bg-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pt-5">
                <h1 className="font-bold xl:text-3xl">
                  Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
                </h1>
                <div className="flex justify-between font-normal text-sm">
                  <p>CIvic Type R</p>
                  <p>19 Jan 2023</p>
                </div>
                <p className="border border-b border-primary mb-5"></p>
              </div>

              <div className="whitespace-pre-line pb-5 xl:text-lg">
                {`Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses masyarakat terhadap air bersih dan sanitasi. Saat ini, akses terhadap air minum yang layak telah mencapai 91,72 persen berdasarkan data Badan Pusat Statistik (BPS) tahun 2023.
          
          Sebelumnya, Pemerintah Indonesia telah menetapkan Rencana Jangka Panjang Menengah Nasional (RPJMN) dengan target 100 persen akses air minum layak pada tahun 2020-2024. Hal ini tertuang dalam Lampiran II Perpres Nomor 18 Tahun 2020.
          
          Staf Ahli V Kementerian PUPR mengatakan, partisipasi yang terus meningkat dari swasta dapat membantu pemerintah dalam memperluas akses air minum yang layak sekaligus meningkatkan kesehatan dan kesejahteraan masyarakat.`}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-start mb-5">
            <h1 className="text-primary font-semibold xl:text-xl">Baca article lainnya...</h1>
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
