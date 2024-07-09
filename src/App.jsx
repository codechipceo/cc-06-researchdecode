
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Components/DefaultLayout/DefaultLayout";
import { selectStudentToken } from "./Features/Slices/studentSlice";
import Courses from "./Pages/Courses/Courses";
import Experts from "./Pages/Experts/Experts";
import { Home } from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";
import { SignIn, SignUp } from "./Pages/indexPages";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import { useCourse } from "./Hooks/use-course";

export default function App() {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GuardComponents component={Home} />} />
          <Route
            path='/signin'
            element={<GuardComponents component={SignIn} />}
          />
          <Route
            path='/signup'
            element={<GuardComponents component={SignUp} />}
          />
          <Route
            path='/searchPaper'
            element={<GuardComponents component={SearchPapers} />}
          />
          <Route
            path='/courses'
            element={<GuardComponents component={Courses} />}
          />
          <Route
            path="/course/:courseId"
            element={<GuardComponents component={(props) => <CourseDetail {...props} courses={courses} />} />}
          />
          <Route
            path='/experts'
            element={<GuardComponents component={Experts} />}
          />
          <Route
            path='/inbox/:userId'
            element={<GuardComponents component={Inbox} />}
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
      <Component {...rest} token={token} />
    </DefaultLayout>
  );
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};