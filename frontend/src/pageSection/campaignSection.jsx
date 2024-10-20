import React from "react";
import CampaignCard from "../component/campaignCard";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function campaignSection() {
  const { user } = useAuthContext();
  const [isUser, setisUser] = useState({});
  const [isLogin, setisLogin] = useState(false);
  const [campaign, setCampaign] = useState({});

  // Mengambil data kampanye dan informasi pengguna saat komponen dimuat atau ketika objek user berubah
  useEffect(() => {
    axios
      .get(`http://localhost:5000/campaign/6711f9da7c87821737ba1b56`)
      .then((response) => {
        setCampaign(response.data);
      });

    if (user && user.token) {
      const decoded = jwtDecode(user.token);
      axios
        .get(`http://localhost:5000/user/${decoded._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setisUser(response.data);
          setisLogin(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  // Fungsi untuk mengonversi tanggal dari format ISO ke format yang lebih mudah dibaca (DD Bulan YYYY).
  function convertDate(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className="px-[7%]">
      <h1 className="py-10 text-xl font-extrabold text-center text-primary lg:pt-10 xl:pt-20 lg:mb-5 md:text-2xl">
        Ikuti Kampanye
      </h1>
      <div className="flex flex-col items-center">
        <CampaignCard
          title={campaign.title}
          start={convertDate(campaign.start_date)}
          end={convertDate(campaign.end_date)}
          type={campaign.event_type}
          location={campaign.location}
          id={campaign._id}
          image={campaign.image}  
        />
      </div>
    </div>
  );
}
