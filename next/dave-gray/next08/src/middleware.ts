import { NextResponse } from "next/server";

export const middleware = async (req: Request) => {
  console.log("Middleware!");
  console.log(req.method); // GET
  console.log(req.url); // http://localhost:3000/_next/static/css/app/layout.css?v=1705832796745

  const origin = req.headers.get("origin");

  console.log(origin); // null

  return NextResponse.next();
};
