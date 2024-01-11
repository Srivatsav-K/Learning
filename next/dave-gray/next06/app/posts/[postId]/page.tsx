import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  params: {
    postId: string;
  };
};

export const generateMetadata = async ({
  params: { postId },
}: Params): Promise<Metadata> => {
  const posts = getSortedPostsData(); //deduped
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
};

const Post = async ({ params: { postId } }: Params) => {
  const posts = getSortedPostsData(); //deduped

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return notFound();
  }

  const { id, title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  return (
    <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>

      <p className="mt-0">{pubDate}</p>

      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <p>
          <Link href="/">{"<- Back to home"}</Link>
        </p>
      </article>
    </main>
  );
};

export const generateStaticParams = () => {
  const posts = getSortedPostsData(); //deduped

  return posts.map((post) => {
    return { postId: post.id };
  });
};

export default Post;
