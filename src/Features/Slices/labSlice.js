import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "labs", axiosInstance);

// Async thunk for  creating Teacher
export const createLab = createAsyncThunk(
  "lab/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);
// GET ALL TEACHER
export const getAllLabs = createAsyncThunk(
  "lab/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("", payload, "get");
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET BY ID
export const getByIdLab = createAsyncThunk(
  "lab/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create(
        `/${payload._id}`,
        payload,
        "get"
      );
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// UPDATE TEACHER
export const updateLab = createAsyncThunk(
  "lab/update",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create(
        `/${payload._id}`,
        payload,
        "put"
      );
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// DELETE TEACHER
export const deleteLab = createAsyncThunk(
  "lab/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create(
        `/${payload}`,
        payload,
        "delete"
      );
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

const initialState = {
  totalCount: 0,
  labs: [],
  labsById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const labSlice = createSlice({
  name: "lab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLab.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLab.fulfilled, (state, action) => {
        state.isLoading = false;
        state.labs.push(action.payload.data);
      })
      .addCase(createLab.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAllLabs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLabs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.labs = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllLabs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getByIdLab.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByIdLab.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teacherById = action.payload.data;
      })
      .addCase(getByIdLab.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateLab.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLab.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.labs.map((data) => {
          if (data._id === payload.data._id) {
            return payload.data;
          }
          return data;
        });
        // Update state with the updated lab if needed
      })
      .addCase(updateLab.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteLab.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLab.fulfilled, (state) => {
        state.isLoading = false;
        // Remove the deleted lab from state if needed
      })
      .addCase(deleteLab.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default labSlice.reducer;
