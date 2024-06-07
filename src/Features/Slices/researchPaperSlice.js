import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("user", "researchPaper", axiosInstance);

// Async thunk for creating a research paper
export const createResearchPaper = createAsyncThunk(
  "researchPaper/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET ALL Research Papers
export const getAllResearchPapers = createAsyncThunk(
  "researchPaper/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg, count } = await apiFeature.create("getAll", payload);
      return { data, msg, count };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// GET Research Paper BY ID
export const getByIdResearchPaper = createAsyncThunk(
  "researchPaper/getbyid",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("getbyid", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

// UPDATE Research Paper
export const updateResearchPaper = createAsyncThunk(
  "researchPaper/update",
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

// DELETE Research Paper
export const deleteResearchPaper = createAsyncThunk(
  "researchPaper/delete",
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

const initialState = {
  totalCount: 0,
  researchPapers: [],
  researchPaperById: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const researchPaperSlice = createSlice({
  name: "researchPaper",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createResearchPaper
      .addCase(createResearchPaper.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createResearchPaper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.researchPapers.push(action.payload.data);
      })
      .addCase(createResearchPaper.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getAllResearchPapers
      .addCase(getAllResearchPapers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllResearchPapers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.researchPapers = action.payload.data;
        state.totalCount = action.payload.count;
      })
      .addCase(getAllResearchPapers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // getByIdResearchPaper
      .addCase(getByIdResearchPaper.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getByIdResearchPaper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.researchPaperById = action.payload.data;
      })
      .addCase(getByIdResearchPaper.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // updateResearchPaper
      .addCase(updateResearchPaper.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updateResearchPaper.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.researchPapers.findIndex(
          (paper) => paper._id === action.payload.data._id
        );
        if (index !== -1) {
          state.researchPapers[index] = action.payload.data;
        }
      })
      .addCase(updateResearchPaper.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      // deleteResearchPaper
      .addCase(deleteResearchPaper.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteResearchPaper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.researchPapers = state.researchPapers.filter(
          (paper) => paper._id !== action.payload.data._id
        );
      })
      .addCase(deleteResearchPaper.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
}).reducer;

// Selectors
export const selectAllResearchPapers = (state) =>
  state.researchPaper.researchPapers;
export const selectResearchPaperById = (state) =>
  state.researchPaper.researchPaperById;
export const selectResearchPaperLoading = (state) =>
  state.researchPaper.isLoading;
export const selectResearchPaperError = (state) => state.researchPaper.isError;
export const selectResearchPaperErrorMessage = (state) =>
  state.researchPaper.errorMessage;
export const selectTotalCount = (state) => state.researchPaper.totalCount;
