import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useTeacher = () => {
  // ###########################################
  //                 STATES
  // ###########################################
  const dispatch = useDispatch();
  const { getAllTeachers } = reduxStore.sliceMethods;
  const {
    selectTeachers,
    selectTeacherById,
    teacherTotalCount,
    selectTeacherLoadingStatus,
    selectTeacherErrorStatus,
  } = reduxStore.states;
  const teacherData = useSelector(selectTeachers);
  const teacherById = useSelector(selectTeacherById);
  const teacherCount = useSelector(teacherTotalCount);
  const isTeacherLoading = useSelector(selectTeacherLoadingStatus);
  const isTeacherError = useSelector(selectTeacherErrorStatus);

  // ###########################################
  //                 GET ALL TEACHERS
  // ###########################################

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch, getAllTeachers]);

  // ###########################################
  //                 EXPORT OBJECT
  // ###########################################

  return {
    teacherData,
    teacherById,
    teacherCount,
    isTeacherLoading,
    isTeacherError,
  };
};
