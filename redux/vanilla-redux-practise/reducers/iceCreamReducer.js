import { ORDER_CAKE } from "../actions/cakeActions";
import { ORDER_ICECREAM } from "../actions/iceCreamActions";

const initialState = {
  iceCreams: 10,
  bakeryIsOpen: false,
};
export function iceCreamReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_ICECREAM:
      return { ...state, iceCreams: state.iceCreams - action.payload.quantity };

    // In case we have an offer whenever someone orders a cake 1 icecream is free
    /* 
      NOTE: Each reducer can only update it's own state but can respond to all actions (Because when an action it dispatched it goes thorough all the reducers)
    */
    case ORDER_CAKE: {
      return { ...state, iceCreams: state.iceCreams-- };
    }

    default:
      return { ...state };
  }
}
