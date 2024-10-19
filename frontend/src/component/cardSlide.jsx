import React from "react";
import Temp from "../assets/Temp.svg";
import BlogImage from "../assets/blog.svg";

export default function cardSlide() {
  return (
    <div className="bg-[#EAF3F9] px-[10%] pt-3 pb-4">
        <div className="flex flex-col items-center justify-center pt-20">
            <h1 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl md:mb-6">
                Kampanye Lainnya
            </h1>
            <p className="mb-6 text-center md:mb-8">Temukan Beragam Kampanye Inspiratif untuk Mendukung Perubahan</p>
        </div>
        
        <div className="relative">
            {/* Left Scroll Button */}
            <button
                onClick={() => {
                    const scrollContainer = document.getElementById('scroll-container');
                    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-[#0063A7] rounded-full shadow-md top-1/2 text-white">
                &lt; {/* Replace with an icon if desired */}
            </button>
            
            <div id="scroll-container" className="flex mx-10 space-x-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            
            <div className="min-w-full md:min-w-[300px] xl:min-w-[400px] snap-start bg-white rounded-lg shadow-md p-4">
                    <img src={Temp} alt="Fundraiser 1" className="object-cover w-full h-48 mb-2 rounded-lg" />
                    
                    <h3 className="mb-2 text-lg font-semibold">My Baby Battles For His Life And We Need Your Support</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-semibold max-w-[200px] max-h-[40px]">Palembang, Jakarta, Surabaya, Bandung, Medan</p>
                        <h1 className="text-right">Online</h1>
                    </div>
                    
                    <div className="h-20 mb-3 overflow-hidden text-justify">  {/* Fixed height for this section */}
                        <p>
                            Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses <span className="font-semibold"><a href="">Baca Selengkapnya</a></span>
                        </p>
                    </div>
                    
                    <div className="flex justify-between">
                        <h1 className="font-bold text-center">Tanggal Akhir</h1>
                        <h2>2024-11-30 00:00:00</h2>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                        <a className="font-bold border-solid bg-transparent btn rounded-xl border-primary text-primary w-[48%]">
                            Share
                        </a>
                        <a className="font-bold border btn rounded-xl border-primary text-primary w-[48%]">
                            Bergabung
                        </a>
                    </div>
                </div>

                <div className="min-w-full md:min-w-[300px] xl:min-w-[400px] snap-start bg-white rounded-lg shadow-md p-4">
                    <img src={Temp} alt="Fundraiser 1" className="object-cover w-full h-48 mb-2 rounded-lg" />
                    
                    <h3 className="mb-2 text-lg font-semibold">My Baby Battles For His Life And We Need Your Support</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-semibold max-w-[200px] max-h-[40px]">Palembang, Jakarta, Surabaya, Bandung, Medan</p>
                        <h1 className="text-right">Online</h1>
                    </div>
                    
                    <div className="h-20 mb-3 overflow-hidden text-justify">  {/* Fixed height for this section */}
                        <p>
                            Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses <span className="font-semibold"><a href="">Baca Selengkapnya</a></span>
                        </p>
                    </div>
                    
                    <div className="flex justify-between">
                        <h1 className="font-bold text-center">Tanggal Akhir</h1>
                        <h2>2024-11-30 00:00:00</h2>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                        <a className="font-bold border-solid bg-transparent btn rounded-xl border-primary text-primary w-[48%]">
                            Share
                        </a>
                        <a className="font-bold border btn rounded-xl border-primary text-primary w-[48%]">
                            Bergabung
                        </a>
                    </div>
                </div>

                <div className="min-w-full md:min-w-[300px] xl:min-w-[400px] snap-start bg-white rounded-lg shadow-md p-4">
                    <img src={Temp} alt="Fundraiser 1" className="object-cover w-full h-48 mb-2 rounded-lg" />
                    
                    <h3 className="mb-2 text-lg font-semibold">My Baby Battles For His Life And We Need Your Support</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-semibold max-w-[200px] max-h-[40px]">Palembang, Jakarta, Surabaya, Bandung, Medan</p>
                        <h1 className="text-right">Online</h1>
                    </div>
                    
                    <div className="h-20 mb-3 overflow-hidden text-justify">  {/* Fixed height for this section */}
                        <p>
                            Kolaborasi pemerintah dan swasta berperan penting dalam peningkatan akses <span className="font-semibold"><a href="">Baca Selengkapnya</a></span>
                        </p>
                    </div>
                    
                    <div className="flex justify-between">
                        <h1 className="font-bold text-center">Tanggal Akhir</h1>
                        <h2>2024-11-30 00:00:00</h2>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                        <a className="font-bold border-solid bg-transparent btn rounded-xl border-primary text-primary w-[48%]">
                            Share
                        </a>
                        <a className="font-bold border btn rounded-xl border-primary text-primary w-[48%]">
                            Bergabung
                        </a>
                    </div>
                </div>
            {/* Right Scroll Button */}
            <button
                onClick={() => {
                    const scrollContainer = document.getElementById('scroll-container');
                    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="absolute right-0 z-10 p-2 transform -translate-y-1/2 rounded-full shadow-md bg-[#0063A7] top-1/2 text-white">
                &gt; {/* Replace with an icon if desired */}
            </button> 
        </div>
        </div> 
    </div>
  );
}
