import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

const apiFeature = new ApiFeatures("user", "collaboration", axiosInstance);

export const getAllCollaborations = createAsyncThunk(
  "collab/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.getAll("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getStudentCollaborations = createAsyncThunk(
  "collab:myCollabs",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.getAll("student", payload);
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const collaborationSlice = createSlice({
  name: "collab",
  initialState: {
    allCollaborations: [],
    myCollaborations: [] ,
    error: null,
    loading: false,
    count: 0,
  },
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllCollaborations.pending, (state) => {
      state.loading = true;
    })
      .addCase(getAllCollaborations.fulfilled, (state, { payload }) => {
        state.allCollaborations = payload.data;
        state.error = null;
        state.loading = false;
        state.count = payload.count;
      })
      .addCase(getAllCollaborations.rejected, (state) => {
        state.loading = false;
      });

    addCase(getStudentCollaborations.pending, (state) => {
      state.loading = true;

    }).addCase(getStudentCollaborations.fulfilled, (state, { payload }) => {
      state.myCollaborations = payload.data;
      state.error = null;
      state.loading = false;
      state.count = payload.count;
    }).addCase(getStudentCollaborations.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  },
});

export default collaborationSlice;

export const collabState = (state) => state.collaboration;
