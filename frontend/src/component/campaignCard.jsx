import Temp from "../assets/Temp.svg";
import { CampaignButton } from "./button.module";
import { useState } from "react";

export default function CampaignCard() {
  return (
    <div className="card md:card-side md:w-full bg-base-200 w-[350px] shadow-xl text-primary">
      <figure className="md:w-1/2">
        <img src={Temp} alt="Campaign" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h1 className="text-center text-xl font-bold md:text-left lg:text-2xl">Bantuan ke Palembang </h1>
        <div className="flex flex-col gap-2 font-semibold">
          <div>
            <p className="text-sm lg:text-lg">Tanggal Acara</p>
            <p className="lg:text-lg font-semibold">17 Juni 2024</p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">Pelaksanaan</p>
            <p className="lg:text-lg font-semibold">Offline</p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">User yang Berpatipasi</p>
            <p className="lg:text-lg font-semibold">12.890</p>
          </div>
        </div>{" "}
        <div className="card-actions justify-end">
          <CampaignButton link={"/campaign"} />
        </div>
      </div>
    </div>
  );
}
