import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "video", axiosInstance);

// GET ALL videos
export const getAllVideos = createAsyncThunk(
  "video/getall",
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

// GET BY ID
export const getVideoById = createAsyncThunk(
  "video/getById",
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
  videos: [],
  videoById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // get by id
      .addCase(getVideoById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courseById = action.payload.data;
      })
      .addCase(getVideoById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
}).reducer;


export const selectVideos = (state) => state.video.videos;
export const selectVideoById = (state) => state.video.videoById;
export const videoTotalCount = (state) => state.video.totalCount;
export const selectVideoLoadingStatus = (state) => state.video.isLoading;
export const selectVideoErrorStatus = (state) => state.video.isError;
export const selectVideoErrorMessage = (state) => state.video.errorMessage;


