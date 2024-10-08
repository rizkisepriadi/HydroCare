import React from "react";
import BlogImage from "../assets/blog.svg";
import Navbar from "../pageSection/navBar";
import Footer from "../pageSection/footer";
import BlogCard from "../component/blogCard";

export default function Article() {
  return (
    <div>
      <Navbar />
      <div className="text-primary px-[10%] pt-[15%]">
        <div className="flex flex-col gap-2">
          <img src={BlogImage} alt="Blog" />
          <h1 className="font-bold">
            Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
          </h1>
          <div className="flex justify-between font-normal text-sm">
            <p>CIvic Type R</p>
            <p>19 Jan 2023</p>
          </div>
          <p className="border border-b border-primary mb-5"></p>
        </div>

        <div className="whitespace-pre-line pb-5">
          {`Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses masyarakat terhadap air bersih dan sanitasi. Saat ini, akses terhadap air minum yang layak telah mencapai 91,72 persen berdasarkan data Badan Pusat Statistik (BPS) tahun 2023.
          
          Sebelumnya, Pemerintah Indonesia telah menetapkan Rencana Jangka Panjang Menengah Nasional (RPJMN) dengan target 100 persen akses air minum layak pada tahun 2020-2024. Hal ini tertuang dalam Lampiran II Perpres Nomor 18 Tahun 2020.
          
          Staf Ahli V Kementerian PUPR mengatakan, partisipasi yang terus meningkat dari swasta dapat membantu pemerintah dalam memperluas akses air minum yang layak sekaligus meningkatkan kesehatan dan kesejahteraan masyarakat.`}
        </div>
      </div>
      <Footer />
    </div>
  );
}
