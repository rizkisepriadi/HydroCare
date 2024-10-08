import SquareBar from "../component/squareBar.jsx";
import React from "react";

export default function about() {
  return (
    <section className="bg-white bg-gradient-to-b from-white via-white to-base-100  ">
      <h1 className="text-primary text-xl font-extrabold text-center py-10">
        Selamatkan Air, Selamatkan <br />
        Masa Depan Kita
      </h1>
      <div className="px-6 border border-[#0063A7] border-opacity-10 mx-6 rounded-[20px] shadow-[0px_4px_4px_0px_rgba(15,63,233,0.25),0px_-3px_4px_0px_rgba(15,63,233,0.25)]">
        <div className="text-primary text-justify text-sm font-semibold justify-center">
          <p className="pb-5  ">
            Jutaan orang di seluruh dunia masih berjuang mendapatkan air bersih.
            HydroCare mengajak Anda untuk menjadi bagian dari solusi global ini,
            mengurangi pemborosan dan meningkatkan akses air bersih bagi yang
            membutuhkan.
          </p>
          <p className="pb-8">
            Mari bergandengan tangan dalam misi ini. Kontribusi Anda, sekecil
            apapun, bisa menjadi harapan baru bagi mereka yang membutuhkan.
            Bersama, kita bisa membuat dunia yang lebih sehat dan adil.
          </p>
        </div>
      </div>
      <div className="pt-[31px] px-6 bg-[url('/src/assets/bottle.svg')] bg-cover pb-20">
        <div className="flex flex-col items-center gap-[37px]">
          <SquareBar
            Number={"01"}
            Text={
              "Setiap 90 detik, seorang anak meninggal karena penyakit terkait air yang tidak bersih."
            }
          />
          <SquareBar
            Number={"02"}
            Text={
              "1 dari 10 orang di dunia tidak memiliki akses ke air bersih."
            }
          />
          <SquareBar
            Number={"03"}
            Text={
              "Lebih dari 80% air limbah yang ada diseluruh dunia dibuang ke lingkungan tanpa diolah."
            }
          />
        </div>
      </div>
    </section>
  );
}
