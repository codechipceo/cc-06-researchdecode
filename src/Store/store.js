import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  courseSlice,
  videoSlice,
  studentSlice,
  teacherSlice,
  paperRequestSlice,
  chatSlice,
  consultancyCardSlice,
  consultancySlice,
  collaborationSlice
} from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
  course: courseSlice,
  video: videoSlice,
  paperRequest: paperRequestSlice,
  chats: chatSlice,
  consultancyCard: consultancyCardSlice,
  consultancy: consultancySlice,
  collaboration: collaborationSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
