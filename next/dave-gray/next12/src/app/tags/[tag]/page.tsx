import ListItem from "@/components/ListItem";
import { getPostsMeta } from "@/lib/posts/posts";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    tag: string;
  };
};

export const revalidate = 86400; // 1d

export const generateStaticParams = async () => {
  const posts = await getPostsMeta(); // deduped

  if (!posts) return [];

  const uniqueTags = new Set(posts.flatMap((post) => post.tags));

  return Array.from(uniqueTags).map((tag) => ({ tag }));
};

export const generateMetadata = ({ params: { tag } }: Props): Metadata => {
  return {
    title: tag,
  };
};

const TagPostList = async ({ params: { tag } }: Props) => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const tagPosts = posts?.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/" className="hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="space-y-10 mx-auto">
      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        #{tag}
      </h3>
      <ul className="w-full list-none p-0">
        {tagPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default TagPostList;
