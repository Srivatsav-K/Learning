export const fetchTodos = async (): Promise<ToDo[]> => {
  const response = await fetch("http://localhost:3000/api/todos");
  const data = await response.json();
  return data;
};

export const fetchTodo = async (id: string): Promise<ToDo> => {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`);
  const data = await response.json();
  return data;
};
