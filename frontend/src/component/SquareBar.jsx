import React from "react";

export default function SquareBar({ Number, Text, className = "" }) {
  return (
    <div
      className={`flex bg-primary text-white justify-center items-center gap-9 lg:gap-5 w-[325px] h-[76.7px] lg:w-[290px] xl:w-[400px] md:w-full md:justify-start rounded-md ${className}`}
    >
      <h1 className="text-3xl pl-8 lg:pl-6 font-extrabold">{Number}</h1>
      <p className="text-sm md:text-base py-2 pr-2 lg:text-sm xl:text-base">{Text}</p>
    </div>
  );
}
