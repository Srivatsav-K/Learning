export const getWikiResults = async (searchTerm: string) => {
  const url = new URL("https://en.wikipedia.org/w/api.php");

  url.search = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  }).toString();

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error fetching results");
  }

  return res.json();
};
