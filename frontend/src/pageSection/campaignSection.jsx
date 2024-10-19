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
  
  useEffect(() => {
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
          axios
            .get(`http://localhost:5000/campaign/6711f9da7c87821737ba1b56`, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
            .then((response) => {
              setCampaign(response.data);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  function convertDate(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    
    return `${day} ${month} ${year}`;
  }
  
  return (
    <div className="px-[7%]">
      <h1 className="text-primary text-xl font-extrabold text-center lg:pt-10 xl:pt-20 lg:mb-5 py-10 md:text-2xl">
        Ikuti Kampanye
      </h1>
      <div className="flex flex-col items-center">
        <CampaignCard title={campaign.title} start={convertDate(campaign.start_date)} end={convertDate(campaign.end_date)} type={campaign.event_type} location={campaign.location} id={campaign._id} />
      </div>
    </div>
  );
}
