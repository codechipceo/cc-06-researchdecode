import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
import { toast } from "react-toastify";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "consultancy", axiosInstance);
const notify = (data) => {
  toast.error(`${data}`, {
    position: "top-right",
  });
};

//create consultancy

export const createConsultancy = createAsyncThunk(
  "consultancy/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      if (Array.isArray(msg)) {
        msg.map((item) => {
          notify(item.msg);
        });
      } else {
        return { data, msg };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//VERIFY CONSULTANCY PAYMENT
export const verifyConultancyPayment = createAsyncThunk(
  "consultancy/paymentverify",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("verifypayment", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const endConsultancy = createAsyncThunk(
  "consultancy/end",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("endConsultancy", payload);
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const verifyConsultancy = createAsyncThunk(
  "consultancy/verify",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create(
        "verifyConsultancy",
        payload
      );
      return { data, msg };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  totalCount: 0,
  consultancyData: [],
  consultancyDetail: {},
  isConsultancyPaymentVerify: false,

  isLoading: false,
  isError: false,
  errorMessage: "",
};

const consultancySlice = createSlice({
  name: "consultancy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createConsultancy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createConsultancy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.consultancyData = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(createConsultancy.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(verifyConultancyPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyConultancyPayment.fulfilled, (state) => {
        state.isLoading = false;
        state.isConsultancyPaymentVerify = true;
      })
      .addCase(verifyConultancyPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const selectConsultancyData = (state) =>
  state.consultancy.consultancyData;
export const selectConsultancyById = (state) =>
  state.consultancy.consultancyDetail;
export const consultancyTotalCount = (state) => state.consultancy.totalCount;
export const selectConsultancyLoadingStatus = (state) =>
  state.consultancy.isLoading;
export const selectConsultancyErrorStatus = (state) =>
  state.consultancy.isError;
export const selectConsultancyErrorMessage = (state) =>
  state.consultancy.errorMessage;
export const selectConsultancyPaymentVerified = (state) =>
  state.consultancy.isConsultancyPaymentVerify;

export default consultancySlice.reducer;
