import React from "react";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Line from "../assets/line.svg";

export default function Footer() {
  return (
    <div className="flex flex-col bg-base-200 items-center text-primary mb-6">
      <img src={Logo} alt="" className="w-[38.489px] pt-6" />
      <h1 className="text-lg font-medium text-center pt-4">
        Bersama Menciptakan Dunia dengan Air Bersih untuk Semua.{" "}
      </h1>
      <div className="flex pt-8 gap-24">
        <div>
          <h1 className="text-xl font-bold">Dukungan</h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li>Tentang Kami</li>
            <li>Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">Informasi</h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li>Blog</li>
            <li>Contact</li>
            <li>Bantuan</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl pt-8 font-extrabold">Sosial Media Kami</h1>
        <p className="font-medium text-xs">
          &copy; 2024 Hydrocare All Rights Reserved{" "}
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
