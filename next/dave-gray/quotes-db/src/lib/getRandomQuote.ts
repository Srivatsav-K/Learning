import { getAllQuotes } from "./getAllQuotes";

const prevQuoteObj = {
  prevQuoteIndex: 1,
  setPrevQuoteIndex: function (index: number) {
    this.prevQuoteIndex = index;
  },
};

export const getRandomQuote = async () => {
  const quotes = await getAllQuotes();
  console.log("🚀 ~ getRandomQuote ~ quotes:", quotes);

  if (!quotes.length) return null;

  let randomIndex = prevQuoteObj.prevQuoteIndex;
  console.log("🚀 ~ getRandomQuote ~ randomIndex:", randomIndex);

  while (randomIndex === prevQuoteObj.prevQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  prevQuoteObj.setPrevQuoteIndex(randomIndex);

  console.log(
    "🚀 ~ getRandomQuote ~ quotes[randomIndex]:",
    quotes[randomIndex]
  );
  return quotes[randomIndex];
};
