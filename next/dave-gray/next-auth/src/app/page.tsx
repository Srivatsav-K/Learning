import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Usercard from "@/components/Usercard";
import Unauthorised from "@/components/Unauthorised";

export default async function Home() {
  const session = await getServerSession(options);

  return session ? (
    <div className="flex justify-center">
      <Usercard userInfo={session?.user} />
    </div>
  ) : (
    <Unauthorised />
  );
}
