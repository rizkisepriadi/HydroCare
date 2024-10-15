import React from 'react';
import Tabs from '../component/tabs';
import Logo from "../assets/logo.svg";


export default function Dashboard() {
  return (
    <div className="bg-[#EAF3F9] min-h-screen">
      <div className="text-primary px-[10%] pt-[5%]">
        
        <div className="flex flex-col justify-center w-full pt-5 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:pr-3">
            <div>
              <a href="">
                <div className="flex items-center gap-2">
                  <img src={Logo} alt="logo" className="size-8 xl:size-10" />
                  <h1 className="text-xl font-bold text-primary lg:text-lg xl:text-xl">
                    Hydrocare
                  </h1>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center md:flex-col">
              <div className="pr-5 avatar md:pr-0 md:pb-5">
                <div className="rounded-full w-[100px] md:w-[180px] xl:w-[200px]">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="flex items-center justify-center text-primary">
                <div className="flex flex-col">
                  <h1 className="text-xl font-extrabold">Jenny Wilson</h1>
                  <p className="text-xs font-medium">jennywildodo01@gmail.com</p>
                </div>
              </div>
              
            </div>
            
          </div>
          
          <Tabs />
        </div>
      </div>
      
    </div>
  );
}
