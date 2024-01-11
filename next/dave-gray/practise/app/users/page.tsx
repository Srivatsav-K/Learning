import Heading from "@/components/Heading";
import { getUsers } from "@/lib/users";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <Heading>Listing users - {users.length}</Heading>

      <div className="m-10">
        <Link href="/" className="border-b-2 border-dashed border-blue-500">
          Go to home
        </Link>
      </div>

      {users.map((user) => {
        return (
          <div key={user.id} className="m-5">
            <Heading variant="h2">
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </Heading>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
