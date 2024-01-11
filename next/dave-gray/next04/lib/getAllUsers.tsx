const getAllUsers = async (): Promise<User[]> => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
export default getAllUsers;
