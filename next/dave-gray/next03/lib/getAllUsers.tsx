export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  //not including try catch as error boundaries would catch it
  return res.json();
};
