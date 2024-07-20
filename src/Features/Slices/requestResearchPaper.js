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

//to upload paper for pending requests
export const sendPaper = createAsyncThunk(
  "requestPaper/sendPaper",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create(
        "uploadRequestPaper",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// get requests as per status type
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

export const getRequestById = createAsyncThunk(
  "requestPaper/getSingle",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.getById(
        "getPendingRequestById",
        payload
      );
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRequestByUserId = createAsyncThunk();

export const approvePaper = createAsyncThunk(
  "requestPaper/approve",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("approveRequest", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const rejectPaperRequest = createAsyncThunk(
  "requestPaper/reject",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("rejectRequest", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  pendingRequests: [],
  uploadPaper: "",
  newRequest: "",
  isRequestApproved: "",
  isRequestCreated: false,
  requestDetail: "",
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
      .addCase(getRequestById.fulfilled, (state, { payload }) => {
        state.requestDetail = payload.data;
      })
      .addCase(approvePaper.fulfilled, (state, { payload }) => {
        state.isRequestApproved = payload.data;
      })
      .addCase(approvePaper.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendPaper.fulfilled, (state, { payload }) => {
        state.uploadPaper = payload.data;
      })
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
      })
      .addCase(rejectPaperRequest.fulfilled, (state, { payload }) => {
        state.requestDetail = payload.data;
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
export const selectRequestDetail = (state) => state.paperRequest.requestDetail;

export default paperRequestSlice.reducer;
