# REST API & Middlewares

## REST API

- REST API's can be built & exposed using next.js.
- The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

## How to create

```
📦api
┗ 📂todos
  ┣ 📂[id]
  ┃ ┗ 📜route.ts
  ┗ 📜route.ts
```

### Export a named function named after the HTTP method.

```ts
// file - /app/api/todos/route.ts

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY = process.env.DATA_API_KEY!;

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

//How to access this => POST "http://localhost:3000/api/todos"
```

### Dynamic route handlers

```ts
// file - /app/api/todos/[id]/route.ts

// Dynamic route handlers

type Props = {
  params: {
    id: string;
  };
};
export const GET = async (req: Request, { params: { id } }: Props) => {
  const url = new URL(req.url);
  //const id = url.pathname.slice(url.pathname.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    headers: {
      "API-KEY": API_KEY,
    },
  });

  if (!res.ok) throw new Error("Error fetching todos");

  const todo: ToDo = await res.json();

  return Response.json(todo);
};

// How to access => GET "http://localhost:3000/api/todos/1"
```

## Middlewares

- Add `middleware.ts` at the root. At the same level as the app dir.

```ts
export const middleware = async (req: Request) => {
  console.log("Middleware!");
  console.log("🚀 ~ middleware ~ req.method:", req.method); // GET
  console.log("🚀 ~ middleware ~ req.url:", req.url); // http://localhost:3000/_next/static/css/app/layout.css?v=1705832796745

  const origin = req.headers.get("origin");
  console.log("🚀 ~ middleware ~ origin:", origin); // null

  return NextResponse.next();
};
```

- By default all requests to the app will go through this middleware
- We can limit this by either by exporting a config variable with a matcher or by doing conditional checks in the middleware function only on certain paths.

```ts
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
export const config = {
  matcher: "/api/:path*", // middleware will run only in this path
};
```

- This file runs only on the edge runtime (<https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime>). Therefore many npm packages that use node APIs cannot be used here.
- For example : Rate limiter `limiter` package can't be used in the middleware as it has a dependency on node.js. Therefore we must add it in the api folder where we defined our api.

```ts
// /api/config/limiter.ts
import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
```

```ts
// /api/hello/route.ts
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

  return new Response("Hello, Next.js!");
};
```

## CORS

- Next js by default adds `OPTIONS` method if it is not specified
- We can implement CORS in the `middleware.ts` file

```ts
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export const middleware = async (req: Request) => {
  const origin = req.headers.get("origin");
  console.log("🚀 ~ middleware ~ origin:", origin);

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

  console.log("🚀 ~ middleware ~ req.method:", req.method);
  console.log("🚀 ~ middleware ~ req.url:", req.url);

  return NextResponse.next();
};
```

- Now we also need to add CORS headers in each API's response

```ts
// /src/api/hello/route.ts
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
```
