import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  errors: {},
};

export const startGetUsers = createAsyncThunk("users/fetchUsers", async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return (await axios.get(url)).data;
});

export const asyncUserSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(startGetUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(startGetUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.errors = {};
    });

    builder.addCase(startGetUsers.rejected, (state, action) => {
      state.errors = action.error;
      state.loading = false;
    });
  },
});

export const userActions = asyncUserSlice.actions;
export default asyncUserSlice.reducer;
