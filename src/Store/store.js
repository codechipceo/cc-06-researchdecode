import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  courseSlice,
  studentSlice,
  teacherSlice,
  paperRequestSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
  course: courseSlice,
  paperRequest: paperRequestSlice,
});

export const store = configureStore({
  reducer: reducers,
});
