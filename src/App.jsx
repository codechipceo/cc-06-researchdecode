import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SingUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}