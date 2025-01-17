import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useCourse = (limit , skip  ,search , authToken) => {
  // ###########################################
  //                 STATES
  // ###########################################
  
  console.log(search)
  const throttleTimeout = useRef(null);
  const dispatch = useDispatch();
  const { getAllCourses } = reduxStore.sliceMethods;
  const { getUserCourses } = reduxStore.sliceMethods;
  const {
    selectCourses,
    selectUserCourses,
    selectCourseById,
    courseTotalCount,
    selectCourseLoadingStatus,
    selectCourseErrorStatus,
  } = reduxStore.states;
  
  const courseData = useSelector(selectCourses);
  const courseById = useSelector(selectCourseById);
  const courseOfUser = useSelector(selectUserCourses);
  const courseCount = useSelector(courseTotalCount);
  const isCourseLoading = useSelector(selectCourseLoadingStatus);
  const isCourseError = useSelector(selectCourseErrorStatus);

  // ###########################################
  //                 GET ALL COURSES
  // ###########################################
  useEffect(() => {
    
      // Clear any existing timeout to throttle requests
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    
      // Set a new timeout to dispatch the action
      throttleTimeout.current = setTimeout(() => {
        dispatch(getAllCourses({ limit, skip, search }));
      }, 300); // Adjust delay as needed (300ms is a common throttle time)

      throttleTimeout.current = setTimeout(() => {
        dispatch(getUserCourses({ authToken}));
      }, 300); // Adjust delay as needed (300ms is a common throttle time)
    
      // Cleanup timeout on unmount or when dependencies change
      return () => {
        if (throttleTimeout.current) {
          clearTimeout(throttleTimeout.current);
        }
      };
    }, [limit, skip, search, dispatch]);
  

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################
  return {
    courseData,
    courseById,
    courseOfUser,
    courseCount,
    isCourseLoading,
    isCourseError,
  };
};

