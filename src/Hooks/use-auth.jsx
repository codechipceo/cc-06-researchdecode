import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  studentLogin,
  studentSignUp,
  selectStudentLoading,
  selectStudentErrorMsg,
  selectStudentIsError,
  selectStudentIsSignUpError,
  selectStudentIsLoggedIn,
  selectStudentToken,
} from "../Features/Slices/studentSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const isLoading = useSelector(selectStudentLoading);
  const isLoggedIn = useSelector(selectStudentIsLoggedIn);
  const studentToken = useSelector(selectStudentToken);
  const isSignUpError = useSelector(selectStudentIsSignUpError);
  const navigate = useNavigate();
  const handleLogin = (data) => {
    dispatch(studentLogin(data)).then(() => {
      navigate("/");
    });
  };
  const handleSignUp = (data) => {
    dispatch(studentSignUp(data)).then(() => {
      navigate("/signin");
    });
  };

  return {
    isLoading,
    errorMessage,
    isError,
    isLoggedIn,
    handleLogin,
    handleSignUp,
    studentToken,
    isSignUpError,
  };
};

export default useAuth;
