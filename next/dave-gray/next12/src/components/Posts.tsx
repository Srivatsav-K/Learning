import { getPostsMeta } from "@/lib/posts/posts";
import ListItem from "./ListItem";

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  return (
    <section className="space-y-10">
      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Blogs
      </h3>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
export default Posts;
