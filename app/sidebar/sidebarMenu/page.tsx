import { Button } from "@/components/ui/button";
import { sidebarItems } from "./sidebarItem";
import Image from "next/image";

type SidebarMenuProps = {
  isOpen: boolean;
};

const SidebarMenu = ({ isOpen }: SidebarMenuProps) => {
  return (
    <section className={`flex flex-col w-full ${isOpen ? "items-center" : ""}`}>
      {sidebarItems.map((item) => (
        <Button
          key={item.id}
          className={`h-[60px] flex items-center mb-2.5 rounded-none bg-[#1C202B] hover:bg-[#272C38] text-[#F2F2F2] font-extrabold text-[10px] uppercase leading-[100%] tracking-[0.11em] cursor-pointer transition-all duration-500 ease-in-out ${
            isOpen
              ? "w-[60px] justify-center pl-0 pr-0"
              : "w-full max-w-[260px] justify-between pl-[19.09px] pr-[18.18px]"
          }`}
        >
          <div
            className={`flex items-center transition-all duration-500 ease-in-out ${
              isOpen ? "justify-center gap-0" : "justify-center gap-[23px]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={10}
              height={10}
              className={item.className}
            />
            <p
              className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
                isOpen
                  ? "max-w-0 opacity-0 pointer-events-none"
                  : "max-w-[200px] opacity-100"
              }`}
            >
              {item.title}
            </p>
          </div>
          {item.icon && (
            <img
              src={item.icon}
              alt={item.title}
              className={`w-[11.82px] h-[7.81px] transition-all duration-500 ease-in-out ${
                isOpen
                  ? "max-w-0 opacity-0 pointer-events-none absolute"
                  : "opacity-100"
              }`}
            />
          )}
        </Button>
      ))}
    </section>
  );
};

export default SidebarMenu;
