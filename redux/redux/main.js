import { bindActionCreators, createStore } from "redux";

// action creator/generator
const ORDER_CAKE = "ORDER_CAKE";
function orderCake(data) {
  return { type: ORDER_CAKE, payload: data }; // action
}

// reducer
const initialState = {
  numberOfCakes: 10,
  bakeryIsOpen: true,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload.quantity,
      };

    default:
      return { ...initialState };
  }
}

// store
function configStore() {
  return createStore(reducer);
}
const store = configStore();

// getState()
console.log(store.getState());

// subscribe
const unsubscribe = store.subscribe(() => {
  console.log("subcribed update : ", store.getState());
});

// dispatch
store.dispatch({ type: ORDER_CAKE, payload: { quantity: 1 } }); //directly pass action
store.dispatch(orderCake({ quantity: 2 }));
store.dispatch(orderCake({ quantity: 1 }));

// unsubscribe
unsubscribe();
store.dispatch(orderCake({ quantity: 1 }));
console.log("state updated after unsubscribed : ", store.getState());

// bindActionCreators() : instead of calling store.dispatch(orderCake({ quantity: 1 })); everytime, bind all the actionCreators to the dispatch method
const actions = bindActionCreators({ orderCake }, store.dispatch);
actions.orderCake({ quantity: 1 });
