import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Components/DefaultLayout/DefaultLayout";
import { Home } from "./Pages/Home/Home";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";
import {  SignIn, SignUp } from "./Pages/indexPages";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Courses from "./Pages/Courses/Courses";
import Experts from "./Pages/Experts/Experts";
import Inbox from "./Pages/Inbox/Inbox";

export default function App() {
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

function GuardComponents({ component: Component }) {
  // const token = useSelector(selectAdminToken);

  // // if (!token) {
  // //   return <Login />;
  // // }

  // // condition
  // const rest = {
  //   token: token,
  //   userRole: "ADMIN",
  // };

  return (
    <DefaultLayout>
      <Component />
    </DefaultLayout>
  );
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
