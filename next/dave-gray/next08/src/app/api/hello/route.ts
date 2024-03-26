import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export const GET = async (req: Request) => {
  const origin = req.headers.get("origin");

  const remainingRequests = await limiter.removeTokens(1);
  console.log("🚀 ~ GET ~ remainingRequests:", remainingRequests);

  if (remainingRequests < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "x-ratelimit-remaining": remainingRequests.toString(),
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }

  return new NextResponse(
    JSON.stringify({
      message: "Hello, Next.js!",
    }),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    }
  );
};
