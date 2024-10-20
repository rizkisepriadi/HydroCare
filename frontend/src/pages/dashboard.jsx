import React, { useEffect, useState } from "react";
import Tabs from "../component/tabs";
import Logo from "../assets/logo.svg";
import DefaultUser from "../assets/defaultUser.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
  const [isUser, setIsUser] = useState({});
  const { user } = useAuthContext();
  const [imageFile, setImageFile] = useState(null);

  // Mengambil informasi pengguna dari server saat komponen dimuat
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
          setIsUser(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  // Mengunggah gambar profil pengguna ke server
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      axios
        .post(`http://localhost:5000/user/${isUser._id}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setIsUser((prev) => ({
            ...prev,
            image: response.data.image,
          }));
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div className="bg-[#EAF3F9] min-h-screen">
      <div className="text-primary px-[7%] pt-[2%]">
        <div className="flex flex-col justify-center w-full pt-5 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:pr-3">
            <div>
              <a className="flex items-center gap-2" href="/">
                <img src={Logo} alt="logo" className="size-8 xl:size-10" />
                <h1 className="text-xl font-bold text-primary lg:text-lg xl:text-xl">
                  Hydrocare
                </h1>
              </a>
            </div>
            <div className="flex items-center justify-center mt-5 md:flex-col">
              <div className="pr-5 avatar md:pr-0 md:pb-5">
                <div className="rounded-full w-[100px] md:w-[180px] xl:w-[200px]">
                  {/* onClick tambah image */}
                  <img
                    src={
                      isUser.image ||
                      DefaultUser
                    }
                    alt="Profile"
                    onClick={() => document.getElementById("fileInput").click()}
                    className="cursor-pointer"
                  />
                </div>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/jpeg, image/png"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex items-center justify-center text-primary">
                <div className="flex flex-col">
                  <h1 className="text-3xl font-extrabold">{isUser.name}</h1>
                  <p className="text-lg font-medium">{isUser.email}</p>
                </div>
              </div>
            </div>
          </div>
          <Tabs isUser={isUser} />
        </div>
      </div>
    </div>
  );
}
