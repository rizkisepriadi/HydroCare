import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { Button } from "./Button.module";

export default function Navbar() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  return (
    <header className="fixed flex justify-between items-center pl-3 lg:flex-row lg:py-[14px]">
      <img src={Logo} alt="logo" className="size-5  md:size-[42px]" />
      {isLargeScreen ? (
        <div className="flex px-3">
          <div className="navbar-start relative">
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
                className="menu menu-sm md:menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 md:mx-5 md:w-72"
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
                <li
                  className="md:text-base"
                  onClick={() => scroll("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
