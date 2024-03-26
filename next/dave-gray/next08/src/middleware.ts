// This file runs only on the edge runtime (https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime). Therefore many npm packages that use node APIs cannot be used here.

import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export const middleware = async (req: Request) => {
  const origin = req.headers.get("origin");
  console.log("🚀 ~ middleware ~ origin:", origin); // null

  if (origin && !allowedOrigins.includes(origin)) {
    // prod  condition : (!origin || !allowedOrigins.includes(origin))
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  console.log("🚀 ~ middleware ~ req.method:", req.method); // GET
  console.log("🚀 ~ middleware ~ req.url:", req.url); // http://localhost:3000/_next/static/css/app/layout.css?v=1705832796745

  return NextResponse.next();
};

// https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
export const config = {
  matcher: "/api/:path*", // middleware will run only in this path
};
