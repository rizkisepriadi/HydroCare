import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Button } from "../component/Button.module";
import Login from "../pages/login.jsx";
import { CampaignButton } from "../component/Button.module";

export default function CardSlide() {
  const { user } = useAuthContext();
  const [isUser, setIsUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [campaign, setCampaign] = useState([]);
  const [openlogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/campaign`)
      .then((response) => {
        setCampaign(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching campaign:", err);
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
          setIsUser(response.data);
          setIsLogin(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  return (
    <div className="bg-[#EAF3F9] px-[10%] pt-3 pb-4">
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="mb-4 text-xl font-bold lg:text-2xl xl:text-3xl md:mb-6">
          Kampanye Lainnya
        </h1>
        <p className="mb-6 text-center md:mb-8">
          Temukan Beragam Kampanye Inspiratif untuk Mendukung Perubahan
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => {
            const scrollContainer = document.getElementById("scroll-container");
            scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
          }}
          className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-[#0063A7] rounded-full shadow-md top-1/2 text-white"
        >
          &lt;
        </button>

        <div
          id="scroll-container"
          className="flex mx-10 space-x-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {campaign.map((item) => (
            <div
              key={item._id}
              className="min-w-full md:min-w-[300px] xl:min-w-[400px] snap-start bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={`/image/${item.image}.svg`}
                alt={item.title}
                className="object-cover w-full h-48 mb-2 rounded-lg"
              />

              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold max-w-[200px] max-h-[40px]">
                  {item.location}
                </p>
                <h1 className="text-right">{item.event_type}</h1>
              </div>

              <div className="h-20 mb-3 overflow-hidden">
                <div className="flex flex-col">
                  <p className="break-words whitespace-normal">
                    {item.desc.split(" ").slice(0, 10).join(" ")}
                    {item.desc.split(" ").length > 10 && "..."}
                  </p>
                  <span className="font-semibold">
                    <p>Baca Selengkapnya</p>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <h1 className="font-bold text-center">Tanggal Akhir</h1>
                <h2>
                  {item.end_date &&
                    new Date(item.end_date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </h2>
              </div>

              <div className="flex items-center justify-end mt-4">
                <a>
                  {isLogin ? (
                    <CampaignButton
                      className="font-bold border-solid bg-transparent btn rounded-xl border-primary text-primary w-full"
                      link={`/campaign/${item._id}`}
                    />
                  ) : (
                    <Button
                      text={"Login"}
                      className="font-bold border-solid bg-transparent btn rounded-xl border-primary text-primary w-[48%]"
                      onClick={() => {
                        setOpenRegister(false);
                        setOpenLogin(true);
                      }}
                    />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            const scrollContainer = document.getElementById("scroll-container");
            scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
          }}
          className="absolute right-0 z-10 p-2 transform -translate-y-1/2 rounded-full shadow-md bg-[#0063A7] top-1/2 text-white"
        >
          &gt;
        </button>
        {openlogin && <Login isOpen={openlogin} setIsOpen={setOpenLogin} />}
      </div>
    </div>
  );
}
