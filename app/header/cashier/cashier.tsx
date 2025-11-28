import { Button } from "@/components/ui/button";
import Image from "next/image";

const Cashier = () => {
  return (
    <div className="flex justify-between items-center">
      <Button
        variant={"outline"}
        className="manrope_semi_bold font-extrabold text-[13px] leading-[100%] text-[#FFFFFF] rounded-bl-[1px] rounded-tl-[1px] rounded-br-none rounded-tr-none border border-[#363B4B] cursor-pointer"
      >
        <Image
          width={23}
          height={23}
          src={"/img/ethereum.svg"}
          alt="ethereum"
          className="mr-[11px]"
        />
        $ 0.00
        <Image
          width={10}
          height={6.01}
          src={"/img/down-row.svg"}
          alt="down row"
        />
      </Button>
      <Button
        variant={"outline"}
        className="!bg-[#88E515] !text-[#1C202B] text-[12px] font-black leading-[100%] tracking-[0.09em] shadow-[0px_0px_6px_0px_rgba(136,229,21,0.75)] hover:shadow-[0px_0px_12px_0px_rgba(136,229,21,0.9)] rounded-br-[1px] rounded-tr-[1px] rounded-bl-none rounded-tl-none uppercase cursor-pointer"
      >
        <Image width={15} height={15} src={"/img/cashier.svg"} alt="cashier" />
        Cashier
      </Button>
    </div>
  );
};

export default Cashier;
