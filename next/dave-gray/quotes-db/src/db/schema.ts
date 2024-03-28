import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  unique,
  int,
  varchar,
  index,
  foreignKey,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const authors = mysqlTable(
  "authors",
  {
    id: int("id").autoincrement().notNull(),
    author: varchar("author", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      authorsId: primaryKey({ columns: [table.id], name: "authors_id" }),
      author: unique("author").on(table.author),
    };
  }
);

export const categories = mysqlTable(
  "categories",
  {
    id: int("id").autoincrement().notNull(),
    category: varchar("category", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      categoriesId: primaryKey({ columns: [table.id], name: "categories_id" }),
      category: unique("category").on(table.category),
    };
  }
);

export const quotes = mysqlTable(
  "quotes",
  {
    id: int("id").autoincrement().notNull(),
    quote: varchar("quote", { length: 255 }).notNull(),
    authorId: int("author_id")
      .notNull()
      .references(() => authors.id),
    categoryId: int("category_id")
      .notNull()
      .references(() => categories.id),
  },
  (table) => {
    return {
      authorId: index("author_id").on(table.authorId),
      categoryId: index("category_id").on(table.categoryId),
      quotesId: primaryKey({ columns: [table.id], name: "quotes_id" }),
      quote: unique("quote").on(table.quote),
    };
  }
);
