import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/* 
  - By default all pages will be cached 
  - This means routes are statically rendered and data requests are cached unless you opt out.

  - If we want to fetch the updated data we have to specify a revalidate interval either in the fetch request or at the page/layout level by exporting a revalidate variable

  - To see the updated data we need to refresh the app twice after the revalidate interval has passed to see the updated data. 
    - First reload triggers the revalidation
    - Second reload fetches the updated data
  - If we want to fetch the updated data without refreshing the app twice but only once we can use the revalidatePath method. Where we call an API end point that will trigger the revaldiation

  - Time-based Revalidation 
    fetch('https://...', { next: { revalidate: 3600 } }) // Revalidate at most every hour

  - On-demand Revalidation
    revalidatePath allows you manually revalidate data and re-render the route segments below a specific path in a single operation. Calling the revalidatePath method revalidates the Data Cache, which in turn invalidates the Full Route Cache.
*/

// on-demand Revalidation
export const GET = async (req: NextRequest) => {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.CACHE_INVALIDATE_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = req.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
};
