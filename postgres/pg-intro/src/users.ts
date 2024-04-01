import { config } from "dotenv";
import { getClient } from "./database";

config({ path: "../.env" });

const createUsersTable = async () => {
  const client = await getClient();

  const users = await client?.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      "password" VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log(users);

  await client?.end();
};

const inserInitialUsersUnsafe = async () => {
  //! SQL injection
  const client = await getClient();

  const query = await client?.query(`
    INSERT INTO users (username, email, "password")
      values ('user1','user1@gmail.com','secret123'),
      ('user2','user2@gmail.com','secret123'),
      ('user3','user3@gmail.com','secret123'),
      ('user4','user4@gmail.com','secret123')
    RETURNING *
  `);

  console.log(query?.rows);

  await client?.end();
};

const insertUserSafe = async (
  username: string,
  email: string,
  password: string
) => {
  const client = await getClient();

  // user input is part of the "VALUES" in sql query instead of directly being in the sql query
  const parametrisedQuery = `
    INSERT INTO users (username, email, "password")
      VALUES ($1, $2, $3)
      RETURNING *
  `;
  const values = [username, email, password];

  const query = await client?.query(parametrisedQuery, values);

  console.log(query?.rows);

  await client?.end();
};

const fetchUsers = async () => {
  const client = await getClient();

  const users = await client?.query("SELECT * FROM users");

  console.log(users?.rows);

  await client?.end();
};

const getUser = async (id: number) => {
  const client = await getClient();

  const queryString = `SELECT * FROM users WHERE id = $1`;
  const values = [id];

  const query = await client?.query(queryString, values);

  console.log(query?.rows?.[0] || null);

  await client?.end();
};

const updateUserEmail = async (id: number, email: string) => {
  const client = await getClient();

  const queryString = `
    UPDATE 
      users
    SET 
      email = $2
    WHERE
      id = $1
    RETURNING *
  `;
  const values = [id, email];

  const query = await client?.query(queryString, values);

  console.log(query?.rows?.[0] || null);

  await client?.end();
};

const deleteAllUsers = async () => {
  const client = await getClient();

  const query = await client?.query(`
    DELETE FROM users
  `);

  console.log(query);

  await client?.end();
};

const dropUsersTable = async () => {
  const client = await getClient();

  const query = await client?.query(`
    DROP TABLE users
  `);

  console.log(query);

  await client?.end();
};

// createUsersTable();
//insertUserSafe("user1", "user2@gmail.com", "Secret123");
fetchUsers();
//getUser(1);
//updateUserEmail(1, "user1@gmail.com");
//deleteAllUsers();
// dropUsersTable();
