import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";
import { toast } from "react-toastify";

// Initialize the ApiFeatures for the supervisor module
const apiFeature = new ApiFeatures("admin", "teacheronboarding", axiosInstance); // Updated module name
const notify = (data) => {
  toast.error(`${data}`, {
    position: "top-right",
  });
};

// Async thunk for submitting supervisor form data
export const submitSupervisorForm = createAsyncThunk(
  "supervisor/submitRequest",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("form submitted");

      const { data, msg } = await apiFeature.create("submitRequest", formData); // Use the `create` method from ApiFeatures

      console.log("response here");

      if (Array.isArray(msg)) {
        msg.map((item) => {
          notify(item.msg);
        });
      } else {
        return { data, msg };
      }
    } catch (error) {
      const errMessage = error.response.data.msg || "Something went wrong";
      return rejectWithValue(errMessage);
    }
  }
);

// Supervisor slice
const supervisorSlice = createSlice({
  name: "supervisor",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSupervisorForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitSupervisorForm.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(submitSupervisorForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = supervisorSlice.actions;
export default supervisorSlice.reducer;
