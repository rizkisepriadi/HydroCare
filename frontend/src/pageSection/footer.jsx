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
          <h1 className="font-extrabold text-primary lg:text-xl xl:text-2xl">
            Hydrocare
          </h1>
        </a>

        <h1 className="pt-4 text-lg font-medium text-center lg:text-left lg:text-base lg:pt-2 xl:text-lg">
          Bersama Menciptakan Dunia dengan Air Bersih untuk Semua.
        </h1>
      </div>

      <div className="flex gap-24 pt-8 lg:gap-16 xl:gap-20">
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Dukungan</h1>
          <ul className="flex flex-col gap-2 pt-3 lg:gap-1 xl:gap-3 xl:text-lg">
            <li className="cursor-pointer"><a href="/about">Tentang Kami</a></li>
            <li className="cursor-pointer"><a href="/termsOfService">Ketentuan</a></li>
            <li className="cursor-pointer"><a href="/privacyPolicy">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-2xl">Informasi</h1>
          <ul className="flex flex-col gap-2 pt-3 lg:gap-1 xl:gap-3 xl:text-lg">
            <li className="cursor-pointer"><a href="">Blog</a></li>
            <li className="cursor-pointer"><a href="">Contact</a></li>
            <li className="cursor-pointer"><a href="">Bantuan</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-8 text-2xl font-extrabold xl:pt-9 xl:text-3xl lg:pt-10">
          Sosial Media Kami
        </h1>
        <p className="text-xs font-medium xl:text-base">
          &copy; 2024 Hydrocare All Rights Reserved
        </p>
        <div className="flex gap-2 py-4">
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
