import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "chats", axiosInstance);

// GET ALL chats
export const getConvo = createAsyncThunk(
  "chats/getConvo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.getAll(
        "twouserchats",
        payload
      );
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  userChats: [],

  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getConvo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getConvo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userChats = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getConvo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const selectChats = (state) => state.chats.userChats;


export default chatSlice.reducer