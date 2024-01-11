import Heading from "@/components/Heading";
import { getPosts } from "@/lib/posts";
import { getUser } from "@/lib/users";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const user = await getUser(userId);

  return {
    title: user.name,
    description: `These are the posts of ${user.name}`,
  };
};

const User = async ({ params: { userId } }: Params) => {
  const postsPromise: Promise<Post[]> = getPosts(userId);

  const user = await getUser(userId);

  return (
    <div>
      <Heading customClasses="mb-8">
        <Link href="/users" className="mr-5">
          {"<-"}
        </Link>{" "}
        Posts by {user.name}
      </Heading>

      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
};
export default User;
