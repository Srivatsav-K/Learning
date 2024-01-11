import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cakes/cakesSlice";

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state, action) => {
      state.numOfIcecreams--;
    },
    restockIcecream: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // To make icream reducers respond to actions defined in other slices
  /*  
    APPROACH 1 :
    extraReducers: {
      ["cake/orderCake"]: (state, action) => {
        state.numOfIcecreams--;
      },
    }, 
  */
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state, action) => {
      state.numOfIcecreams--;
    });
  },
});

export const { orderIcecream, restockIcecream } = icecreamSlice.actions;

export default icecreamSlice.reducer;
