import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "paperRequest", axiosInstance);

// Async thunk for creating a research paper
export const createPaperRequest = createAsyncThunk(
  "requestPaper/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("createRequest", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const getPendingRequests = createAsyncThunk(
  "requestPaper/pending",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("pendingRequests", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  pendingRequests: [],
  newRequest: "",
  isRequestCreated: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const paperRequestSlice = createSlice({
  name: "paperRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create paper request
      .addCase(createPaperRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createPaperRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newRequest = action.payload.data;
        state.pendingRequests.push(action.payload.data);
      })
      .addCase(createPaperRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // get all pending requests
      .addCase(getPendingRequests.fulfilled, (state, { payload }) => {
        state.pendingRequests = payload.data;
        state.isLoading = false;
      })
      .addCase(getPendingRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingRequests.rejected, (state, { payload }) => {
        state.isError = true;
        state.errorMessage = payload;
      });
  },
});

// Selectors
export const selectPendingRequests = (state) =>
  state.paperRequest.pendingRequests;
export const selectNewRequest = (state) => state.paperRequest.newRequest;
export const selectIsRequestCreated = (state) =>
  state.paperRequest.isRequestCreated;
export const selectIsLoading = (state) => state.paperRequest.isLoading;
export const selectIsError = (state) => state.paperRequest.isError;
export const selectErrorMessage = (state) => state.paperRequest.errorMessage;

export default paperRequestSlice.reducer;