"use client";

import { Poppins, Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { Quote as QuoteType } from "@/types/types";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Quote() {
  // const router = useRouter();
  const [fade, setFade] = useState(false);

  const [quote, setQuote] = useState<QuoteType | null | undefined>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const getQuote = async () => {
      const res = await fetch(`/api/random-quote/${id}`, { cache: "no-store" });
      const json = await res.json();
      setQuote(json);
    };

    getQuote();
  }, [id]);

  return (
    <section
      className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {!quote ? (
        <h1 className="text-center">No data found</h1>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="p-3 mb-4 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white mt-6"
              onClick={() => {
                setFade(true);
                setTimeout(() => setId(quote.id), 1000);
                // setTimeout(() => router.refresh(), 1000); // router.refresh(): Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).
                setTimeout(() => setFade(false), 1200);
              }}
            >
              Refresh Quote
            </button>

            <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
              Author: {quote?.author}
            </p>

            <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
              Category: {quote?.category}
            </p>
          </div>

          <div className="grow mt-24">
            <p
              className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}
            >
              {quote?.quote}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
