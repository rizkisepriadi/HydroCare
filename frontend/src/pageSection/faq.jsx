
export default function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row text-primary lg:py-20 gap-4 py-16 px-[10%]">
      <div className="flex flex-col items-center lg:items-start justify-center lg:w-1/3 xl:w-2/5">
        <h1 className="text-primary text-xl font-extrabold text-center md:text-2xl lg:text-left xl:text-3xl">
          Frequently Asked Questions
        </h1>
        <p className="text-sm font-normal md:text-base opacity-70 lg:pt-2 xl:text-lg">
          Masih bingung atau ragu?
        </p>
      </div>
      <div className="lg:w-3/4 xl:w-3/5">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md lg:text-lg xl:text-xl font-medium">
            Apa itu Kampanye Peduli Air Bersih?
          </div>
          <div className="collapse-content text-md lg:text-lg xl:text-xl ">
            <p>
              Kampanye Peduli Air Bersih adalah inisiatif global yang bertujuan
              meningkatkan kesadaran dan aksi nyata dalam menyediakan akses air
              bersih untuk semua orang, terutama mereka yang hidup di daerah
              kekurangan air. Kami fokus pada edukasi, konservasi, dan
              penggalangan dana untuk membantu masyarakat yang membutuhkan.,
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md lg:text-lg xl:text-xl font-medium">
            Mengapa air bersih sangat penting?
          </div>
          <div className="collapse-content text-md lg:text-lg xl:text-xl ">
            <p>
              Air bersih adalah kebutuhan dasar yang vital bagi kesehatan dan
              kehidupan manusia. Kekurangan air bersih dapat menyebabkan
              berbagai masalah kesehatan, seperti penyakit diare, kolera, dan
              lainnya. Dengan memastikan akses air bersih, kita membantu
              meningkatkan kualitas hidup dan kesehatan masyarakat secara
              keseluruhan.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md lg:text-lg xl:text-xl font-medium">
            Bagaimana cara saya bisa berkontribusi?
          </div>
          <div className="collapse-content text-md lg:text-lg xl:text-xl ">
            <p>
              Anda bisa berkontribusi dengan berbagai cara, seperti berdonasi,
              menjadi sukarelawan, atau menyebarkan informasi tentang pentingnya
              air bersih. Setiap kontribusi, sekecil apapun, sangat berarti
              dalam upaya kami mencapai tujuan kampanye ini.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md lg:text-lg xl:text-xl  font-medium">
            Ke mana dana donasi akan disalurkan?
          </div>
          <div className="collapse-content text-md lg:text-lg xl:text-xl ">
            <p>
              Dana donasi akan digunakan untuk mendukung proyek-proyek yang
              menyediakan akses air bersih, seperti pembangunan sumur,
              penyediaan filter air, dan program edukasi di daerah-daerah yang
              membutuhkan. Semua dana dikelola secara transparan, dan laporan
              penggunaan dana dapat diakses oleh donatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
