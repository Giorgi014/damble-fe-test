import { Button } from "../ui/button";

const ReferralTabs = () => {
  return (
    <nav aria-label="Referral navigation" className="flex">
      <Button
        type="button"
        variant="ghost"
        role="tab"
        aria-selected="true"
        className="w-[190px] h-[60px] rounded-[1px] bg-[#88E515] text-[#1C202B] font-semibold tracking-[0.11em] text-[12px] uppercase leading-[100%] cursor-pointer"
      >
        REFERRALS
      </Button>
      <Button
        type="button"
        variant="ghost"
        role="tab"
        aria-selected="false"
        className="w-[190px] h-[60px] rounded-[1px] bg-transparent text-[#F2F2F2] border border-[#262D3C] font-semibold tracking-[0.11em] text-[12px] uppercase leading-[100%] cursor-pointer"
      >
        REFERRED USERS
      </Button>
    </nav>
  );
};

export default ReferralTabs;
