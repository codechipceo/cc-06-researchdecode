import { useSelector } from "react-redux";
import { selectStudentInfo } from "../Features/Slices/studentSlice";

export const IsLoggedin = (userId) => {
  const studentInfo = useSelector(selectStudentInfo);
  if (userId === undefined || userId === null) return false;

  const isLoggedin = studentInfo._id === userId;
  return { isLoggedin };
};
