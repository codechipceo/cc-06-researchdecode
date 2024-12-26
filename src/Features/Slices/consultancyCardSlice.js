import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
import { toast } from "react-toastify";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "consultancyCard", axiosInstance);
const notify = (data) => {
  toast.error(`${data}`, {
    position: "top-right",
  });
};

// GET ALL Cards
export const getAllConsultancyCard = createAsyncThunk(
  "consultancy/getall",
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
export const getConsultancyCardById = createAsyncThunk(
  "consultancy/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getById", payload);
      if (Array.isArray(msg)) {
        msg.map((item) => {
          notify(item.msg);
        });
      } else {
        return { data, msg };
      }
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  consultancyCardsData: [],
  consultancyCardDetail: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const consultancyCardSlice = createSlice({
  name: "consultancyCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllConsultancyCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllConsultancyCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.consultancyCardsData = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllConsultancyCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getConsultancyCardById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConsultancyCardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.consultancyCardDetail = action.payload.data;
      })
      .addCase(getConsultancyCardById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const selectConsultancyCards = (state) =>
  state.consultancyCard.consultancyCardsData;
export const selectConsultancyCardById = (state) =>
  state.consultancyCard.consultancyCardDetail;
export const consultancyCardTotalCount = (state) =>
  state.consultancyCard.totalCount;
export const selectConsultancyCardLoadingStatus = (state) =>
  state.consultancyCard.isLoading;
export const selectConsultancyCardErrorStatus = (state) =>
  state.consultancyCard.isError;
export const selectConsultancyCardErrorMessage = (state) =>
  state.consultancyCard.errorMessage;

export default consultancyCardSlice.reducer;
