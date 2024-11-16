import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
import { getAllCollaborations } from "../../../../backend/src/Modules/Collaboration/collaborationService";

const apiFeature = new ApiFeatures("user", "collaboration", axiosInstance);

const getAllCollaborations = createAsyncThunk(
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

const collaborationSlice = createSlice({
  name: "collab",
  initialState: {
    allCollaborations: [],
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
  },
});

export default collaborationSlice;
