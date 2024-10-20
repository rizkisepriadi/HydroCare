import React from "react";
import Navbar from "../pageSection/navbar";
import Footer from "../pageSection/footer.jsx";

export default function termsOfService() {
  return (
    <div>
      <Navbar />
      <div className="pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[9%]">
        <div className="px-[10%] text-primary flex justify-center flex-col flex-wrap pb-12">
          <div className="text-justify">
            <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">
              Ketentuan Layanan
            </h1>
            <p className="mb-4 text-sm md:mb-6 md:text-base">
              Ketentuan layanan ini mengatur penggunaan layanan kami. Dengan
              mengakses atau menggunakan layanan kami, Anda setuju untuk terikat
              oleh ketentuan ini.
            </p>
          </div>
          <ul className="list-disc list-inside">
            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">Penggunaan Layanan </span>
              Penggunaan Layanan: Anda setuju untuk menggunakan layanan kami
              hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.
            </li>

            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">Akun Pengguna </span>Untuk
              mengakses beberapa fitur layanan kami, Anda mungkin perlu membuat
              akun. Anda bertanggung jawab untuk menjaga kerahasiaan informasi
              akun Anda.
            </li>

            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">Konten Pengguna </span>
              Anda bertanggung jawab atas semua konten yang Anda unggah,
              kirimkan, atau tampilkan melalui layanan kami.
            </li>

            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">
                Pembatasan Tanggung Jawab{" "}
              </span>
              Kami tidak bertanggung jawab atas kerugian atau kerusakan yang
              mungkin timbul dari penggunaan layanan kami, termasuk tetapi tidak
              terbatas pada kehilangan data atau keuntungan.
            </li>

            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">
                Perubahan Ketentuan{" "}
              </span>
              Kami berhak untuk mengubah ketentuan layanan ini kapan saja.
              Perubahan akan berlaku segera setelah dipublikasikan di situs
              kami.
            </li>

            <li className="pb-2 mb-3 text-sm md:mb-4 md:text-base">
              <span className="text-lg font-semibold">Hukum yang Berlaku </span>
              Ketentuan layanan ini diatur oleh hukum yang berlaku di Indonesia.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
