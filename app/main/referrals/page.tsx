import CustomCodeForm from "@/components/referrals/customCodeForm";
import ReferralFooter from "@/components/referrals/referralFooter";
import ReferralStats from "@/components/referrals/referralStats";
import ReferralTable from "@/components/referrals/referralTable";
import ReferralTabs from "@/components/referrals/referralTabs";

type ReferralRow = {
  code: string;
  claimed: string;
  refs: number;
  percent: string;
  wagered: string;
};

const Referrals = () => {
  const mockData: ReferralRow[] = [
    {
      code: "Example",
      claimed: "$0.00",
      refs: 0,
      percent: "10%",
      wagered: "$0.00",
    },
  ];

  return (
    <main
      className="w-full max-w-[1231px] bg-[#212633] text-white p-[30px] ml-[30px]"
      aria-labelledby="referrals-title"
    >
      <header>
        <ReferralTabs />
      </header>
      <CustomCodeForm />
      <ReferralStats />
      <ReferralTable data={mockData} />
      <ReferralFooter />
    </main>
  );
};

export default Referrals;
