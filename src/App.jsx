import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPapers } from "./Pages/SearchPapers/SearchPapers";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SingUp/SignUp";
import ResponsiveAppBar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/search-paper' element={<SearchPapers />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
