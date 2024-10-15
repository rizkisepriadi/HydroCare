import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('profile'); // Default tab

  return (
    <div className="w-full h-full pt-5 md:pt-0 md:w-9/12">
      {/* Tabs */}
      <div className="flex border-b-2 border-[#0063A7] justify-between font-semibold xl:text-lg">
        <TabButton label="Ganti Profil" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        <TabButton label="Kampanye" isActive={activeTab === 'kampanye'} onClick={() => setActiveTab('kampanye')}/>
        <TabButton label="Akun" isActive={activeTab === 'akun'} onClick={() => setActiveTab('akun')} />
      </div>

      {/* Content */}
      <div className="pt-4">
        {activeTab === 'profile' && <ProfileSection />}
        {activeTab === 'kampanye' && <KampanyeSection />}
        {activeTab === 'akun' && <AkunSection />}
      </div>
    </div>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`p-3 flex-1 ${isActive ? 'border-b-4 border-[#1880C7] font-semibol' : ''} focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ProfileSection() {
  return (
    <div>
      <div className="">
        <label className="font-semibold xl:text-lg">Nama</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
      </div>
      <div className="">
        <label className="font-semibold xl:text-lg">Negara</label>
        <input
          type="text"
          placeholder="Enter Your Country"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
      </div>
      <div className="">
        <label className="font-semibold xl:text-lg">Kota</label>
        <input
          type="text"
          placeholder="Enter Your Country"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
      </div>
      <div className="">
        <label className="font-semibold xl:text-lg">Tanggal Lahir</label>
        <input
          type="text"
          placeholder="Enter Your Country"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
      </div>
      <div className="">
        <label className="font-semibold xl:text-lg">Nomor Telepon</label>
        <input
          type="text"
          placeholder="Enter Your Country"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
      </div>
    </div>
  );
}

function KampanyeSection() {
  return (
    <div>
      <div className="pb-5">
        <h3 className="mb-4 text-xl font-semibold">Sedang Berlangsung</h3>
        <ul className="pl-5 list-disc xl:text-lg">
          <li className="mb-2 xl:text-lg">
            <p className="text-base font-bold xl:text-lg">
            Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
            </p>
            <p className="text-xs font-medium xl:text-base">Selesai: 11 Oct 2024 17:00</p>
          </li>
          <li className="mb-2">
            <p className="text-base font-bold xl:text-lg">
              Cara Untuk Menghemat Energi - HydroCare
            </p>
            <p className="text-xs font-medium xl:text-base">Selesai: 12 Oct 2024 18:00</p>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="mb-4 text-xl font-semibold">Telah Diikuti</h3>
        <ul className="pl-5 list-disc xl:text-lg">
          <li className="mb-2">
            <p className="text-base font-bold xl:text-lg">
            Cara Untuk Melakukan Penghematan Air di Rumah - HydroCare
            </p>
            <p className="text-xs font-medium xl:text-base">Selesai: 11 Oct 2024 17:00</p>
          </li>
          <li className="mb-2">
            <p className="text-base font-bold xl:text-lg">
              Cara Untuk Menghemat Energi - HydroCare
            </p>
            <p className="text-xs font-medium xl:text-base">Selesai: 12 Oct 2024 18:00</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function AkunSection() {
  return (
    <div className="">
      <div className="p-2 border rounded-xl border-[#0063A7]">
        <h1 className="text-xl font-bold">Ganti Password</h1>
        <input
          type="password"
          placeholder="Masukkan password lama"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Masukkan password baru"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
        
        {/* Button */}
        <div className="flex justify-end">
          <button className="px-4 py-2 transition bg-[#CFE3EE] rounded-full shadow-md hover:bg-[#2E8EC3] hover:text-white focus:outline-none font-bold">
            Ganti
          </button>
        </div>
      </div>
      
      
      {/* Keluar Akun */}
      <div className="mt-4">
        <button href="/" className="px-4 py-2 font-semibold text-white transition bg-red-500 rounded-full shadow-md xl:text-lg hover:bg-red-400 hover:text-red-200 focus:outline-none">Keluar Akun</button>
      </div>
    </div>
  );
}

export default Tabs;
