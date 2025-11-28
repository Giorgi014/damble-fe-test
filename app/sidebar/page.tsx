"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SidebarMenu from "./sidebarMenu/sidebarMenu";
import GetCrypto from "./getCrypto/getCrypto";
import Partners from "./partners/payments";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      //  fixed
      className={`bg-[#212633] border-r border-[#F2F2F2]/30 z-[99] overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "w-[78px]" : "w-[299px]"
      }`}
    >
      <div
        className={` pt-[25px] pb-[25px] ${
          isOpen ? "pl-2 pr-2" : "pl-[29px] pr-[29px]"
        }`}
      >
        <section className="flex justify-center items-center gap-[13px] mb-[25px]">
          <img
            src="/img/burger-menu.svg"
            alt="burger menu"
            className="w-5 h-[15px] cursor-pointer"
            onClick={handleSidebar}
          />
          <div
            className={`flex justify-start items-center gap-2 transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen
                ? "max-w-0 opacity-0 pointer-events-none"
                : "max-w-[220px] opacity-100"
            }`}
          >
            <Button
              variant="outline"
              className="w-[100px] h-10 text-center !bg-transparent border border-[#434C5F] rounded-[1px] font-extrabold text-[12px] uppercase leading-[100%] tracking-[0.09em] text-[#F2F2F2] cursor-pointer whitespace-nowrap"
            >
              Casino
            </Button>

            <Button
              variant="outline"
              className="w-[100px] h-10 text-center !bg-transparent border border-[#434C5F] rounded-[1px] font-extrabold text-[12px] uppercase leading-[100%] tracking-[0.09em] text-[#F2F2F2] cursor-pointer whitespace-nowrap"
            >
              Sports
            </Button>
          </div>
        </section>
        <section className="flex justify-start items-center w-full h-[50px] border-[0.5px] bg-[#1C202B] border-[#5832E3] relative mb-2.5">
          <img
            src="/img/search.svg"
            alt="search"
            className={`w-5 h-5 absolute cursor-pointer ${
              isOpen ? "left-1/2 -translate-x-1/2" : "left-5"
            }`}
          />
          <Input
            placeholder="SEARCH"
            className={`w-full h-full border-0 rounded-none !bg-transparent focus-visible:ring-0 focus-visible:border-0 font-extrabold text-[12px] tracking-[0.09em] leading-[100%] placeholder:text-[#434C5F] transition-all duration-500 ease-in-out ${
              isOpen
                ? "pl-[59.09px] pr-3 max-w-0 opacity-0 pointer-events-none"
                : "pl-[59.09px] pr-3 opacity-100"
            }`}
          />
        </section>
        <SidebarMenu isOpen={isOpen} />
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-0 opacity-0 pointer-events-none"
              : "max-h-[1000px] opacity-100"
          }`}
        >
          <GetCrypto />
          <Partners />
        </div>
      </div>
    </article>
  );
};

export default SideBar;
