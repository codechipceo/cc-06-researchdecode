import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "student", axiosInstance);

// Async thunk for student login
export const studentLogin = createAsyncThunk(
  "student/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("signIn", payload);
      localStorage.setItem("studentToken", data.token);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// Async thunk for student signup
export const studentSignUp = createAsyncThunk(
  "student/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      localStorage.setItem("studentToken", data.token);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// Initial state for student login slice
const initialState = {
  studentInfo: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
  isLoggedIn: false,
  studentToken: localStorage.getItem("studentToken"),
  isSignUpLoading: false,
  isSignUpError: false,
  signUpErrorMessage: "",
};

// Create student slice with reducers and extraReducers
export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    logout: (state) => {
      state.studentInfo = null;
      state.isLoggedIn = false;
      state.studentToken = null;

    },
  },
  extraReducers: (builder) => {
    builder
      // Login reducers
      .addCase(studentLogin.fulfilled, (state, { payload }) => {
        state.studentInfo = payload.data;
        state.studentToken = payload.data.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(studentLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(studentLogin.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isError = true;
        state.isLoading = false;
      })
      // Signup reducers
      .addCase(studentSignUp.fulfilled, (state, { payload }) => {
        state.studentInfo = payload.data;
        state.studentToken = payload.data.token;
        state.isLoggedIn = true;
        state.isSignUpLoading = false;
      })
      .addCase(studentSignUp.pending, (state) => {
        state.isSignUpLoading = true;
      })
      .addCase(studentSignUp.rejected, (state, { payload }) => {
        state.signUpErrorMessage = payload;
        state.isSignUpError = true;
        state.isSignUpLoading = false;
      });
  },
}).reducer

export const selectStudentInfo = (state) => state.student.studentInfo;
export const selectStudentLoading = (state) => state.student.isLoading;
export const selectStudentErrorMsg = (state) => state.student.errorMessage;
export const selectStudentIsError = (state) => state.student.isError;
export const selectStudentIsLoggedIn = (state) => state.student.isLoggedIn;
export const selectStudentToken = (state) => state.student.studentToken;
export const selectStudentSignUpLoading = (state) => state.student.isSignUpLoading;
export const selectStudentSignUpErrorMsg = (state) => state.student.signUpErrorMessage;
export const selectStudentIsSignUpError = (state) => state.student.isSignUpError;

