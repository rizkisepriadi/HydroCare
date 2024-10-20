import React from "react";
import CardSlide from "../component/cardSlide.jsx";
import CampaignInfo from "../component/campaignInfo.jsx";
import Footer from "../pageSection/footer.jsx";
import Navbar from "../pageSection/navbar.jsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { Button } from "../component/Button.module.jsx";
import Login from "./login.jsx";
import { CampaignButton } from "../component/Button.module.jsx";

export default function campaigns() {
  const [openlogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { user } = useAuthContext();
  const [isUser, setisUser] = useState({});
  const [isLogin, setisLogin] = useState(false);
  const [campaign, setCampaign] = useState({});

  // Mengambil data kampanye dan informasi pengguna saat komponen dimuat
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

  return (
    <div>
      <Navbar />
      <div className="text-primary">
        <div className="flex flex-col items-stretch lg:h-[500px] lg:flex-row">
          {/* Left Section */}
          <div className="h-[320px] w-full lg:h-full lg:w-[600px] xl:w-[650px] mb-4 lg:mb-0">
            <img
              src={`/image/${campaign.image}.svg`}
              alt="Campaign"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between w-full lg:w-[900px] px-4 mb-6 pb-4 lg:mb-0 lg:pb-0 lg:justify-start flex-grow lg:p-11 xl:p-16 lg:mt-8">
            <div>
              <h1 className="pt-4 text-xl font-bold text-primary md:text-lg xl:text-2xl">
                {campaign.title}
              </h1>
              <p className="mt-2 text-justify break-words whitespace-normal">
                {campaign.desc
                  ? campaign.desc.split(" ").slice(0, 50).join(" ")
                  : "Deskripsi tidak tersedia."}
                {campaign.desc && campaign.desc.split(" ").length > 50 && "..."}
              </p>

              <h2 className="pt-2 text-lg font-semibold">Lokasi</h2>
              <div className="pb-2">
                <p>{campaign.location}</p>
              </div>
              <div className="flex justify-between items-center w-[300px]">
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-bold">Tanggal Mulai</h1>
                  <h2>
                    {campaign.start_date &&
                      new Date(campaign.start_date).toLocaleDateString(
                        "id-ID",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                  </h2>
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h1 className="font-bold">Tanggal Akhir</h1>
                  <h2>
                    {campaign.end_date &&
                      new Date(campaign.end_date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                  </h2>
                </div>
              </div>
            </div>
            <div className="pb-4 lg:pb-0">
              <div className="justify-end card-actions">
                {isLogin ? (
                  <CampaignButton
                    className="bg-white"
                    link={`/campaign/${campaign._id}`}
                  />
                ) : (
                  <Button
                    text={"Login"}
                    className="bg-white shadow-lg text-primary"
                    onClick={() => {
                      setOpenRegister(false);
                      setOpenLogin(true);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
            <div className="flex items-center justify-center">
              {/* Left Section */}
              <div className="rounded-l-xl bg-[#0063A7] flex justify-center items-center text-white w-[250px] lg:w-[550px] p-3 lg:p-6">
                <div className="flex flex-col justify-start">
                  <p className="text-lg font-semibold">Buat Kampanye Sendiri</p>
                  <p className="text-sm text-justify">
                    Ingin Mengajukan Kampanye Kamu Sendiri? Hubungi kami sekarang!
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="rounded-r-xl bg-[#2e7db1] flex justify-center items-center text-white p-3 lg:p-6 h-full">
                <div>
                  <a 
                    href="/contact"
                    className="btn px-6 font-bold text-primary shadow-lg bg-[#EAF3F9] w-[120px] text-center">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
          <CardSlide />
        </div>

        <CampaignInfo />
        <Footer />
      </div>
      {openlogin && <Login isOpen={openlogin} setIsOpen={setOpenLogin} />}
    </div>
  );
}
