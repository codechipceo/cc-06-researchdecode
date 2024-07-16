import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Components/DefaultLayout/DefaultLayout";
import PDFviewer from "./Components/PDFviewer/PDFviewer";
import { selectStudentToken } from "./Features/Slices/studentSlice";
import { useCourse } from "./Hooks/use-course";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import Courses from "./Pages/Courses/Courses";
import Experts from "./Pages/Experts/Experts";
import { Home } from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import LecturePage from "./Pages/LecturePage/LecturePage"; // Import LecturePage
import PaymentPage from "./Pages/Payment/PaymentPage"; // Import PaymentPage
import { PendingRequestDetail } from "./Pages/SearchPapers/PendingRequestDetail";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";
import { SignIn, SignUp } from "./Pages/indexPages";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Request from "./Pages/Requests/Request";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/testpdf'
            element={
              <PDFviewer
              // file={"https://morth.nic.in/sites/default/files/dd12-13_0.pdf"}
              />
            }
          />
          <Route path='/' element={<GuardComponents component={Home} />} />

          {/*
          ##############################
          SIGN UP / SIGN IN
          */}
          <Route
            path='/signin'
            element={<GuardComponents component={SignIn} />}
          />
          <Route path='/signup' element={<SignUp />} />

          {/*
          ##############################
          PAPER REQUEST
          */}
          <Route
            path='/searchPaper'
            element={<GuardComponents component={SearchPapers} />}
          />
          <Route
            path='/pending-request/:pendingRequestId'
            element={<GuardComponents component={PendingRequestDetail} />}
          />

          {/*
          ##############################
          COURSE
          */}
          <Route
            path='/courses'
            element={<GuardComponents component={Courses} />}
          />
          <Route
            path='/course/:courseId'
            element={<GuardComponents component={CourseDetail} />}
          />
          <Route
            path='/course/:courseId/lectures/:lectureId'
            element={<GuardComponents component={LecturePage} />}
          />
          <Route
            path='/experts'
            element={<GuardComponents component={Experts} />}
          />
          <Route
            path='/inbox'
            element={<GuardComponents component={Inbox} />}
          />
          <Route
            path='/inbox/:userId'
            element={<GuardComponents component={Inbox} />}
          />
          <Route
            path='/payment/:courseId'
            element={<GuardComponents component={PaymentPage} />}
          />
          <Route
            path='/requests'
            element={<GuardComponents component={Request} />}
          />
        </Routes>
      </BrowserRouter>
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
