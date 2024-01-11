import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "../features/cakes/cakesSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/asyncUser/asyncUserSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // we do this as configureStore method adds some middlewares to the store by default. Therefore we concat logger to the default list
});
