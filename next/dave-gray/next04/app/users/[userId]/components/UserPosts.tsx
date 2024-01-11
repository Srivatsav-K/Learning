import Link from "next/link";

type UserPostsProps = {
  userPostsData: Promise<Post[]>;
};

const UserPosts = async ({ userPostsData }: UserPostsProps) => {
  const posts = await userPostsData;

  return (
    <div>
      <h2>Posts</h2>
      <h3>
        <Link href="/users">Back</Link>
      </h3>
      <br />

      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br />
          </article>
        );
      })}
    </div>
  );
};
export default UserPosts;
