const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY = process.env.DATA_API_KEY!;

// Dynamic route handlers
export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.pathname.slice(url.pathname.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    headers: {
      "API-KEY": API_KEY,
    },
  });

  if (!res.ok) throw new Error("Error fetching todos");

  const todo: ToDo = await res.json();

  return Response.json(todo);
};

export const DELETE = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.pathname.slice(url.pathname.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "API-KEY": API_KEY,
    },
  });

  if (!res.ok) throw new Error("Error fetching todos");

  return Response.json({ message: `Todo ${id} deleted` });
};
