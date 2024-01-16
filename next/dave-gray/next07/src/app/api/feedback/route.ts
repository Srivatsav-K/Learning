import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

// Route handler evaluated dynamically as it is a HTTP POST method
export const POST = async (req: Request) => {
  const body: Feedback = await req.json();
  console.log("🚀 ~ POST ~ body:", body);

  // send the body as response
  return NextResponse.json(body);
};
