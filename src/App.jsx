import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./App.css";
import { DefaultLayout } from "./Components/DefaultLayout/DefaultLayout";
import PDFviewer from "./Components/PDFviewer/PDFviewer";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { selectStudentToken } from "./Features/Slices/studentSlice";
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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoCall from "./Pages/WebRTC/WebRTC";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuardComponents component={Home} />,
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
  {
    path: "/searchPaper",
    element: <GuardComponents component={SearchPapers} />,
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
    path: "/supervisor/:supervisorId",
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
    path: "/videocall",
    element:<VideoCall />
  }
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
  if (!token) {
    return <SignIn />;
  }

  return (
    <DefaultLayout>
      <ScrollTop>
        <Component {...rest} token={token} />
      </ScrollTop>
    </DefaultLayout>
  );
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
