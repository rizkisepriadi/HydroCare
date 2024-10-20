import FeedBack from "./feedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/Button.module.jsx";

export default function invitation({ isLogin }) {
  return (
    <section className="w-full">
      <div className="relative flex items-center justify-center h-full mx-auto">
        <div className="flex flex-col justify-center items-center bg-base-100 max-h-[720px] my-10 md:mb-12 w-full">
          <div className="relative w-[350px] sm:w-[550px] md:w-[660px] flex justify-center items-center">
            {/* Gambar Utama */}
            <div className="w-[300px] h-[150px] sm:w-[500px] sm:h-[237.53px] md:w-[567px] md:h-[300px] rounded-2xl shadow-imgHero relative overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/MFLVmAE4cqg?autoplay=1&mute=1&controls=0&loop=1&playlist=MFLVmAE4cqg&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="object-cover w-full h-full"
                allowFullScreen
              ></iframe>

              {/* Color overlay */}
              <div className="absolute inset-0 bg-[#0063A7] opacity-[0.28] pointer-events-none z-2"></div>
            </div>

            {/* Gambar Kecil Kiri */}
            <div className="absolute top-5 left-0 md:top-6 xl:top-8 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[115px] md:h-[115px] rounded-md shadow-img">
              <img
                src={Person}
                alt="Small Left Image"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Gambar Kecil Kanan */}
            <div className="absolute bottom-4 right-0 md:bottom-5 xl:bottom-7 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-md shadow-img">
              <img
                src={Lake}
                alt="Small Right Image"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-auto">
            <div className="flex flex-col pt-4 items-center gap-5 w-[380] px-[7%] md:w-[680px]">
              <p className="p-section md:text-base">
                Bergabunglah dengan ribuan orang yang peduli untuk menghemat air
                bersih dan memastikan akses air untuk generasi mendatang.
              </p>
              {!isLogin && <JoinButton />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
