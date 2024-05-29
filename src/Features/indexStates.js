import {
    selectStudentInfo,
    selectStudentLoading,
    selectStudentErrorMsg,
    selectStudentIsError,
    selectStudentIsLoggedIn,
    StudentLogin
} from "./Slices/studentSlice"


const reduxStore={
    states:{
        StudentInfo: selectStudentInfo,
        StudentLoading: selectStudentLoading,
        StudentErrorMsg: selectStudentErrorMsg,
        StudentIsError: selectStudentIsError,
        StudentIsLoggedIn: selectStudentIsLoggedIn,
    },
    sliceMethods:{
        StudentLogin,
    }
}

export {reduxStore}