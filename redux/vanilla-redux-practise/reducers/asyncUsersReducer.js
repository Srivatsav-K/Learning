import {
  ERRORS,
  FETCH_USERS,
  LOADING_FALSE,
  LOADING_TRUE,
} from "../actions/asyncUsers";

const initialState = {
  loading: false,
  data: [],
  error: {},
};

export const asyncUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_TRUE:
      return { ...state, loading: true };

    case LOADING_FALSE:
      return { ...state, loading: false };

    case FETCH_USERS: {
      return { ...state, data: [...payload], error: {} };
    }

    case ERRORS: {
      return { ...state, error: { ...payload } };
    }

    default:
      return state;
  }
};
