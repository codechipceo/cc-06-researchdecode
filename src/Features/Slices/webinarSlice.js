import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
const apiFeature = new ApiFeatures("admin", "webinar", axiosInstance);
const enrollCourseApi = new ApiFeatures(
  "user",
  "courseEnrollment",
  axiosInstance
);
export const createWebinar = createAsyncThunk(
  "webinar/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);
export const getAllWebinar = createAsyncThunk(
  "webinar/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("getAll", payload);
          console.log(data);
      return { data, msg, count };
  
      
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);
export const getByIdWebinar = createAsyncThunk(
  "webinar/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const requestData = { _id: payload.webinarId };
      console.log(requestData);

      const { data, msg } = await apiFeature.create("getById", requestData);
      console.log(data);

      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);

export const updateWebinar = createAsyncThunk(
  "webinar/update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("update", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);
export const deleteWebinar = createAsyncThunk(
  "webinar/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("delete", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);
// Initial State
const initialState = {
  totalCount: 0,
  webinars: [],
  webinarById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const webinarSlice = createSlice({
  name: "webinarSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Webinar
      .addCase(createWebinar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createWebinar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.webinars.push(action.payload.data);
      })
      .addCase(createWebinar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      // Get All Webinars
      .addCase(getAllWebinar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllWebinar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.webinars = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllWebinar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      // Get Webinar by ID
      .addCase(getByIdWebinar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      // Get Webinar by ID
      .addCase(getByIdWebinar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.webinarById = action.payload.data; // Ensure this is the correct path
      })
      .addCase(getByIdWebinar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      // Update Webinar
      .addCase(updateWebinar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updateWebinar.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.webinars.findIndex(
          (webinar) => webinar._id === action.payload.data._id
        );
        if (index !== -1) {
          state.webinars[index] = action.payload.data;
        }
      })
      .addCase(updateWebinar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      // Delete Webinar
      .addCase(deleteWebinar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteWebinar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.webinars = state.webinars.filter(
          (webinar) => webinar._id !== action.payload.data._id
        );
      })
      .addCase(deleteWebinar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
}).reducer;
// Selectors
export const selectAllWebinars = (state) => state.webinar.webinars || [];
export const selectWebinarById = (state) => state.webinar.webinarById || {};
export const selectWebinarLoading = (state) =>state.webinar?.isLoading || false;
export const selectWebinarError = (state) => state.webinar?.isError || false;
export const selectWebinarErrorMessage = (state) =>state.webinar?.errorMessage || "";
export const selectTotalCount = (state) => state.webinar?.totalCount || 0;
