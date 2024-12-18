import "rsuite/dist/rsuite.min.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./App.css";
import { DefaultLayout } from "./Components/DefaultLayout/DefaultLayout";
import PDFviewer from "./Components/PDFviewer/PDFviewer";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import {
  selectStudentInfo,
  selectStudentToken,
} from "./Features/Slices/studentSlice";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Courses from "./Pages/Courses/Courses";
import Experts from "./Pages/Experts/Experts";
import { SuperVisorDetail } from "./Pages/Experts/SuperVisorDetail";
import { Home } from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import LecturePage from "./Pages/LecturePage/LecturePage"; // Import LecturePage
import PaymentPage from "./Pages/Payment/PaymentPage"; // Import PaymentPage
import Request from "./Pages/Requests/Request";
import { PendingRequestDetail } from "./Pages/SearchPapers/PendingRequestDetail";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";
import { SignIn, SignUp } from "./Pages/indexPages";
import ResearchPaper from "./Pages/ResearchPapers/ResearchPaper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoCall from "./Pages/WebRTC/WebRTC";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Collaboration from "./Pages/Collaboation/Collaboration";
import MyCollaborations from "./Pages/Collaboation/MyCollaborations";

import CourseLecture from "./Pages/CourseLecture/CourseLecture";

import Supervisorform from "./Pages/Supervisorform/Supervisorform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PropProvider component={LandingPage} />,
  },
  {
    path: "/collaboration",
    element: <Collaboration />,
  },
  {
    path: "/my-collaborations",
    element: <MyCollaborations />,
  },
  {
    path: "/testpdf",
    element: <PDFviewer />,
  },
  {
    path: "/signin",
    element: <GuardComponents component={SignIn} />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  // {
  //   path: "/searchPaper",
  //   element: <GuardComponents component={SearchPapers} />,
  // },
  {
    path: "/searchPaper",
    element: <PropProvider component={ResearchPaper} />,
  },
  {
    path: "/pending-request/:pendingRequestId",
    element: <GuardComponents component={PendingRequestDetail} />,
  },
  {
    path: "/my-requests",
    element: <GuardComponents component={Request} />,
  },
  {
    path: "/courses",
    element: <GuardComponents component={Courses} />,
  },
  {
    path: "/course/:courseId",
    element: <GuardComponents component={CourseDetail} />,
  },
  {
    path: "/course/:courseId/lectures/:lectureId",
    element: <GuardComponents component={LecturePage} />,
  },
  {
    path: "/experts",
    element: <GuardComponents component={Experts} />,
  },
  {
    path: "/supervisor",
    element: <GuardComponents component={Experts} />,
  },
  {
    path: "/supervisor/:supervisorCardId",
    element: <GuardComponents component={SuperVisorDetail} />,
  },
  {
    path: "/inbox",
    element: <GuardComponents component={Inbox} />,
  },
  {
    path: "/inbox/:supervisorId",
    element: <GuardComponents component={Inbox} />,
  },
  {
    path: "/payment/:courseId",
    element: <GuardComponents component={PaymentPage} />,
  },
  {
    path: "/consultancyCard/:consultancyCardId/videocall/:peerId",
    element: <VideoCall />,
  },
  {
    path: "/course-lecture/:courseId",
    element: <CourseLecture />,
  },
  {
    path: "/supervisorform",
    element: <Supervisorform />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

function GuardComponents({ component: Component, ...rest }) {
  const token = useSelector(selectStudentToken);
  const studentInfo = useSelector(selectStudentInfo);
  if (!token) {
    return <SignIn />;
  }

  return (
    <DefaultLayout>
      <ScrollTop>
        <Component {...rest} token={token} studentInfo={studentInfo} />
      </ScrollTop>
    </DefaultLayout>
  );
}

function PropProvider({ component: Component, ...rest }) {
  const studentInfo = useSelector(selectStudentInfo);

  return (
    <DefaultLayout>
      <ScrollTop>
        <Component {...rest} studentInfo={studentInfo} />
      </ScrollTop>
    </DefaultLayout>
  );
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
