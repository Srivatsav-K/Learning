import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY = process.env.DATA_API_KEY!;

// Wrapper APIs around jsonplaceholder
export const GET = async () => {
  const res = await fetch(DATA_SOURCE_URL, {
    headers: {
      "API-KEY": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: ToDo[] = await res.json();

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  if (!body.userId || !body.title) throw new Error("Missing required fields");

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Error creating todo");

  const data = await res.json();

  return Response.json(data);
};
