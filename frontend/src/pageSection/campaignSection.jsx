import React from "react";
import CampaignCard from "../component/campaignCard";

export default function campaignSection() {
  return (
    <div className="px-[10%]">
      <h1 className="text-primary text-xl font-extrabold text-center lg:pt-10 xl:pt-20 lg:mb-5 py-10 md:text-2xl">
      Kampanye Sedang Berlangsung
      </h1>
      <div className="flex flex-col items-center">
        <CampaignCard />
      </div>
    </div>
  );
}
