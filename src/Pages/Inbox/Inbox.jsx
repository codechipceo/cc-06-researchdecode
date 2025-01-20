
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import Footer from "../LandingPage/Section/Footer";
import ChatContainer from "./ChatContainer";
const Inbox = () => {
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <>
      <HeaderThree title="Inbox" breadcrumbPath={breadcrumbPath} />
      <ChatContainer  />
      <Footer/>
    </>
  );
};

export default Inbox;
