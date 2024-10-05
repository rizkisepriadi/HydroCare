import Open from "../assets/openIcon.svg";
import Close from "../assets/closeIcon.svg";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const isLargeScreen = useMediaQuery("(max-width: 768px)");

  // Ubah data menjadi array
  const data = [
    {
      pertanyaan: "Apa itu Kampanye Peduli Air Bersih?",
      jawaban:
        "Kampanye Peduli Air Bersih adalah inisiatif global yang bertujuan meningkatkan kesadaran dan aksi nyata dalam menyediakan akses air bersih untuk semua orang, terutama mereka yang hidup di daerah kekurangan air. Kami fokus pada edukasi, konservasi, dan penggalangan dana untuk membantu masyarakat yang membutuhkan.",
    },
    {
      pertanyaan: "Mengapa air bersih sangat penting?",
      jawaban:
        "Air bersih adalah kebutuhan dasar yang vital bagi kesehatan dan kehidupan manusia. Kekurangan air bersih dapat menyebabkan berbagai masalah kesehatan, seperti penyakit diare, kolera, dan lainnya. Dengan memastikan akses air bersih, kita membantu meningkatkan kualitas hidup dan kesehatan masyarakat secara keseluruhan.",
    },
    {
      pertanyaan: "Bagaimana cara saya bisa berkontribusi?",
      jawaban:
        "Anda bisa berkontribusi dengan berbagai cara, seperti berdonasi, menjadi sukarelawan, atau menyebarkan informasi tentang pentingnya air bersih. Setiap kontribusi, sekecil apapun, sangat berarti dalam upaya kami mencapai tujuan kampanye ini.",
    },
    {
      pertanyaan: "Ke mana dana donasi akan disalurkan?",
      jawaban:
        "Dana donasi akan digunakan untuk mendukung proyek-proyek yang menyediakan akses air bersih, seperti pembangunan sumur, penyediaan filter air, dan program edukasi di daerah-daerah yang membutuhkan. Semua dana dikelola secara transparan, dan laporan penggunaan dana dapat diakses oleh donatur.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col lg:flex-row text-primary px-[30px] lg:px-[70px] lg:pt-[157px] lg:pb-[150px] gap-4 lg:gap-[136px] py-16">
      <div className="flex flex-col items-center lg:items-start justify-center lg:w-[328px]">
        <h1 className="text-xl lg:text-[28px] font-extrabold">
          Frequently Asked Questions
        </h1>
        <p className="text-xs font-normal lg:text-base opacity-70 lg:pt-2">
          Masih bingung atau ragu?
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 lg:gap-[18px] lg:w-[817px]">
          {data.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="flex lg:gap-[59px] gap-4">
                <p className="text-primary text-center lg:text-2xl font-medium">
                  {`0${index + 1}`}
                </p>
                <div className="flex w-full justify-between">
                  <h1
                    className="lg:text-2xl font-bold text-primary lg:pr-[239px]"
                    onClick={() => toggleOpen(index)}
                  >
                    {item.pertanyaan}
                  </h1>
                  {!isLargeScreen && (
                    <button
                      className="active:animate-spin"
                      onClick={() => toggleOpen(index)}
                    >
                      {openIndex === index ? (
                        <img src={Close} alt="" />
                      ) : (
                        <img src={Open} alt="" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              <p
                className={`${
                  openIndex === index ? "static" : "hidden"
                } lg:pl-[83px] pl-8 text-wrap text-xs lg:text-[18px] lg:w-[624px] lg:pt-[18px] font-medium`}
              >
                {item.jawaban}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
