// import { useSelector, useDispatch } from 'react-redux';
// import { useCallback } from 'react';
// import {
//   getAllCourses,
//   getCourseById,
//   selectCourses,
//   selectCourseById,
//   courseTotalCount,
//   selectCourseLoadingStatus,
//   selectCourseErrorStatus,
//   selectCourseErrorMessage,
// } from '../slices/courseSlice';

// const useCourse = () => {
//   const dispatch = useDispatch();
//   const courses = useSelector(selectCourses);
//   const courseById = useSelector(selectCourseById);
//   const totalCount = useSelector(courseTotalCount);
//   const isLoading = useSelector(selectCourseLoadingStatus);
//   const isError = useSelector(selectCourseErrorStatus);
//   const errorMessage = useSelector(selectCourseErrorMessage);

//   const fetchAllCourses = useCallback((payload) => {
//     dispatch(getAllCourses(payload));
//   }, [dispatch]);

//   const fetchCourseById = useCallback((id) => {
//     dispatch(getCourseById(id));
//   }, [dispatch]);

//   return {
//     courses,
//     courseById,
//     totalCount,
//     isLoading,
//     isError,
//     errorMessage,
//     fetchAllCourses,
//     fetchCourseById,
//   };
// };

// export default useCourse;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useCourse = () => {
  // ###########################################
  //                 STATES
  // ###########################################
  const dispatch = useDispatch();
  const { getAllCourses } = reduxStore.sliceMethods;
  const {
    selectCourses,
    selectCourseById,
    courseTotalCount,
    selectCourseLoadingStatus,
    selectCourseErrorStatus,
  } = reduxStore.states;
  const courseData = useSelector(selectCourses);
  const courseById = useSelector(selectCourseById);
  const courseCount = useSelector(courseTotalCount);
  const isCourseLoading = useSelector(selectCourseLoadingStatus);
  const isCourseError = useSelector(selectCourseErrorStatus);

  // ###########################################
  //                 GET ALL TEACHERS
  // ###########################################

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch, getAllCourses ]);

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################

  return {
    courseData,
    courseById,
    courseCount,
    isCourseLoading,
    isCourseError,
  };
};


























