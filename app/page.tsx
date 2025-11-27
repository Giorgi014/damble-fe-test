import Footer from "./footer/page";
import Header from "./header/page";
import Main from "./main/page";
import SideBar from "./sidebar/page";

export default function Home() {
  return (
    <div>
      <SideBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
