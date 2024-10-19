import React, { useState, useEffect } from "react";
import { ProfileSection } from "./dashboard.module";
import { KampanyeSection } from "./dashboard.module";
import { AkunSection } from "./dashboard.module";

function Tabs({ isUser }) {
  const [activeTab, setActiveTab] = useState("profile"); // Default tab

  return (
    <div className="w-full h-full pt-5 md:pt-0 md:w-9/12">
      {/* Tabs */}
      <div className="flex border-b-2 border-[#0063A7] justify-between font-semibold xl:text-lg">
        <TabButton
          label="Ganti Profil"
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
        <TabButton
          label="Kampanye"
          isActive={activeTab === "kampanye"}
          onClick={() => setActiveTab("kampanye")}
        />
        <TabButton
          label="Akun"
          isActive={activeTab === "akun"}
          onClick={() => setActiveTab("akun")}
        />
      </div>

      {/* Content */}
      <div className="pt-4">
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "kampanye" && <KampanyeSection />}
        {activeTab === "akun" && <AkunSection />}
      </div>
    </div>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`p-3 flex-1 ${
        isActive ? "border-b-4 border-[#1880C7] font-semibold" : ""
      } focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Tabs;
