import { ORDER_CAKE } from "../actions/cakeActions";

const initialState = {
  cakes: 10,
  bakeryIsOpen: false,
};
export function cakesReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_CAKE:
      return { ...state, cakes: state.cakes - action.payload.quantity };

    default:
      return { ...state };
  }
}
