"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarPages } from "./sidebarPages";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-2.5 w-max">
      {sidebarPages.map((item) => {
        const IconComponent = item.icon;
        const isActive =
          pathname === item.path ||
          (pathname === "/" && item.path === "/referrals");
        return (
          <Link
            href={item.path}
            key={item.id}
            className={`group transition-colors duration-300 ${
              isActive ? "bg-[#88E515]" : "bg-[#212633] hover:bg-[#88E515]"
            }`}
          >
            <Button
              variant="outline"
              className="w-60 h-[60px] flex justify-start !bg-transparent items-center rounded-[1px] border-none cursor-pointer"
            >
              <IconComponent
                className={`ml-4 mr-[19.78px] transition-colors duration-300 ${
                  isActive
                    ? "text-[#1C202B]"
                    : "text-[#F2F2F2] group-hover:text-[#1C202B]"
                }`}
              />
              <span
                className={`transition-colors duration-300 text-[10px] leading-[100%] tracking-[0.11em] font-extrabold uppercase ${
                  isActive
                    ? "text-[#1C202B]"
                    : "text-[#F2F2F2] group-hover:text-[#1C202B]"
                }`}
              >
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
