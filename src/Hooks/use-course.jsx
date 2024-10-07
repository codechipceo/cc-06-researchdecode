import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useCourse = (userId = null) => {
  // ###########################################
  //                 STATES
  // ###########################################
  const dispatch = useDispatch();
  const { getAllCourses, getUserCourses } = reduxStore.sliceMethods;
  const {
    selectCourses,
    selectCourseById,
    courseTotalCount,
    selectCourseLoadingStatus,
    selectCourseErrorStatus,
    selectUserCourses,
  } = reduxStore.states;
  const courseData = useSelector(selectCourses);
  const userCourses = useSelector(selectUserCourses);
  const courseById = useSelector(selectCourseById);
  const courseCount = useSelector(courseTotalCount);
  const isCourseLoading = useSelector(selectCourseLoadingStatus);
  const isCourseError = useSelector(selectCourseErrorStatus);

  // ###########################################
  //                 GET ALL COURSES
  // ###########################################

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch, getAllCourses]);

  // Fetch user courses on component mount or when userId changes
  useEffect(() => {
    if (userId) {
      dispatch(getUserCourses({ userId }));
    }
  }, [dispatch, getUserCourses, userId]);

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################

  return {
    userCourses,
    courseData,
    courseById,
    courseCount,
    isCourseLoading,
    isCourseError,
  };
};
