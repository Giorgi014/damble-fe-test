import Image from "next/image";
import Community from "./community/community";
import Legal from "./legal/legal";
import Platform from "./platform/platform";
import Support from "./support/support";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center border-t border-[#F2F2F2]/30 pt-[115px] pb-[187px] pl-[368px] pr-[69px]">
      <article className="flex justify-center items-start w-full max-w-[1463px] pb-[67px] border-b border-[#B2B6C5]/30">
        <Image
          width={10}
          height={10}
          src={"/img/logo.svg"}
          alt={"logo"}
          className="w-56 h-[31.11px] mr-[93.64px] cursor-pointer"
        />
        <section className="flex w-full justify-between items-start">
          <Support />
          <Platform />
          <Legal />
          <Community />
        </section>
        <Button
          variant={"outline"}
          className="flex justify-between items-center w-[204px] h-[50px] font-medium text-[15px] text-[#F2F2F2] leading-[100%] bg-[#212633] rounded-[1px] border-none ml-[113.32px] pt-[15px] pr-[20.14px] pb-4 pl-[41.63px] cursor-pointer"
        >
          English
          <img
            src="/img/down-row.svg"
            alt="down row"
            className="w-[10.49px] h-[7.81px]"
          />
        </Button>
      </article>
      <p className="w-full max-w-[1463px] font-medium text-[16px] text-[#B2B6C5] leading-[100%] manrope_semi_bold text-justify mt-[85px] mb-[82px]">
        Damble is owned and operated by 88bit Limited, Belize company
        registration Number 48974 with its registered address at Sea Urchin
        Street, San Pedro Town, Ambergris Caye, Belize. Damble is licensed and
        regulated by the Government of the Autonomous Island of Anjouan, Union
        of Comoros and operates under License No. 000 Damble has passed all
        regulatory compliance and is legally authorised to conduct gaming
        operations for any and all games of chance and wagering.
      </p>
      <article className="flex justify-between items-center w-full max-w-[1463px]">
        <p className="text-[13px] text-[#B2B6C5] leading-[100%] manrope_semi_bold tracking-[0.02em]">
          1 BTC =$118,764.84
        </p>
        <section className="flex justify-center items-center gap-[33px]">
          <p className="w-[296px] h-[18px] whitespace-nowrap font-medium text-center text-[13px] text-[#B2B6C5] leading-[100%] manrope_semi_bold">
            © 2025 damble.io | All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-[15px]">
            <Image
              width={10}
              height={10}
              src="/img/flag.svg"
              alt="flag"
              className="w-[49px] h-[49px]"
            />
            <Image
              width={10}
              height={10}
              src="/img/eighteen.svg"
              alt="eighteen"
              className="w-[50.47px] h-[50.11px]"
            />
          </div>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
