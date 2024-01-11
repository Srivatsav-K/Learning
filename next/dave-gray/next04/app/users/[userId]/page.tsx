import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";

import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User | undefined> = getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: "User not found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
};

const User = async ({ params: { userId } }: Params) => {
  const userData: Promise<User | undefined> = getUser(userId);
  const userPostsData: Promise<Post[] | undefined> = getUserPosts(userId);

  const user = await userData;

  if (!user?.name) {
    return notFound();
  }

  return (
    <>
      <h1>{user?.name}</h1>
      <br />

      <Suspense fallback={<h2>Loading user posts...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts userPostsData={userPostsData} />
      </Suspense>
    </>
  );
};

// SSG -> For static site generation tell next what are all the possile values of params before hand
export const generateStaticParams = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => {
    return { userId: user.id.toString() }; // If next reads data from browser URL it is a string but since we are generating userIds statically we should convert number to string.
  });
};

export default User;
