import Heading from "@/components/Heading";

type UserPostsProps = {
  postsPromise: Promise<Post[]>;
};

const UserPosts = async ({ postsPromise }: UserPostsProps) => {
  const posts = await postsPromise;

  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="p-8 w-1/4 border border-blue-300 rounded-md mb-5 space-y-3"
          >
            <Heading variant="h2">{post.title}</Heading>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UserPosts;
