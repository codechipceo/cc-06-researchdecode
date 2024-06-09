import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { studentSlice, teacherSlice } from "../Features/indexSlice";

const reducers = combineReducers({
  student: studentSlice,
  teachers: teacherSlice,
});

export const store = configureStore({
  reducer: reducers,
});
