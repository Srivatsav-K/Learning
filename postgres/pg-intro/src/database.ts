import { Client } from "pg";

export const getClient = async () => {
  try {
    const client = new Client();

    await client.connect();

    return client;
  } catch (e) {
    console.error("Error connecting to db", e);
  }
};
