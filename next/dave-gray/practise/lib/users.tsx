import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const getUser = async (userId: string): Promise<User> => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};
