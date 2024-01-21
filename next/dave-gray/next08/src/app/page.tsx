import Link from "next/link";

export default async function Home() {
  return (
    <div className="text-center">
      <Link href={"/todos"}>Todos</Link>
    </div>
  );
}
