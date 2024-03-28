import { getAllQuotes } from "./getAllQuotes";

export const getRandomQuote = async (id: string) => {
  const quotes = await getAllQuotes();
  if (!quotes.length) return null;

  const prevQuoteId = +id;

  // if data is requested with an id, return any other data whose id is different from the requested id
  let randomId = prevQuoteId;
  const ids = quotes.map((quote) => quote.id);

  while (randomId === prevQuoteId) {
    randomId = ids[Math.floor(Math.random() * ids.length)];
  }

  return quotes.find((quote) => quote.id === randomId);
};
