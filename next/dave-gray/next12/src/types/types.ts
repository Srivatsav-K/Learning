import { type JSXElementConstructor, type ReactElement } from "react";

type Tree = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
};

export type GithubResponseObj = {
  sha: string;
  url: string;
  tree: Tree[];
};

export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

export type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
