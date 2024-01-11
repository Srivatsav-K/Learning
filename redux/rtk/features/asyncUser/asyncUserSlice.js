import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  errors: {},
};

// syntax = createAsyncThunk(action type, callback that returns promise). createAsyncThunk will dispatch promise lifecycle actions (pending, fulfilled and rejected action types) that we can listen to using extra reducers
// NOTE : createAsyncThunk under the hood makes use of redux-thunk library. redux thunk is applied as a middleware to the store under the hood.
const fetchUsers = createAsyncThunk("user/fetchUsers", async (message) => {
  console.log({ message });
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.errors = {};
      console.log(action.meta.arg); //TEST ARGUMENT
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error;
    });
  },
});

export { fetchUsers };
export default userSlice.reducer;
