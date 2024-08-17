import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "course", axiosInstance);
const enrollCourseApi = new ApiFeatures(
  "user",
  "courseEnrollment",
  axiosInstance
);

// GET ALL Courses
export const getAllCourses = createAsyncThunk(
  "course/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.getAll("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const buyCourse = createAsyncThunk(
  "course/buy",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await enrollCourseApi.create("enroll", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const verifyEnrollPayment = createAsyncThunk(
  "course/verifyEnroll",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await enrollCourseApi.create(
        "verifyEnroll",
        payload
      );
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET BY ID
export const getCourseById = createAsyncThunk(
  "course/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.getById("getById", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  courses: [],
  courseById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // get by id
      .addCase(getCourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseById = action.payload.data;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
}).reducer;

export const selectCourses = (state) => state.course.courses;
export const selectCourseById = (state) => state.course.courseById;
export const courseTotalCount = (state) => state.course.totalCount;
export const selectCourseLoadingStatus = (state) => state.course.isLoading;
export const selectCourseErrorStatus = (state) => state.course.isError;
export const selectCourseErrorMessage = (state) => state.course.errorMessage;
