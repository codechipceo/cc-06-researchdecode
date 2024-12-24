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
import {
  getAllCourses,
  getCourseById,
  getUserCourses,
  selectCourseById,
  selectCourseErrorMessage,
  selectCourseErrorStatus,
  selectCourseLoadingStatus,
  selectCourses,
  selectUserCourses,
  courseTotalCount,
} from "./Slices/courseSlice";
import {
  getAllVideos,
  getVideoById,
  selectVideoById,
  selectVideoErrorMessage,
  selectVideoErrorStatus,
  selectVideoLoadingStatus,
  selectVideos,
  videoTotalCount,
} from "./Slices/videoSlice";

import { resetState , submitSupervisorForm } from "./Slices/supervisorSlice";

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

    selectCourseById,
    selectCourseErrorMessage,
    selectCourseErrorStatus,
    selectCourseLoadingStatus,
    selectCourses,
    selectUserCourses,
    courseTotalCount,

    selectVideoById,
    selectVideoErrorMessage,
    selectVideoErrorStatus,
    selectVideoLoadingStatus,
    selectVideos,
    videoTotalCount,


  },
  sliceMethods: {
    studentLogin,
    getAllTeachers,
    getByIdTeacher,
    getAllCourses,
    getCourseById,
    getUserCourses,
    getAllVideos,
    getVideoById,
    resetState,
    submitSupervisorForm
  },
};

export { reduxStore };
