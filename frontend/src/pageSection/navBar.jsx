import { React, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { Button } from "../component/button.module";
import Login from "../pages/login";
import Register from "../pages/register";

export default function Navbar() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div>
      {isLargeScreen ? (
        <header className="w-screen fixed flex justify-between items-center pt-3 z-50">
          <a href="/">
            <img src={Logo} alt="logo" className="size-8 ml-[7%]" />
          </a>
          <div className="justify-start relative">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] px-10 gap-2 items-center text-primary font-medium bg-white shadow-md rounded-sm w-screen absolute right-0  md:w-72"
              >
                <li className="md:text-base" onClick={() => scroll("about")}>
                  <a href="/campaign">Kampanye</a>
                </li>
                <li className="md:text-base" onClick={() => scroll("tech")}>
                  Tech
                </li>
                <li className="md:text-base" onClick={() => scroll("work")}>
                  Work
                </li>
                <li className="md:text-base" onClick={() => scroll("contact")}>
                  Contact
                </li>
                <div className="flex gap-2">
                  <Button
                    text={"Sign In"}
                    className="w-[85px] h-[20px] text-base"
                    onClick={() => {
                      setLogin(true);
                      setRegister(false);
                    }}
                  />
                  <Button
                    text={"Login"}
                    className="bg-transparent w-[85px] h-[20px] text-bas"
                    onClick={() => {
                      setRegister(true);
                      setLogin(false);
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
            <h1 className="text-primary font-extrabold xl:text-xl lg:text-base">
              Hydrocare
            </h1>
          </a>
          <ul className="flex lg:gap-[30px] xl:gap-16 xl:text-xl text-primary lg:text-base text-xl font-medium items-center">
            <li>Campaign</li>
            <li>Article</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-1">
            <Button
              text={"Sign In"}
              onClick={() => {
                setLogin(true);
                setRegister(false);
              }}
            />
            <Button
              text={"Login"}
              className="bg-transparent"
              onClick={() => {
                setRegister(true);
                setLogin(false);
              }}
            />
          </div>
        </header>
      )}

      {login && <Login isOpen={login} setIsOpen={setLogin} />}
      {register && <Register isOpen={register} setIsOpen={setRegister} />}
    </div>
  );
}
