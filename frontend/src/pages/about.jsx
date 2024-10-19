import React from "react";
import Developer1 from "../assets/dev1.svg";
import Developer2 from "../assets/dev2.svg";
import Developer3 from "../assets/dev3.svg";
import Footer from "../pageSection/footer.jsx";

export default function About() {
    return (
      <div>
        <div className="text-primary px-[10%] pt-[10%] md:pt-[5%] pb-12">
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center gap-3 md:w-4/6">
                    <h1 className="text-xl font-bold text-center lg:text-2xl xl:text-3xl">Kenali Tim Kreatif di Balik Hydrocare: Bersama Menciptakan Dunia dengan Air Bersih untuk Semua</h1>
                    <p className="text-center">Bersama Menjadi Solusi yang Diandalkan dalam Upaya Memastikan Air Bersih untuk Semua</p>
                </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5 py-10 xl:justify-around">
                <div className="pb-5 w-[190px] md:w-auto">
                    <div className="w-[190px] md:w-56 lg:w-72 xl:w-80">
                        <img
                          src={Developer1}
                          alt="Border"
                          className="w-full h-full bg-center bg-cover rounded-xl"
                        />
                    </div>
                    <div className="pt-2">
                        <h1 className="font-bold xl:text-xl">Muhammad Rizki Sepriadi</h1>
                        
                    </div>
                </div>
                <div className="pb-5 w-[190px] md:w-auto">
                    <div className="w-[190px] md:w-56 lg:w-72 xl:w-80">
                        <img
                          src={Developer2}
                          alt="Border"
                          className="w-full h-full bg-center bg-cover rounded-xl"
                        />
                    </div>
                    <div className="pt-2">
                        <h1 className="font-bold xl:text-xl">Jimmy Maulana</h1>
                        
                    </div>
                </div>
                <div className="pb-5 w-[190px] md:w-auto">
                    <div className="w-[190px] md:w-56 lg:w-72 xl:w-80 rounded">
                        <img
                          src={Developer3}
                          alt="Border"
                          className="w-full h-full bg-center bg-cover rounded-xl"
                        />
                    </div>
                    <div className="pt-2">
                        <h1 className="font-bold xl:text-xl">M.Akbar Kevin</h1>
                        
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center md:flex-row xl:justify-center">
                <div className="w-auto md:w-[200px] lg:w-[300px] xl:w-[400px]">
                    <h1 className="text-lg font-semibold text-center md:text-left md:pr-4 xl:text-xl">Mengapa HydroCare Ada untuk Misi Akses Air Bersih</h1>
                </div>
                <div className="w-auto md:w-[450px] lg:w-[600px]">
                    <p className="text-center md:text-left">HydroCare hadir untuk mengatasi tantangan akses air bersih bagi jutaan orang yang masih berjuang, dengan mengajak semua pihak berkontribusi dalam mengurangi pemborosan dan meningkatkan akses air bersih bagi yang membutuhkan.</p>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
  