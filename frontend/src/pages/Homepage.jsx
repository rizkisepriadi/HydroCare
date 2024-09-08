import React from 'react'
import Navbar from '../component/Navbar.jsx'

export default function Homepage() {
  return (
    <main className="bg-teal-400">
      <Navbar />
        
      <section  className= "bg-[url('/src/assets/HOME.png')] bg-cover bg-center h-screen flex items-center justify-center"> {/* section 1 */}
        <div className=""> {/* container */}
          <div className="flex items-center justify-center pb-5">
            <p className='text-center text-xl text-[#0063A7] font-medium text-shadow-custom'>Bersama Menciptakan Dunia Dengan Air Bersih</p>
          </div>
          <div className="flex items-center justify-center pb-5">
            <div className="flex items-center justify-center">
              <h1 className='text-center text-8xl tracking-[0.2em] font-extrabold text-[#0063A7] text-shadow-custom'>HydroCare</h1>
            </div>
          </div>
          <div className="flex items-center justify-center pb-5"> 
            <p className='text-center text-xl text-[#0063A7] font-medium text-shadow-custom'>Kita Ubah Setiap Tetes Air Menjadi Harapan Baru <br></br> Bagi Mereka yang Kesulitan Mendapatkan Air Bersih.Mari Bergerak untuk<br></br> Masa Depan yang Lebih Baik.</p>
          </div>
        </div>
      </section>


    </main>
  )
}