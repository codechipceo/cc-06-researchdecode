import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
const apiFeature = new ApiFeatures("user", "webinarEnrollment", axiosInstance);

export const createWebinarEnroll = createAsyncThunk(
  "webinarEnrollment/enroll",
  async (payload, { rejectWithValue }) => {
    try {
      const enrollData = { _id: payload.webinarId };
       
      const { data, msg } = await apiFeature.create("enroll", enrollData);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);


export const getByIdWebinarEnroll = createAsyncThunk(
  "webinarEnrollment/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const requestData = { _id: payload.webinarId };

      const { data, msg } = await apiFeature.create("getById", requestData);
      console.log(data);

      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);


export const isEnrolled=createAsyncThunk(
    "webinarEnrollment/isEnroll",
    async (payload, { rejectWithValue }) => {
      try {
        // console.log(payload);
        
        const { data, msg } = await apiFeature.create("isEnroll", payload);
        console.log(data);
        
        return { data, msg };
      } catch (error) {
        const errMessage = error.response?.data?.msg || "Error occurred";
        return rejectWithValue(errMessage);
      }
    }
)

export const deleteWebinarEnrollment = createAsyncThunk(
  "webinarEnrollment/unenroll",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      
      const { data, msg } = await apiFeature.create("unenroll", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response?.data?.msg || "Error occurred";
      return rejectWithValue(errMessage);
    }
  }
);


const initialState = {
  webinarById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
  isEnrolled: null,
};


  export const webinarEnrollSlice = createSlice({
    name: "webinarEnrollment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createWebinarEnroll.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.errorMessage = "";
        })
        .addCase(createWebinarEnroll.fulfilled, (state, action) => {
          state.isLoading = false;
          state.webinarById = action.payload.data;
        })
        .addCase(createWebinarEnroll.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload;
        })
        .addCase(getByIdWebinarEnroll.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getByIdWebinarEnroll.fulfilled, (state, action) => {
          state.isLoading = false;
          state.webinarById = action.payload.data;
        })
        .addCase(getByIdWebinarEnroll.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload;
        })
        .addCase(isEnrolled.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.errorMessage = "";
        })
        .addCase(isEnrolled.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isEnrolled = action.payload.data;
        })
        .addCase(isEnrolled.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload;
        })
        .addCase(deleteWebinarEnrollment.fulfilled, (state) => {
          state.isLoading = false;
          // Optionally handle deletion logic here.
        })
        .addCase(deleteWebinarEnrollment.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload;
        });
    },
  }).reducer;
  


  export const selectWebinarById = (state) => state.webinarEnroll.webinarById || {};
  export const selectWebinarLoading = (state) => state.webinarEnroll?.isLoading || false;
  export const selectWebinarError = (state) => state.webinarEnroll?.isError || false;
  export const selectWebinarErrorMessage = (state) => state.webinarEnroll?.errorMessage || "";
  export const selectIsEnrolled = (state) => state.webinarEnroll?.isEnrolled ?? null;

