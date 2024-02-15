// This file runs only on the edge runtime (https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime). Therefore many npm packages that use node APIs cannot be used here.

import { NextResponse } from "next/server";

export const middleware = async (req: Request) => {
  console.log("Middleware!");
  console.log(req.method); // GET
  console.log(req.url); // http://localhost:3000/_next/static/css/app/layout.css?v=1705832796745

  const origin = req.headers.get("origin");

  console.log(origin); // null

  return NextResponse.next();
};

export const config = {
  matcher: "/api/:path*", // middleware will run only in this path
};
