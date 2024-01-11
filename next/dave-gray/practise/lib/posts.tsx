import axios from "axios";

export const getPosts = async (userId: string): Promise<Post[]> => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};
