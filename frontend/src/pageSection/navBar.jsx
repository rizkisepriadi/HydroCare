import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { Button } from "../component/button.module";

export default function Navbar() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      {isLargeScreen ? (
        <header className="w-screen fixed flex justify-between items-center pl-3 pt-3 z-50">
          <img src={Logo} alt="logo" className="size-8" />
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
                className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] p-10 bg-white shadow-md rounded-sm w-screen absolute right-0 md:mx-5 md:w-72"
              >
                <li className="md:text-base" onClick={() => scroll("about")}>
                  About
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
              </ul>
            </div>
          </div>
        </header>
      ) : (
        <header className="fixed flex gap-20 top-0 right-0 left-0 items-center z-50 bg-white mt-10 mx-[8%] rounded-[30px] px-4 py-[10px] shadow-md justify-center">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="size-8" />
            <h1 className="text-primary font-extrabold text-xl lg:text-lg">
              Hydrocare
            </h1>
          </div>
          <ul className="flex gap-[60px] lg:gap-[40px] text-primary text-xl lg:text-lg font-medium">
            <li>Home</li>
            <li>About Us</li>
            <li>Donasi</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-1">
            <Button text={"Sign In"} />
            <Button text={"Login"} className="bg-transparent" />
          </div>
        </header>
      )}
    </div>
  );
}
