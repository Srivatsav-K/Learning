# Setting up a db in nextjs

- Get a mysql DB connection string and paste and add it as the `DATABASE_URI` `.env` variable

- Install drizzle ORM <https://orm.drizzle.team/docs/get-started-mysql#mysql-2>

- Create `drizzle.config.ts` file at the root

  ```ts
  import type { Config } from "drizzle-kit";
  import dotenv from "dotenv";

  dotenv.config({ path: ".env.local" });

  export const databseURI = process.env.DATABASE_URI!;

  export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
      uri: databseURI,
    },
  } satisfies Config;
  ```

- To automatically generate drizzle schemas by reading your db. Add this script `"introspect": "drizzle-kit introspect:mysql"`

- drizzle related files are generated under `/drizzle` directory at the root. Copy paste the contents of `schema.ts` into `./src/db/schema.ts`

- Querying data :

  ```ts
  // ./src/lib/getAllQuotes.ts

  import { drizzle } from "drizzle-orm/mysql2";
  import { eq } from "drizzle-orm";
  import mysql from "mysql2/promise";

  import { authors, categories, quotes } from "@/db/schema";
  import { databseURI } from "../../drizzle.config";

  import { Quote } from "@/types/types";

  export async function getAllQuotes(): Promise<Quote[]> {
    const connection = await mysql.createConnection(databseURI);
    const db = drizzle(connection);

    const results = await db
      .select({
        quote: quotes.quote,
        author: authors.author,
        category: categories.category,
      })
      .from(quotes)
      .innerJoin(authors, eq(quotes.authorId, authors.id))
      .innerJoin(categories, eq(quotes.categoryId, categories.id));

    return results;
  }
  ```

- To expose an API via route handler:

  ```ts
  // ./src/app/api/quotes/route.ts
  import { getAllQuotes } from "@/lib/getAllQuotes";
  import { NextResponse } from "next/server";

  export const GET = async () => {
    const quotes = await getAllQuotes();

    return NextResponse.json(quotes);
  };
  ```

## NOTES

- Server components should directly use the lib functions for database interactions and not the API routes that are exposed via route handlers.
- Server components are compiled at build time therefore the APIs must be available at build time. API routes are not available at build time because they are also compiled along with server components.
- However, client components can use the API routes.
