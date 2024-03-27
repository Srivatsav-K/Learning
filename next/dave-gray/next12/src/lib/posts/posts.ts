import { BlogPost, GithubResponseObj, Meta } from "@/types/types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "@/components/Video";
import CustomImage from "@/components/CustomImage";

export const getPostByName = async (
  fileName: string
): Promise<BlogPost | undefined> => {
  const url = `https://raw.githubusercontent.com/gitdagray/test-blogposts/main/${fileName}`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      //Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<Omit<Meta, "id">>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          //@ts-ignore
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogpost: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogpost;
};

export const getPostsMeta = async (): Promise<Meta[] | undefined> => {
  const url =
    "https://api.github.com/repos/gitdagray/test-blogposts/git/trees/main?recursive=1";

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      //Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) return;

  const data: GithubResponseObj = await res.json();

  const filesArray = data.tree.filter((file) => file?.path?.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file.path);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};
