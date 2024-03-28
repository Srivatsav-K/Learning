import { NextResponse } from "next/server";
import { getAllQuotes } from "@/lib/getAllQuotes";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const quotes = await getAllQuotes();

  return NextResponse.json(quotes);
};
