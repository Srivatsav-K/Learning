import { store } from "./app/store";
import { fetchUsers } from "./features/asyncUser/asyncUserSlice";
import { cakeActions } from "./features/cakes/cakesSlice";
import {
  orderIcecream,
  restockIcecream,
} from "./features/icecream/icecreamSlice";

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state :", store.getState());
});

store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.restockCake(2));

store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(restockIcecream(2));

store.dispatch(fetchUsers("TEST ARGUMENT"));

unsubscribe();
