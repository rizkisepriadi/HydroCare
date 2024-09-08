import React from "react";
import Pagination from "./Pagination";
import { useState } from "react";

export default function FeedBack() {
  return (
    <section className="bg-base-200">
      <div className="flex flex-col items-center text-primary">
        <h1 className="text-base font-semibold pt-[22px]">
          Pendapat Mereka Tentang HydroCare
        </h1>
        <p className="text-xs font-medium text-center opacity-70">
          HydroCare telah membantu lebih dari
          <br />
          10.000 penduduk
        </p>
        <Pagination />
      </div>
    </section>
  );
}
