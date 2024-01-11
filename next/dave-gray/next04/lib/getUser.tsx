const getUser = async (userId: string): Promise<User | undefined> => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const res = await fetch(url);

  if (!res.ok) {
    //throw new Error("Failed to fetch user");
    return undefined;
  }

  return res.json();
};
export default getUser;
