import React from "react";

export function Button({ text, link }) {
  return (
    <div>
      <a
        href={link}
        className="btn bg-neutral border-primary rounded-[100px] xl:text-xl text-base text-primary font-semibold"
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
        className="rounded-full bg-gradient-to-b from-[rgba(161,255,249,0.84)] via-[rgba(57,117,234,0.53)] to-[rgba(205,225,239,0.58)] shadow-[0px_4px_12.4px_rgba(0,0,0,0.25),0px_6px_23.5px_3px_rgba(159,239,255,0.67)] px-6 py-2 xl:px-8 xl:py-3 font-bold text-white"
      >
        Ayo Bergabung
      </button>
    </div>
  );
}
