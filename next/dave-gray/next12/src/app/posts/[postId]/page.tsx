import { getPostByName, getPostsMeta } from "@/lib/posts/posts";
import { getFormattedDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: {
    postId: string;
  };
};

export const revalidate = 86400; // 1d

export const generateMetadata = async ({
  params: { postId },
}: Props): Promise<Metadata> => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  return post ? { title: post.meta.title } : { title: "Post not found" };
};

export const generateStaticParams = async () => {
  const posts = await getPostsMeta(); // deduped

  return posts ? posts.map((post) => ({ postId: post.id })) : [];
};

const Post = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  if (!post) notFound();

  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="prose md:prose-lg dark:prose-invert md:mx-auto">
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default Post;
