import React from "react";

export default function SquareBar({ Number, Text, className = ""}) {
  return (
    <div
      className={`flex bg-primary text-white justify-center items-center gap-9 w-[325px] h-[76.7px] rounded-md ${className}`}
    >
      <h1 className="text-3xl pl-8 font-extrabold">{Number}</h1>
      <p className="text-sm py-2 pr-2">{Text}</p>
    </div>
  );
}
