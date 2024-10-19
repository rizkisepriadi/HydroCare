import React from 'react'

export default function campaignInfo() {
  return (
    <div>
      <div className="px-[10%] pt-3 pb-4 bg-[#EAF3F9]">
            <div className="p-4 rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl md:mb-6">
                        Penyebab yang Bisa Anda Kampanyekan
                    </h1>
                    <p className="mb-6 text-center md:mb-8">Baik untuk kebutuhan pribadi, isu sosial, atau ide kreatif, Anda dapat mengandalkan kami untuk kampanye yang ingin Anda lakukan.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-wrap justify-center gap-4 text-center w-[900px]">
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Lingkungan</h1>
                            <h3 className="text-white">Menjaga kelestarian lingkungan</h3>
                        </div>
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Air Bersih</h1>
                            <h3 className="text-white">Meningkatkan akses air bersih</h3>
                        </div>
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Kesehatan</h1>
                            <h3 className="text-white">Meningkatkan kesadaran</h3>
                        </div>
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Edukasi</h1>
                            <h3 className="text-white">Memberikan pengetahuan</h3>
                        </div>
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Komunitas</h1>
                            <h3 className="text-white">Membangun Komunitas</h3>
                        </div>
                        <div className="w-[200px] p-4 bg-[#0063A7] rounded-lg">
                            <h1 className="text-lg font-bold text-white">Lain-lain</h1>
                            <h3 className="text-white">Berfokus pada akses dan kualitas air bersih</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
