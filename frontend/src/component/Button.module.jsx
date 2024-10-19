import React from "react";
import BackIcon from "../assets/back.svg";

export function Button({ text, link, className = "", ...rest }) {
  return (
    <div>
      <a
        href={link}
        className={`btn bg-neutral border-neutral rounded-[100px] w-[100px] lg:text-base lg:w-[100px] xl:text-lg text-base text-primary font-semibold ${className}`}
        {...rest}
      >
        {text}
      </a>
    </div>
  );
}

export function JoinButton({ link }) {
  return (
    <div>
      <button
        href={link}
        className="btn rounded-full bg-gradient-to-b from-[rgba(161,255,249,0.84)] via-[rgba(57,117,234,0.53)] to-[rgba(205,225,239,0.58)] shadow-[0px_4px_12.4px_rgba(0,0,0,0.25),0px_6px_23.5px_3px_rgba(159,239,255,0.67)] px-6 py-2 xl:px-8 xl:py-3 font-bold text-white"
      >
        Ayo Bergabung
      </button>
    </div>
  );
}

export function CampaignButton({ link }) {
  return (
    <div className="flex justify-center">
      <a
        href={link}
        className="btn rounded-full px-6 py-2 font-bold text-primary bg-neutral shadow-lg"
      >
        Partisipasi
      </a>
    </div>
  );
}

export function BackButton() {
  return (
    <div>
      <a href="/" className="flex justify-center items-center gap-1">
        <img src={BackIcon} className="size-6" />
        <h1 className="font-bold text-xl">Back</h1>
      </a>
    </div>
  );
}
