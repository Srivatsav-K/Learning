import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
import Usercard from "@/components/Usercard";

const Serverpage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div className="flex justify-center">
      <Usercard userInfo={session?.user} />
    </div>
  );
};
export default Serverpage;
