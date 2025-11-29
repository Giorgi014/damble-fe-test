import Link from "next/link";
import { sidebarPages } from "./sidebarPages";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2.5 w-max">
      {sidebarPages.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            href={item.path}
            key={item.id}
            className="group bg-[#212633] hover:bg-[#88E515] transition-colors duration-300"
          >
            <Button
              variant="outline"
              className="w-60 h-[60px] flex justify-start !bg-transparent items-center rounded-[1px] border-none cursor-pointer"
            >
              <IconComponent className="ml-[16px] mr-[19.78px] text-[#F2F2F2] group-hover:text-[#1C202B] transition-colors duration-300" />
              <span className="text-[#F2F2F2] group-hover:text-[#1C202B] transition-colors duration-300 text-[10px] leading-[100%] tracking-[0.11em] font-extrabold uppercase">
                {item.label}
              </span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
