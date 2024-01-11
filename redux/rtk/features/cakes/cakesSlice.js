import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    // reducer switch case logic is written here (reducer functions)
    orderCake: (state, action) => {
      /* 
        1. We can directly mutate state instead of shallow copying by spreading and mutating
        2. no need to explicitly return 
        3. uses immer library under the hood
      */
      state.numOfCakes--;
    },
    restockCake: (state, action) => {
      console.log("action type :", action.type); // cake/restockCake
      state.numOfCakes += action.payload;
    },
  },
});
// Action creators/generators are automatically generated with the same names as the reducer functions we have written

export const cakeActions = cakeSlice.actions;
export default cakeSlice.reducer; // main reducer that we can provide to the redux store

/* 
  NOTE : In RTK when an action is dispatched it does not go through all the reducers and check the respective action in that reducer like in normal redux. By default reducers from a one createSlice will respond to the action types generated from the same createSlice. In case we want a slice to respond to other action types besides the type it has generated we have make use of extraReducers (for ex. check icecreamSlice)
*/
