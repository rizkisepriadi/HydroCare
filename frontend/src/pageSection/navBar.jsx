import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { Button } from "../component/Button.module";
import Login from "../pages/login";
import Register from "../pages/register";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import DefaultUser from "../assets/defaultUser.svg";

export default function Navbar() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const [openlogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [isUser, setisUser] = useState({});
  const [isLogin, setisLogin] = useState(false);
  const { user } = useAuthContext();

  // Mengambil data pengguna saat komponen dimuat
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
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  return (
    <div>
      {isLargeScreen ? (
        <header className="fixed z-50 flex items-center justify-between w-screen pt-3">
          <a href="/">
            <img src={Logo} alt="logo" className="size-8 ml-[7%] mr-4" />
          </a>
          <div className="relative justify-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-4 btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] px-10 gap-3 items-center text-primary font-medium bg-white shadow-md rounded-sm w-screen absolute right-0  md:w-72"
              >
                <li className="cursor-pointer">
                  <a href="/">Home</a>
                </li>
                <li className="cursor-pointer">
                  <a href="/campaigns">Kampanye</a>
                </li>
                <li className="cursor-pointer">
                  <a href="/articles">Artikel</a>
                </li>
                <li className="cursor-pointe">
                  <a href="/contact">Kontak</a>
                </li>
                <div className="flex gap-2">
                  <Button
                    text={"Sign In"}
                    className="w-[85px] h-[20px] text-base"
                    onClick={() => {
                      setOpenLogin(false);
                      setOpenRegister(true);
                    }}
                  />
                  <Button
                    text={"Login"}
                    className="bg-transparent w-[85px] h-[20px] text-base"
                    onClick={() => {
                      setOpenRegister(false);
                      setOpenLogin(true);
                    }}
                  />
                </div>
              </ul>
            </div>
          </div>
        </header>
      ) : (
        <header className="fixed flex  top-0 right-0 left-0 items-center z-50 bg-white mt-10 mx-[8%] rounded-[30px] px-4 lg:py-1 xl:py-[5px] shadow-md justify-around">
          <a href="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="size-8" />
            <h1 className="font-extrabold text-primary xl:text-xl lg:text-base">
              Hydrocare
            </h1>
          </a>
          <ul className="flex lg:gap-[30px] xl:gap-16 xl:text-xl text-primary lg:text-base font-medium items-center gap-3">
            <li className="cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="/campaigns">Kampanye</a>
            </li>
            <li className="cursor-pointer">
              <a href="/articles">Artikel</a>
            </li>
            <li className="cursor-pointer">
              <a href="/contact">Kontak</a>
            </li>
          </ul>
          {isLogin ? (
            <a className="flex items-center gap-2" href="/dashboard">
              <img
                src={DefaultUser}
                className="rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]"
              />
              <div className="flex flex-col text-primary">
                <h1 className="text-sm font-bold xl:text-lg">{isUser.name}</h1>
                <p className="text-xs font-medium xl:text-sm">{isUser.email}</p>
              </div>
            </a>
          ) : (
            <div className="flex gap-1 md:py-1">
              <Button
                text={"Sign In"}
                onClick={() => {
                  setOpenLogin(false);
                  setOpenRegister(true);
                }}
              />
              <Button
                text={"Login"}
                className="bg-transparent"
                onClick={() => {
                  setOpenRegister(false);
                  setOpenLogin(true);
                }}
              />
            </div>
          )}
        </header>
      )}

      {openlogin && <Login isOpen={openlogin} setIsOpen={setOpenLogin} />}
      {openRegister && (
        <Register isOpen={openRegister} setIsOpen={setOpenRegister} />
      )}
    </div>
  );
}
