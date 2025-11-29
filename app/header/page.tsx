import Image from "next/image";
import Cashier from "./cashier/page";
import User from "./user/page";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full border-b border-[#F2F2F2]/30 pt-5 pb-5 pl-[60px] pr-[59px]">
      <Image
        width={10}
        height={10}
        src={"/img/logo.svg"}
        alt="Damble logo"
        className="w-[215.98px] h-[30px]"
      />
      <Cashier />
      <User />
    </header>
  );
};

export default Header;
