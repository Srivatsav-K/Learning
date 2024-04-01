import { config } from "dotenv";
import { getClient } from "./database";

config({ path: "../.env" });

const createAddressesTable = async () => {
  const client = await getClient();

  const queryString = `
    CREATE TABLE addresses (
        id serial PRIMARY KEY,
        user_id integer NOT NULL,
        city varchar(100) NOT NULL,
        country varchar(100) NOT NULL,
        street varchar(255) NOT NULL,
        pincode varchar(20),
        created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
  `; // ON DELETE CASCADE -> (when users are deleted associated addresses are also deleted)

  const query = await client?.query(queryString);

  await client?.end();
};

const fetchAddresses = async () => {
  const client = await getClient();

  const query = await client?.query("SELECT * FROM addresses");

  console.log(query?.rows);

  await client?.end();
};

//createAddressesTable();
fetchAddresses();
