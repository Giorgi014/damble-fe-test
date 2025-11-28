type ItemsType = {
  id: number;
  src: string;
  title: string;
  icon?: string;
  className: string;
};

export const sidebarItems: ItemsType[] = [
  {
    id: 1,
    src: "/img/casino-games.svg",
    title: "Casino Games",
    icon: "/img/down-row.svg",
    className: "w-[16.83px] h-[15.43px]",
  },
  {
    id: 2,
    src: "/img/sports.svg",
    title: "Sports",
    icon: "/img/down-row.svg",
    className: "w-[17px] h-[17px]",
  },
  {
    id: 3,
    src: "/img/providers.svg",
    title: "Providers",
    className: "w-[17px] h-[17px]",
  },
  {
    id: 4,
    src: "/img/promotion.svg",
    title: "Promotions",
    className: "w-[17px] h-[17px]",
  },
  {
    id: 5,
    src: "/img/user-plus.svg",
    title: "Refer a Friend",
    className: "w-[14px] h-[14px]",
  },
  {
    id: 6,
    src: "/img/vip-club.svg",
    title: "VIP Club",
    className: "w-[15px] h-[15px]",
  },
  {
    id: 7,
    src: "/img/sponsorship.svg",
    title: "Sponsorships",
    icon: "/img/down-row.svg",
    className: "w-[15.03px] h-[13.83px]",
  },
];
