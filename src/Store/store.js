import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  studentSlice
} from "../Features/indexSlice"

const reducers = combineReducers({
  student: studentSlice,
 
});

export const store = configureStore({
  reducer: reducers,
});
