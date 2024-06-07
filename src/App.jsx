import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useResponsive } from "./Hooks/use-responsive";
import {  SignIn, SignUp } from "./Pages/indexPages";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";

function App() {
  const deviceType = useResponsive();
  // const token = useSelector(selectAdminToken) ?? "Token";
  // const drawerWidth = token ? 240 : 0;

  return (
    <>
      <BrowserRouter>
       <Routes>
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
             
            
            </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;

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

  return <Component  />;
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
