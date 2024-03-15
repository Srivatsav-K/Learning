export type Tag = string;

export type Post = {
  id: number;
  title: string;
  tags?: Tag[];
};
