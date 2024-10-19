import React from "react";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Line from "../assets/line.svg";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row bg-base-200 lg:justify-between items-center text-primary pb-6 xl:pb-10 px-[7%]">
      <div className="flex flex-col items-center lg:items-start lg:w-[250px] xl:w-[350px]">
        <a href="/" className="flex items-center gap-2 pt-6 ">
          <img src={Logo} alt="logo" className="size-8" />
          <h1 className="text-primary font-extrabold lg:text-xl xl:text-2xl">
            Hydrocare
          </h1>
        </a>

        <h1 className="text-lg font-medium text-center lg:text-left lg:text-base lg:pt-2 xl:text-lg pt-4">
          Bersama Menciptakan Dunia dengan Air Bersih untuk Semua.
        </h1>
      </div>

      <div className="flex pt-8 gap-24 lg:gap-16 xl:gap-20">
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Dukungan</h1>
          <ul className="pt-3 flex flex-col gap-2 lg:gap-1 xl:gap-3 xl:text-lg">
            <li>Tentang Kami</li>
            <li>Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Informasi</h1>
          <ul className="pt-3 flex flex-col gap-2 lg:gap-1 xl:gap-3 xl:text-lg">
            <li>Blog</li>
            <li>Contact</li>
            <li>Bantuan</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl pt-8 xl:pt-9 font-extrabold xl:text-3xl lg:pt-10">
          Sosial Media Kami
        </h1>
        <p className="font-medium text-xs xl:text-base">
          &copy; 2024 Hydrocare All Rights Reserved
        </p>
        <div className="flex py-4 gap-2">
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={Tiktok} alt="Instagram" />
          </a>
          <a href="">
            <img src={Line} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
