import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        <Link href="users">Users</Link>
      </p>
    </div>
  );
}
