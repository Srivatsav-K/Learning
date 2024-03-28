import { getRandomQuote } from "@/lib/getRandomQuote";
import Quote from "./components/Quote";

export const dynamic = "force-dynamic"; // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate

export default async function Home() {
  const quote = await getRandomQuote();

  return <Quote randomQuote={quote} />;
}
