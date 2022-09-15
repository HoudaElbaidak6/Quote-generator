let url = "https://type.fit/api/quotes";
let button = document.querySelector("button");
let quotePhrase = document.querySelector("h1");
let authorName = document.querySelector("h4");
async function getQuote(url) {
  let resulat1 = await fetch(url);
  let resulat2 = await resulat1.json();
  let randomNumber = Math.floor(Math.random() * resulat2.length);
  let quote = resulat2[randomNumber];
  console.log(quote);
  quotePhrase.textContent = `“${quote.text}”`;
  authorName.textContent = quote.author;
}

getQuote("https://type.fit/api/quotes");

button.addEventListener("click", function () {
  getQuote(url);
});
