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
      id: quotes.id,
      quote: quotes.quote,
      author: authors.author,
      category: categories.category,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  return results;
}
