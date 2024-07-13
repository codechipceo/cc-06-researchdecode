import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  courseSlice,
  studentSlice,
  teacherSlice,
  paperRequestSlice,
  chatSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
  course: courseSlice,
  paperRequest: paperRequestSlice,
  chats: chatSlice,
});

export const store = configureStore({
  reducer: reducers,
});
