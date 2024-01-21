import Link from "next/link";
import { fetchTodos } from "../lib/api/todos";

const Todos = async () => {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1>Listing TODO&apos;s - {todos.length}</h1>

      <div>
        <table className="border-2 rounded-2xl">
          <thead>
            <tr className="border">
              <th className="text-slate-400 font-medium text-left p-4">
                Title
              </th>
              <th className="text-slate-400 font-medium text-left p-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td className="hover:cursor-pointer hover:underline p-4 ">
                    <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                  </td>

                  <td
                    className={`p-4 ${
                      todo.completed ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Not completed"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
