import Referrals from "./referrals/page";
import Sidebar from "./sidebar/page";

const Main = () => {
  return (
    <main className="flex p-[60px] w-full">
      <Sidebar />
      <Referrals />
    </main>
  );
};

export default Main;
