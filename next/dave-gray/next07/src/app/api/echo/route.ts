import { NextResponse } from "next/server";

// If we use the req obj with the GET method route handlers are evaluated dynamically
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const obj = Object.fromEntries(searchParams);

  return NextResponse.json(obj);
};
