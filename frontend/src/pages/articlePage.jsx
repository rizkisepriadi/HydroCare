import React from 'react'
import Navbar from "../pageSection/navBar";
import BlogImage from "../assets/blog.svg";
import Article from "../pageSection/articleSection.jsx";
import Footer from "../pageSection/footer.jsx";

export default function articlePage() {
  return (
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] md:pt-[14%] lg:pt-[11%] xl:pt-[10%] text-primary">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-3 md:w-4/6">
                <h1 className="text-xl font-bold text-center lg:text-2xl xl:text-3xl">Temukan Artikel Terbaru Seputar Air Bersih: Informasi dan Praktik Terbaik untuk Masyarakat</h1>
            </div>
            <div className="flex justify-center w-full mt-8">
                <marque className="w-full text-center border-y-2 border-[#0063A7] p-2">Bersama Menjadi Solusi yang Diandalkan dalam Upaya Memastikan Air Bersih untuk Semua</marque>
            </div>
        </div>
        <div className="pb-4 mt-16 border-b-2 border-[#0063A7]">
            <div className="w-full card md:card-side text-primary">
                <div className="w-full md:w-[35%]">
                    <img src={BlogImage} alt="Article" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className="card-body md:w-[40%] px-0 md:px-4 lg:py-[7%]">
                    <p className="flex-grow-0 font-semibold">17 Oktober 2024</p>
                    <h1 className="text-xl font-bold md:text-left lg:text-2xl">Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare</h1>
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="">Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses masyarakat terhadap air bersih dan sanitasi. Saat ini, akses terhadap air minum yang layak telah mencapai 91,72 persen berdasarkan data Badan Pusat Statistik (BPS) tahun 2023. <span className="font-semibold"><a href="">Baca Selengkapnya</a></span></p>
                        </div>
                        <div className="pb-4 lg:pb-0">
                            <a href="" className="w-full font-bold border btn rounded-xl border-primary text-primary">
                                Baca Artikel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <Article/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
