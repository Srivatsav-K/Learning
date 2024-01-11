import axios from "axios";

export const LOADING_TRUE = "LOADING_TRUE";

export const LOADING_FALSE = "LOADING_FALSE";

export const FETCH_USERS = "FETCH_USERS";

export const ERRORS = "ERRORS";

export const getUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const loadingTrue = (payload) => ({
  type: LOADING_TRUE,
  payload,
});

export const loadingFalse = (payload) => ({
  type: LOADING_FALSE,
  payload,
});

export const setErrors = (payload) => ({
  type: ERRORS,
  payload,
});

export const startGetUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingTrue());
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;
      dispatch(getUsers(data));
    } catch (e) {
      dispatch(setErrors(e));
    } finally {
      dispatch(loadingFalse());
    }
  };
};
