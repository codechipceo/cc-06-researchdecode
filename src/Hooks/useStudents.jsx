import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudents,
  selectStudentData,
} from "../Features/Slices/studentSlice";

export const useStudents = () => {
  // ###########################################
  //                 STATES
  // ###########################################
  const data = useSelector(selectStudentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);
  return {
    data,
  };
};
