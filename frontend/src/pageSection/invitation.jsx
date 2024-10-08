import FeedBack from "./feedBack.jsx";
import Waterfall from "../assets/waterfall.svg";
import Person from "../assets/Person.svg";
import Lake from "../assets/Lake.svg";
import { JoinButton } from "../component/button.module.jsx";

export default function invitation() {
  return (
    <section className="w-full h-screen">
      <div className="relative flex justify-center items-center mx-auto h-full">
        <div className="flex flex-col justify-center items-center bg-base-100 max-h-[720px] mb-40 md:mb-28 w-full">
          <div className="relative w-[350px] sm:w-[550px] md:w-[660px] flex justify-center items-center">
            {/* Gambar Utama */}
            <div className="w-[300px] h-[150px] sm:w-[500px] sm:h-[237.53px] md:w-[567px] md:h-[300px] rounded-2xl shadow-imgHero">
              <img
                src={Waterfall}
                alt="Main Waterfall Image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Gambar Kecil Kiri */}
            <div className="absolute top-5 left-0 md:top-6 xl:top-8 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[115px] md:h-[115px] rounded-md shadow-img">
              <img
                src={Person}
                alt="Small Left Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Gambar Kecil Kanan */}
            <div className="absolute bottom-4 right-0 md:bottom-5 xl:bottom-7 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-md shadow-img">
              <img
                src={Lake}
                alt="Small Right Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-auto">
            <div className="flex flex-col pt-4 px-2 items-center gap-5 pb-[26px] w-[380] md:w-[680px]">
              <p className="p-section">
                Bergabunglah dengan ribuan orang yang peduli untuk menghemat air
                bersih dan memastikan akses air untuk generasi mendatang.
              </p>
              <JoinButton />
            </div>
          </div>
        </div>

        {/* Feed Back */}
        <FeedBack />
      </div>
    </section>
  );
}
