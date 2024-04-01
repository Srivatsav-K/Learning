import { config } from "dotenv";
import { getClient } from "./database";

config({ path: "../.env" });

const getUserDetailsWithAddress = async () => {
  const client = await getClient();

  const query = `
    SELECT
      u.id,
      u.username,
      a.street,
      a.city,
      a.country,
      a.pincode
    FROM
      users AS u
      LEFT JOIN addresses AS a ON u.id = a.user_id
    ORDER BY
      id;
  `;

  const data = await client?.query(query);

  console.log(data?.rows);

  await client?.end();
};

getUserDetailsWithAddress();
