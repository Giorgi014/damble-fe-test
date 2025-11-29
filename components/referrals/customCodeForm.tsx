import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CustomCodeForm = () => {
  return (
    <section aria-labelledby="custom-code-heading">
      <h2
        id="custom-code-heading"
        className="text-[15px] tracking-[0.11em] leading-[100%] text-[#F2F2F2] mt-[29px] mb-[19px]"
      >
        SET CUSTOM REFERRALS CODE
      </h2>

      <form
        className="flex flex-col md:flex-row items-stretch md:items-center"
        aria-label="Set custom referral code"
      >
        <div className="w-full h-[60px] flex-1 bg-[#262D3C] border-none flex justify-between items-center">
          <Input
            id="referral-code"
            name="referral-code"
            placeholder="Set referral code..."
            className="w-full h-full border-none rounded-[1px] pt-[23px] pr-[26px] pb-[23px] pl-[26px] bg-transparent text-[#F2F2F2] placeholder:text-[#8E97A9] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button
          type="submit"
          className="w-[122px] h-[60px] bg-[#88E515] text-[#050816] rounded-none font-semibold tracking-[0.11em] text-[12px] leading-[100%] hover:bg-[#9fff29] cursor-pointer"
        >
          SET CODE
        </Button>
      </form>
    </section>
  );
};

export default CustomCodeForm;
