import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("admin", "teacher", axiosInstance);

// GET ALL TEACHER
export const getAllTeachers = createAsyncThunk(
  "teacher/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET BY ID
export const getByIdTeacher = createAsyncThunk(
  "teacher/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getById", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  teachers: [],
  teacherById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getByIdTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByIdTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teacherById = action.payload.data;
      })
      .addCase(getByIdTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

// export const {} = teacherSlice.actions;

export const selectTeachers = (state) => state.teachers.teachers;
export const selectTeacherById = (state) => state.teachers.teacherById;
export const teacherTotalCount = (state) => state.teachers.totalCount;
export const selectTeacherLoadingStatus = (state) => state.teachers.isLoading;
export const selectTeacherErrorStatus = (state) => state.teachers.isError;
export const selectTeacherErrorMessage = (state) => state.teachers.errorMessage;

export default teacherSlice.reducer;