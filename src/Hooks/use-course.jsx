import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useCourse = (limit = null) => {
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
  //                 GET ALL COURSES
  // ###########################################

  useEffect(() => {
    dispatch(getAllCourses({limit}));
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
