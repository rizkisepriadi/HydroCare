import React from "react";
import CampaignImage from "../assets/Sosialisasi.svg";
import CardSlide from "../component/cardSlide";
import CampaignInfo from "../component/campaignInfo.jsx";
import Footer from "../pageSection/footer.jsx";

export default function campaignPage() {
  return (
    <div>
      <div className="text-primary">
        <div className="flex flex-col items-stretch lg:h-[500px] lg:flex-row">
          {/* Left Section */}
          <div className="h-[320px] w-full lg:h-full lg:w-[600px] xl:w-[650px] mb-4 lg:mb-0">
            <img
              src={CampaignImage}
              alt="Campaign"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between w-full lg:w-[900px] px-4 mb-4 pb-4 lg:mb-0 lg:pb-0 lg:justify-start flex-grow lg:p-11  xl:p-16">
            <div>
              <h1 className="pt-4 text-xl font-bold text-primary md:text-lg xl:text-2xl">
                Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
              </h1>
              <p className="mt-2 text-justify">
                Kolaborasi pemerintah dan swasta berperan penting dalam
                peningkatan akses masyarakat terhadap air bersih dan sanitasi.
                Saat ini, akses terhadap air minum yang layak telah mencapai
                91,72 persen berdasarkan data Badan Pusat Statistik (BPS) tahun
                2023. Sebelumnya, Pemerintah Indonesia telah menetapkan Rencana
                Jangka Panjang Menengah Nasional (RPJMN) dengan target 100
                persen akses air minum layak pada tahun 2020-2024. Hal ini
                tertuang dalam Lampiran II Perpres Nomor 18 Tahun 2020.{" "}
                <span>
                  <a href="">
                    <strong>Baca Selengkapnya</strong>
                  </a>
                </span>
              </p>
              <h2 className="pt-2 text-lg font-semibold">Lokasi</h2>
              <div className="pb-2">
                <p>Palembang, Jakarta, Surabaya, Bandung, Medan</p>
              </div>
            </div>
            <div className="pb-4 lg:pb-0">
              <a className="w-full font-bold border btn rounded-xl border-primary text-primary">
                Bergabung
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
            <div>
              <div className="rounded-xl bg-[#0063A7] p-3 flex justify-between gap-3 items-center text-white mx-4 md:mx-12 w-[400px]">
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-bold">Tanggal Mulai</h1>
                  <h2>2024-11-30 00:00:00</h2>
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-bold">Tanggal Akhir</h1>
                  <h2>2024-11-30 00:00:00</h2>
                </div>
              </div>
            </div>
          </div>
          <CardSlide />
        </div>

        <CampaignInfo />
        <Footer />
      </div>
    </div>
  );
}
