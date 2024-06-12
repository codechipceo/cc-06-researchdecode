import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  courseSlice, studentSlice, teacherSlice } from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
  course:courseSlice
});

export const store = configureStore({
  reducer: reducers,
});
