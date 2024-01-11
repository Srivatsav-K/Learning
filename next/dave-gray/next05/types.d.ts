type Result = {
  pageid: number;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type Results = {
  [x: string]: Result;
};

type SearchResult = {
  query?: {
    pages?: Results;
  };
};
