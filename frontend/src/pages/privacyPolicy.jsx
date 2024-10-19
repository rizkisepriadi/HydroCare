import React, { useState } from 'react'
import Navbar from "../pageSection/navBar";
import Footer from "../pageSection/footer.jsx";

export default function privacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null)
  
  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  };
    
  return (
    <div>
      <Navbar />  
      <div className="pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[9%]">
        <div className="px-[10%] text-primary flex justify-center flex-col flex-wrap pb-12">
            <div className="text-justify">
                <h1 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl md:mb-6">
                    Kebijakan Privasi
                </h1>
                <p className="mb-4 text-sm md:mb-6 md:text-base">
                    Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami.
                </p>
            </div>
            
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 1 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(1)}> 
                    Pengumpulan Informasi Pribadi {expandedSection === 1 ? '-' : '+'}
                </h2>
                {expandedSection === 1 && (
                    <div>
                        <p className="mb-3 text-sm md:mb-4 md:text-base">
                            Kami mengumpulkan berbagai jenis informasi dari pengguna, termasuk namun tidak terbatas pada:
                        </p>
                        <ul className="mb-4 text-sm list-disc list-inside md:mb-6 md:text-base text-start">
                            <li>
                                <strong>Informasi yang Anda berikan secara langsung</strong>: Nama, alamat email, kata sandi, dan informasi lain yang diberikan saat membuat akun atau berpartisipasi dalam kampanye di situs kami.
                            </li>
                            <li>
                                <strong>Informasi otomatis</strong>: Kami juga mengumpulkan data seperti alamat IP, jenis perangkat, browser yang digunakan, serta informasi navigasi yang dihasilkan secara otomatis saat Anda mengunjungi situs kami. Cookie juga digunakan untuk melacak aktivitas Anda di situs, membantu kami mempersonalisasi pengalaman pengguna.
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 2 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(2)}>
                    Penggunaan Informasi Pribadi {expandedSection === 2 ? '-' : '+'}
                </h2>
                {expandedSection === 2 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Informasi yang kami kumpulkan digunakan untuk berbagai tujuan, antara lain:
                        </p>
                        <ul className="mb-4 text-sm list-disc list-inside md:mb-6 md:text-base text-start">
                            <li>
                                <strong>Otentikasi dan pengelolaan akun</strong>: Untuk memungkinkan Anda login dan mengakses fitur-fitur situs, termasuk kampanye dan artikel terkait.
                            </li>
                            <li>
                                <strong>Personalisasi konten</strong>: Untuk menampilkan artikel atau kampanye yang relevan sesuai dengan preferensi Anda.
                            </li>
                            <li>
                                <strong>Analitik</strong>: Untuk menganalisis bagaimana pengguna berinteraksi dengan situs kami, guna meningkatkan performa dan fungsionalitas situs.
                            </li>
                            <li>
                                <strong>Komunikasi</strong>: Kami dapat menggunakan informasi kontak Anda untuk mengirimkan pemberitahuan terkait pembaruan kampanye, artikel baru, atau promosi jika Anda telah menyetujui komunikasi tersebut.
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 3 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(3)}>
                    Berbagi Informasi dengan Pihak Ketiga {expandedSection === 3 ? '-' : '+'}
                </h2>
                {expandedSection === 3 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga kecuali dalam situasi berikut:
                        </p>
                        <ul className="mb-4 text-sm list-disc list-inside md:mb-6 md:text-base text-start">
                            <li>
                                <strong>Penyedia layanan</strong>: Kami dapat berbagi informasi dengan penyedia layanan pihak ketiga yang membantu kami mengelola dan menjalankan situs (misalnya, layanan hosting, penyedia analitik, atau platform email).
                            </li>
                            <li>
                                <strong>Persyaratan hukum</strong>: Kami mungkin mengungkapkan informasi pribadi jika diwajibkan oleh hukum atau jika kami yakin tindakan tersebut diperlukan untuk mematuhi kewajiban hukum, melindungi hak-hak kami, atau mencegah tindakan ilegal.
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            

            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 4 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(4)}>
                    Keamanan Data {expandedSection === 4 ? '-' : '+'}
                </h2>
                {expandedSection === 4 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Kami berkomitmen untuk melindungi informasi pribadi Anda dan menerapkan langkah-langkah keamanan yang sesuai, termasuk enkripsi data dan pembatasan akses internal. Namun, harap diingat bahwa tidak ada metode transmisi data melalui internet atau penyimpanan elektronik yang sepenuhnya aman.
                        </p>
                    </div>
                )}
            </div>
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 5 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(5)}>
                    Hak Anda {expandedSection === 5 ? '-' : '+'}
                </h2>
                {expandedSection === 5 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Anda memiliki hak-hak tertentu terkait informasi pribadi Anda, termasuk:
                        </p>
                        <ul className="mb-4 text-sm list-disc list-inside md:mb-6 md:text-base text-start">
                            <li>
                                <strong>Hak akses</strong>: Anda dapat meminta salinan informasi pribadi yang kami miliki tentang Anda.
                            </li>
                            <li>
                                <strong>Hak perbaikan</strong>: Anda berhak memperbarui atau memperbaiki informasi pribadi Anda jika terdapat kesalahan.
                            </li>
                            <li>
                                <strong>Hak penghapusan</strong>: Anda dapat meminta penghapusan informasi pribadi Anda, kecuali ada kewajiban hukum yang mengharuskan kami menyimpannya.
                            </li>
                            <li>
                                <strong>Hak penarikan persetujuan</strong>: Anda dapat menarik persetujuan Anda untuk pemrosesan data kapan saja.
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 6 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(6)}>
                    Kebijakan Cookie {expandedSection === 6 ? '-' : '+'}
                </h2>
                {expandedSection === 6 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna. Cookie memungkinkan kami untuk melacak preferensi Anda, meningkatkan kinerja situs, dan menawarkan konten yang relevan. Anda dapat mengelola pengaturan cookie melalui pengaturan browser Anda.
                        </p>
                    </div>
                )}
            </div>
            
            <div className="pb-2 text-justify">
                <h2 className={`mb-3 text-xl font-semibold cursor-pointer md:text-2xl md:mb-4 ${expandedSection === 7 ? '' : 'border-b-2 border-[#1880C7]'}`}
                onClick={() => toggleExpand(7)}>
                    Pembaruan Kebijakan Privasi {expandedSection === 7 ? '-' : '+'}
                </h2>
                {expandedSection === 7 && (
                    <div>
                        <p className="mb-4 text-sm md:mb-6 md:text-base">
                            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan melalui situs web kami dan tanggal pembaruan terakhir akan dicantumkan di bagian atas kebijakan ini. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala untuk tetap mendapatkan informasi terbaru tentang bagaimana kami melindungi informasi Anda.
                        </p>
                        <p className="mb-4 text-sm md:text-base">
                            Jika Anda memiliki pertanyaan lebih lanjut mengenai Kebijakan Privasi kami, silakan hubungi kami melalui [email] atau melalui formulir kontak di situs web.
                        </p>
                    </div>
                )}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
