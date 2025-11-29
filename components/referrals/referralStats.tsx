import StatCard from "./statCard";

const ReferralStats = () => {
  return (
    <section
      aria-labelledby="referral-stats-heading"
      className="mt-[18px] mb-[18px]"
    >
      <div className="w-full bg-[#262D3C] border-none pt-7 pb-[31px]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#5832E3]">
          <StatCard value="$ 0.00" label="COMISSION EARNED" />
          <StatCard value="$ 0.00" label="TOTAL CLAIMED" />
          <StatCard value="$ 0.00" label="TOTAL AVAILABLE" />
        </div>
      </div>
    </section>
  );
};

export default ReferralStats;
