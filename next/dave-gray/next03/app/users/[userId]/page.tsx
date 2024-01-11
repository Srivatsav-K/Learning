import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { Metadata } from "next";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

// Dynamically generate metadata
export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const userId = params.userId;
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
};

const User = async ({ params }: Params) => {
  const userId = params.userId;

  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //one way is to parallely fetch data :const [user, posts] = await Promise.all([userData, userPostsData]); another way is to fetch data incrementally as done below

  const user: User = await userData;

  return (
    <>
      <h1>{user.name}</h1>
      <br />

      <Suspense fallback={<h2>Loading...</h2>}>
        {/* https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components */}
        {/* @ts-expect-error Async Server Component */}
        <UserPosts postsPromise={userPostsData} />
      </Suspense>
    </>
  );
};
export default User;
