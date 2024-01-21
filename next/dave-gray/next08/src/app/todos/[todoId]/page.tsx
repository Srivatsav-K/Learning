import { fetchTodo, fetchTodos } from "@/app/lib/api/todos";
import { Metadata } from "next";

type Props = {
  params: {
    todoId: string;
  };
};

// export const generateMetadata = async ({
//   params: { todoId },
// }: Props): Promise<Metadata> => {
//   const todo = await fetchTodo(todoId);

//   return {
//     title: todo.title,
//   };
// };

const Todo = async ({ params: { todoId } }: Props) => {
  const todo = await fetchTodo(todoId);

  return (
    <div className="text-center mt-20">
      <h2>Title : {todo.title}</h2>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
};

// export const generateStaticParams = async () => {
//   const todos = await fetchTodos();

//   return todos.map((todo) => {
//     return {
//       todoId: todo.id.toString(),
//     };
//   });
// };

export default Todo;
