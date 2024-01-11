import Heading from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Heading>Welcome Home</Heading>

      <Heading
        variant="h2"
        customClasses="hover:border-b-2 hover:border-dashed hover:border-blue-400"
      >
        <Link href="/users">See Users</Link>
      </Heading>
    </div>
  );
}
