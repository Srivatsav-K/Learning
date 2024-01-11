import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.numberOfCakes -= action.payload;
    },
    reStockCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export const cakeActions = cakeSlice.actions;
export default cakeSlice.reducer;
