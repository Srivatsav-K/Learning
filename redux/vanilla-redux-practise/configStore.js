import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakesReducer } from "./reducers/cakeReducer";
import { iceCreamReducer } from "./reducers/iceCreamReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import { asyncUsersReducer } from "./reducers/asyncUsersReducer";
import logger from "redux-logger";

export function configStore() {
  return createStore(
    combineReducers({
      cakes: cakesReducer,
      iceCreams: iceCreamReducer,
      user: userReducer,
      asyncUsers: asyncUsersReducer,
    }),
    applyMiddleware(thunk, logger)
  );
}
