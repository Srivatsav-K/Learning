import { produce } from "immer";
import { UPDATE_ADDRESS } from "../actions/userActions";

const initialState = {
  name: "john",
  address: {
    street: "123 Main st.",
    city: "Boston",
    state: "MA",
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ADDRESS:
      //return { ...state, address: { ...state.address, street: payload } };
      return produce(state, (draftState) => {
        // we can update the state as if it is mutable
        draftState.address.street = payload;
      });
    default:
      return state;
  }
};
