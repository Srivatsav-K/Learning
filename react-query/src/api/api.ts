import axios from "axios";
import { Post, Tag } from "../types";

const jsonserver = axios.create({
  baseURL: "http://localhost:3000/",
});

export const fetchPosts = async () => {
  const res = await jsonserver.get<Post[]>("posts", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });

  return res.data;
};

export const createPost = async (post: Post) => {
  const res = await jsonserver.post<Post>("posts", post);
  return res.data;
};

export const deletePost = async (id: number) => {
  const res = await jsonserver.delete<Post>(`posts/${id}`);
  return res.data;
};

export const fetchTags = async () => {
  const res = await jsonserver.get<Tag[]>("tags");
  return res.data;
};
