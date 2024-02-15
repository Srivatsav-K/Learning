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
