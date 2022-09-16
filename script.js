let url = "https://type.fit/api/quotes";
let button = document.querySelector("button");
let quotePhrase = document.querySelector("h1");
let authorName = document.querySelector("h4");
let quotee = [];
async function getQuote(url) {
  try {
    let quote = await fetch(url);
    quotee = await quote.json();
    getRandomQuote();
  } catch (error) {
    quotePhrase.textContent = "Erreur de connexion ";
  }
}

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotee.length);
  let quote1 = quotee[randomNumber];
  console.log(quote1);
  quotePhrase.textContent = `“${quote1.text}”`;
  /*   if (quote1.author == null) {
    authorName.textContent = "unknown";
  } else {
    authorName.textContent = quote1.author;
  } */

  authorName.textContent = quote1.author == null ? "Unknown" : quote1.author;
}

getQuote("https://type.fit/api/quotes");

button.addEventListener("click", getRandomQuote);
