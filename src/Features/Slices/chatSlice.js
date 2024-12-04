import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "chats", axiosInstance);

// GET INBOX
export const getInbox = createAsyncThunk(
  "chats/getInbox",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getinbox", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// Other actions (getAll, getById, update, delete, sendMessage, getChatHistory)
export const getAllChats = createAsyncThunk(
  "chats/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getAll", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const getChatById = createAsyncThunk(
  "chats/getById",
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

export const updateChat = createAsyncThunk(
  "chats/update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("update", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const deleteChat = createAsyncThunk(
  "chats/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("delete", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "chats/send",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("send", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const getChatHistory = createAsyncThunk(
  "chats/history",
  async (payload, { rejectWithValue }) => {
    console.log(payload);

    try {
      const { data, msg } = await apiFeature.create("history", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  userChats: [],
  inbox: [],
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
      .addCase(getInbox.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getInbox.fulfilled, (state, action) => {
        state.isLoading = false;
        state.inbox = action.payload.data;
      })
      .addCase(getInbox.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
    // Add other cases for the remaining actions
  },
});

export const selectInbox = (state) => state.chats.inbox;

export default chatSlice.reducer;
