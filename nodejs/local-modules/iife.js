(function (message) {
  const superHero = "Superman";
  console.log("🚀 ~ file: iife.js:3 ~ superHero:", message, superHero);
})("Hello");

(function () {
  const superHero = "Batman";
  console.log("🚀 ~ file: iife.js:8 ~ superHero:", superHero);
})();
