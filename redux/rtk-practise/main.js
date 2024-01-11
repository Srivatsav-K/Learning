import { store } from "./app/store";
import { iceCreamActions } from "./features/iceCream/iceCreamSlice";
import { cakeActions } from "./features/cake/cakeSlice";
import "./style.css";
import {
  startGetUsers,
  userActions,
} from "./features/asyncUser/asyncUserSlice";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cakeActions.orderCake(5));
store.dispatch(cakeActions.reStockCake(2));

store.dispatch(iceCreamActions.orderIceCream(2));
store.dispatch(iceCreamActions.reStockIceCream(10));

store.dispatch(startGetUsers());
