import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  courseSlice,
  videoSlice,
  studentSlice,
  teacherSlice,
  paperRequestSlice,
  chatSlice,
} from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
  course: courseSlice,
  video:videoSlice,
  paperRequest: paperRequestSlice,
  chats: chatSlice,
});

export const store = configureStore({
  reducer: reducers,
});
