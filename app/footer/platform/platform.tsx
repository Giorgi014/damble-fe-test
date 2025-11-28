import Link from "next/link";
import { platforms } from "./platforms";

const Platform = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[#FFFFFF] leading-[100%] text-[20px] font-bold mb-[22px]">
        Platform
      </p>
      {platforms.map((item) => (
        <Link
          key={item.id}
          href={"/"}
          className="manrope_semi_bold font-semibold text-[#B2B6C5] text-[16px] mb-2.5 leading-[100%] cursor-pointer whitespace-nowrap"
        >
          {item.platform}
        </Link>
      ))}
    </div>
  );
};

export default Platform;
