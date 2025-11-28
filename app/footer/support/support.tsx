import Link from "next/link";
import { supports } from "./supports";

const Support = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[#FFFFFF] leading-[100%] text-[20px] font-bold mb-[22px]">
        Support
      </p>
      {supports.map((item) => (
        <Link
          key={item.id}
          href={"/"}
          className="manrope_semi_bold font-semibold text-[#B2B6C5] text-[16px] mb-2.5 leading-[100%] cursor-pointer whitespace-nowrap"
        >
          {item.support}
        </Link>
      ))}
    </div>
  );
};

export default Support;
