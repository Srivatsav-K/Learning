"use client";

import Usercard from "@/components/Usercard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <div className="flex justify-center">
      <Usercard userInfo={session?.user} />
    </div>
  );
};

export default ClientPage;
