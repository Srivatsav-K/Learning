import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numberOfIceCreams: 10,
};

export const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.numberOfIceCreams -= action.payload;
    },
    reStockIceCream: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state, action) => {
      state.numberOfIceCreams--;
    });
  },
});

export const iceCreamActions = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
