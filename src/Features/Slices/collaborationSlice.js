import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
import { toast } from "react-toastify";


const apiFeature = new ApiFeatures("user", "collaboration", axiosInstance);
const notify = (data) => {
  // console.log(data);
  toast.error(`${data}`, {
    position: "top-right",
  });
};

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
export const createCollaboration = createAsyncThunk(
  "collab:create",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("create colab called");

      const { data, msg, count } = await apiFeature.create("create", payload);
      // console.log("Amit Pattanaik");

      if (Array.isArray(msg)) {
        msg.map((item)=>{
          notify(item.msg)
        })
      } else {
        return { data, msg, count };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateCollaboration = createAsyncThunk(
  "collab:update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("update", payload);
      return { data, msg, count };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteCollaboration = createAsyncThunk(
  "collab:delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("delete", payload);
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
    myCollaborations: [],
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
    })
      .addCase(getStudentCollaborations.fulfilled, (state, { payload }) => {
        state.myCollaborations = payload.data;
        state.error = null;
        state.loading = false;
        state.count = payload.count;
      })
      .addCase(getStudentCollaborations.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default collaborationSlice;

export const collabState = (state) => state.collaboration;
