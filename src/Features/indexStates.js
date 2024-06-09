import {
  selectStudentInfo,
  selectStudentLoading,
  selectStudentErrorMsg,
  selectStudentIsError,
  selectStudentIsLoggedIn,
  studentLogin,
} from "./Slices/studentSlice";

import {
  getAllTeachers,
  getByIdTeacher,
  selectTeacherById,
  selectTeacherErrorMessage,
  selectTeacherErrorStatus,
  selectTeacherLoadingStatus,
  selectTeachers,
  teacherTotalCount,
} from "./Slices/teacherSlice";

const reduxStore = {
  states: {
    StudentInfo: selectStudentInfo,
    StudentLoading: selectStudentLoading,
    StudentErrorMsg: selectStudentErrorMsg,
    StudentIsError: selectStudentIsError,
    StudentIsLoggedIn: selectStudentIsLoggedIn,
    selectTeacherById,
    selectTeacherErrorMessage,
    teacherTotalCount,
    selectTeacherErrorStatus,
    selectTeacherLoadingStatus,
    selectTeachers,
  },
  sliceMethods: {
    studentLogin,
    getAllTeachers,
    getByIdTeacher,
  },
};

export { reduxStore };
