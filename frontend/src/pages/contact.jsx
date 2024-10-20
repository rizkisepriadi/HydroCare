import React from "react";
import Navbar from "../pageSection/navbar";
import Footer from "../pageSection/footer.jsx";
import Linkedln from "../assets/linkedin.svg";
import Facebook from "../assets/facebook.svg";
import InstagramContact from "../assets/instagramContact.svg";

export default function contact() {
  return (
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] md:pt-[14%] lg:pt-[11%] xl:pt-[10%] text-primary">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center gap-3 md:w-4/6">
            <h1 className="text-xl font-bold text-center lg:text-2xl xl:text-3xl">
              Hubungi Kami untuk Membangun Interaksi yang Lebih Baik
            </h1>
            <p className="text-center w-[80%]">
              Hubungi kami menggunakan informasi di bawah ini. Kami akan
              merespons kebutuhan dan permintaan Anda dengan cepat
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen text-primary">
          <div className="flex flex-col w-full max-w-6xl gap-10 py-10 md:flex-row rounded-xl">
            {/* Left Section */}
            <div className="flex-1 py-6">
              <h2 className="text-xl font-bold">Formulir Kontak HydroCare</h2>
              <p className="text-justify">
                Jika Anda memiliki pertanyaan atau masukan, silakan isi formulir
                di bawah ini untuk terhubung langsung dengan kami melalui
                WhatsApp.
              </p>

              <div className="mt-4">
                <p>
                  <strong>1. Pilih Servis:</strong> Silakan pilih produk yang
                  Anda butuhkan dari daftar yang tersedia.
                </p>
              </div>

              <div className="mt-4">
                <p>
                  <strong>2. Masukkan Nama:</strong> Selanjutnya, masukkan nama
                  depan dan nama belakang Anda.
                </p>
              </div>

              <div className="mt-4">
                <p>
                  <strong>3. Informasi Kontak:</strong> Pastikan untuk
                  menyediakan alamat email dan nomor telepon Anda agar kami bisa
                  menghubungi Anda kembali.
                </p>
              </div>

              <div className="mt-4">
                <p>
                  <strong>4. Kirim Pesan:</strong> Setelah semua informasi
                  terisi, klik tombol kirim, dan Anda akan langsung terhubung
                  dengan kami melalui WhatsApp untuk mendapatkan bantuan cepat.
                </p>
              </div>

              <div className="mt-4 text-justify">
                <p>
                  Untuk informasi lebih lanjut, Anda juga dapat mengunjungi
                  media sosial kami.
                </p>
                <div className="flex justify-center p-3 mt-2 bg-[#EAF3F9] rounded-xl">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className="w-8 h-8 shadow-custom"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <img
                      src={InstagramContact}
                      alt="Twitter"
                      className="w-8 h-8 shadow-custom"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Linkedln}
                      alt="Instagram"
                      className="w-8 h-8 shadow-custom"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 p-6 rounded-lg shadow-md bg-[#EAF3F9]">
              <h2 className="text-xl font-bold">
                Kirimkan Pesan Anda Sekarang dan Terhubung dengan Kami!
              </h2>

              <form className="mt-4 space-y-4">
                <div>
                  <label>Pilih Jenis Pesan</label>
                  <select
                    className="w-full p-2 border-b-2 border-[#0063A7] bg-none focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      -- Pilih Jenis --
                    </option>
                    <option>Pengajuan Kampanye</option>
                    <option>Pertanyaan</option>
                    <option>FeedBack</option>
                    <option>Laporan</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1">
                    <label>Nama Depan</label>
                    <input
                      type="text"
                      placeholder="Nama Depan"
                      className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label>Nama Belakang</label>
                    <input
                      type="text"
                      placeholder="Nama Belakang"
                      className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="kamu@gmail.com"
                    className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                  />
                </div>

                <div>
                  <label>Nomor Telepon</label>
                  <input
                    type="tel"
                    placeholder="(+62) 862 8721 2125"
                    className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                  />
                </div>

                <div>
                  <label>Perusahaan (Optional)</label>
                  <input
                    type="text"
                    placeholder="Perusahaan Kamu"
                    className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                  />
                </div>

                <div>
                  <label>Pesan</label>
                  <textarea
                    placeholder="Masukkan Pesanmu (Tanpa Perkenalan Lagi)"
                    className="w-full p-2 border-b-2 border-[#0063A7] focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>
                    I accept the website{" "}
                    <a href="/privacyPolicy" className="font-semibold">
                      privacy policy
                    </a>
                    .
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 font-bold transition border btn rounded-xl border-primary text-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
