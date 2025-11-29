import {
  ProfileIcon,
  ReferralsIcon,
  SettingsIcon,
  VerificationIcon,
  TransactionsIcon,
  BetHistoryIcon,
  HistoryIcon,
  GamingIcon,
} from "@/components/icons";

type SidebarPages = {
  id: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  width: number;
  height: number;
};

export const sidebarPages: SidebarPages[] = [
  {
    id: 1,
    label: "Profile",
    icon: ProfileIcon,
    path: "/profile",
    width: 17.53,
    height: 21.92,
  },
  {
    id: 2,
    label: "Referrals",
    icon: ReferralsIcon,
    path: "/referrals",
    width: 17.22,
    height: 17.22,
  },
  {
    id: 3,
    label: "Settings",
    icon: SettingsIcon,
    path: "/settings",
    width: 17.22,
    height: 17.22,
  },
  {
    id: 4,
    label: "Verification",
    icon: VerificationIcon,
    path: "/verification",
    width: 17.22,
    height: 17.22,
  },
  {
    id: 5,
    label: "Transactions",
    icon: TransactionsIcon,
    path: "/transactions",
    width: 17.22,
    height: 12.78,
  },
  {
    id: 6,
    label: "Bet History",
    icon: BetHistoryIcon,
    path: "/bet-history",
    width: 17.22,
    height: 15.5,
  },
  {
    id: 7,
    label: "Login History",
    icon: HistoryIcon,
    path: "/login-history",
    width: 17.22,
    height: 12.07,
  },
  {
    id: 8,
    label: "Responsible Gaming",
    icon: GamingIcon,
    path: "/responsible-gaming",
    width: 17.22,
    height: 17.22,
  },
];
