type UserPostsProps = {
  postsPromise: Promise<Post[]>;
};

const UserPosts = async ({ postsPromise }: UserPostsProps) => {
  const posts = await postsPromise;

  return (
    <div>
      <h2>Posts</h2>
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
