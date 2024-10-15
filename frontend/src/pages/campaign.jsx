import React from "react";
import CampaignImage from "../assets/Temp.svg";
import ImagePhoto from "../assets/home.svg";
import Navbar from "../pageSection/navBar";
import Footer from "../pageSection/footer";

export default function Campaign() {
  return (
    <div>
      <Navbar />
      <div className="relative h-[213.029px] md:h-[400px]">
        <img
          src={CampaignImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center px-[5%] py-5 text-primary">
        <div className="flex justify-center items-center gap-3 mb-5 ">
          <div className="avatar">
            <div className="w-[120px] lg:w-52 xl:w-64 rounded">
              <img
                src={CampaignImage}
                alt="Border"
                className="bg-cover bg-center h-full w-full"
              />
            </div>
          </div>
          <h1 className="text-primary font-bold text-lg md:text-xl lg:text-3xl xl:text-4xl">
            Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:gap-10 gap-3 w-full">
          <div className="flex flex-col lg:w-1/3 gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold md:text-center lg:text-start lg:text-lg xl:text-xl">
                Ayo Berpartisipasi
              </h1>
              <a className="btn btn-block rounded-xl border border-primary font-bold text-primary">
                Bergabung
              </a>
            </div>

            <div className="flex  lg:flex-col items-center justify-around lg:items-start gap-2 lg:gap-5 ">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold lg:text-lg xl:text-xl">Jadwal</h1>
                <table className="xl:text-lg">
                  <tbody>
                    <tr>
                      <td>Mulai</td>
                      <td>: 17 Juni 2024</td>
                    </tr>
                    <tr>
                      <td>Selesai</td>
                      <td>: 17 Juni 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h1 className="font-semibold lg:text-lg xl:text-xl">Lokasi</h1>
                <div className="flex gap-2 items-center xl:text-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="19"
                    viewBox="0 0 13 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.82077 0.854881H6.84441C10.1639 0.871324 12.8546 4.28513 12.8416 8.4639V8.5469C12.7968 11.5332 11.3724 14.0113 10.1857 15.564C9.84796 16.0079 9.48845 16.4339 9.11775 16.8316C8.89571 17.0704 8.56232 17.0376 8.37262 16.758C8.18291 16.4777 8.20966 16.058 8.43171 15.8192C8.77504 15.4505 9.10905 15.0543 9.42315 14.6416C10.4793 13.2604 11.7456 11.0767 11.7842 8.52262C11.7948 5.01408 9.5774 2.19926 6.84005 2.18517H6.82077C4.09276 2.18517 1.86793 4.97258 1.85736 8.40909C1.90401 10.1066 2.3593 11.7203 3.17472 13.0741C4.12635 14.6714 5.56997 16.3626 6.94206 17.4886C7.18712 17.689 7.25616 18.1008 7.09631 18.4093C6.99555 18.6051 6.82575 18.7116 6.65284 18.7116C6.55394 18.7116 6.45443 18.6771 6.36486 18.6035C4.89574 17.3985 3.34949 15.5867 2.33006 13.8759C1.38403 12.3044 0.854722 10.4292 0.799988 8.45529C0.813049 4.23502 3.51183 0.854881 6.82077 0.854881ZM5.5849 8.54588C5.5849 9.40168 6.13846 10.0993 6.81891 10.0993C7.49936 10.0993 8.05292 9.40168 8.05292 8.54588C8.05292 7.6893 7.49936 6.99166 6.81891 6.99166C6.5272 6.99166 6.29022 6.69413 6.29022 6.32691C6.29022 5.95891 6.5272 5.66137 6.81891 5.66137C8.08215 5.66137 9.11029 6.95486 9.11029 8.54588C9.11029 10.1361 8.08215 11.4296 6.81891 11.4296C5.55566 11.4296 4.52753 10.1361 4.52753 8.54588C4.52753 8.17788 4.7645 7.88035 5.05621 7.88035C5.34792 7.88035 5.5849 8.17788 5.5849 8.54588Z"
                      fill="#0063A7"
                    />
                  </svg>
                  <p>Indonesia</p>
                </div>
                <div className="flex gap-2 items-center xl:text-lg">
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.69306 4.73966C3.69306 3.07416 4.87176 1.7194 6.32082 1.7194C7.76988 1.7194 8.94858 3.07416 8.94858 4.73966C8.94858 6.40439 7.76988 7.75915 6.32082 7.75915C4.87176 7.75915 3.69306 6.40439 3.69306 4.73966ZM2.72904 4.73966C2.72904 7.01508 4.34044 8.86718 6.32082 8.86718C8.3012 8.86718 9.91193 7.01508 9.91193 4.73966C9.91193 2.46348 8.3012 0.611382 6.32082 0.611382C4.34044 0.611382 2.72904 2.46348 2.72904 4.73966ZM5.63923 16.0215C5.86262 16.0292 6.09004 16.0331 6.32082 16.0331C8.61046 16.0331 11.6542 15.7393 11.6542 13.2033C11.6542 10.3573 7.63973 10.3573 6.32082 10.3573C4.03118 10.3573 0.987488 10.651 0.987488 13.1878C0.987488 13.9473 1.29474 14.9721 2.75856 15.5419C3.01147 15.6421 3.28384 15.4841 3.36971 15.1949C3.45491 14.9058 3.32007 14.5919 3.06782 14.494C2.06623 14.1039 1.95084 13.5618 1.95084 13.1878C1.95084 12.0443 3.42137 11.4645 6.32082 11.4645C9.22028 11.4645 10.6908 12.0497 10.6908 13.2033C10.6908 14.346 9.22028 14.925 6.32082 14.925C6.09944 14.925 5.88141 14.922 5.66673 14.915C5.40912 14.9173 5.17969 15.1471 5.17231 15.4525C5.16426 15.7586 5.37357 16.0138 5.63923 16.0215Z"
                      fill="#0063A7"
                    />
                  </svg>
                  <p>Offline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <h1 className="font-semibold py-2 lg:text-lg xl:text-xl">Deskripsi</h1>
            <p className="whitespace-pre-line lg:text-justify text-sm xl:text-lg md:text-base">{`Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses masyarakat terhadap air bersih dan sanitasi. Saat ini, akses terhadap air minum yang layak telah mencapai 91,72 persen berdasarkan data Badan Pusat Statistik (BPS) tahun 2023.
            
            Sebelumnya, Pemerintah Indonesia telah menetapkan Rencana Jangka Panjang Menengah Nasional (RPJMN) dengan target 100 persen akses air minum layak pada tahun 2020-2024. Hal ini tertuang dalam Lampiran II Perpres Nomor 18 Tahun 2020.
            
            Staf Ahli V Kementerian PUPR mengatakan, partisipasi yang terus meningkat dari swasta dapat membantu pemerintah dalam memperluas akses air minum yang layak sekaligus meningkatkan kesehatan dan kesejahteraan masyarakat.`}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
