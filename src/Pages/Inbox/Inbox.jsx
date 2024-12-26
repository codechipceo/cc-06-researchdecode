
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import ChatContainer from "./ChatContainer";
const Inbox = () => {
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <>
      <HeaderThree title="Inbox" breadcrumbPath={breadcrumbPath} />
      <ChatContainer  />
    </>
  );
};

export default Inbox;
