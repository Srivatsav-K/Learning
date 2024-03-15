import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/api";
import DeleteOutlineIcon from "../assets/delete-outline.svg?react";
import type { Post as PostType } from "../types";
import Card from "./Card";
import Tag from "./Tag";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true, // invalidate query keys matching only ["posts"] and not something like ["posts",id]
      });
    },
  });

  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <p className="text-lg truncate">{post.title}</p>

          <div className="flex flex-wrap">
            {post?.tags?.map((tag, i) => {
              return <Tag key={i} tagName={tag} />;
            })}
          </div>
        </div>

        <button
          onClick={() => mutate(post.id)}
          className="w-6 text-red-400 hover:text-red-600"
        >
          <DeleteOutlineIcon />
        </button>
      </div>
    </Card>
  );
};

export default Post;
