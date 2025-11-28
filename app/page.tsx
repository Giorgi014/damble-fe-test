import Footer from "./footer/page";
import Header from "./header/page";
import Main from "./main/page";
import SideBar from "./sidebar/page";

export default function Home() {
  return (
    <>
      <div className="flex justify-start">
        <SideBar />
        <div className="flex-1">
          <Header />
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}
