import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import Post from "./Post";
import { Link } from "react-router-dom";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">POSTS - {posts?.length}</h1>

        <Link
          to="add-post"
          className="px-3 py-2 rounded-lg bg-slate-300 hover:bg-slate-400 hover:text-white duration-200"
        >
          ADD POST
        </Link>
      </div>

      <div>
        {posts?.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};
export default PostsList;
