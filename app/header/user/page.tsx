import { Button } from "@/components/ui/button";
import Image from "next/image";

const User = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        width={10}
        height={10}
        src={"/img/present.svg"}
        alt="present"
        className="mr-[21px] cursor-pointer w-[21px] h-[18.67px]"
      />
      <Image
        width={23.33}
        height={23.33}
        src={"/img/union.svg"}
        alt="message"
        className="cursor-pointer"
      />
      <Image
        width={50}
        height={50}
        src={"/img/profile-icon.svg"}
        alt="profile"
        className="mr-4 ml-3 cursor-pointer"
      />
      <Button
        variant={"outline"}
        className="flex gap-2 text-[#FFFFFF] text-[16px] leading-[100%] tracking-[0.09em] !bg-transparent border-none rounded-none cursor-pointer"
      >
        <Image
          width={10}
          height={10}
          src={"/img/user-icon.svg"}
          alt="user"
          className="w-[21px] h-6 cursor-pointer"
        />
        Username
        <Image
          width={13}
          height={7.81}
          src={"/img/down-row.svg"}
          alt="down row"
          className="cursor-pointer"
        />
      </Button>
    </div>
  );
};

export default User;
