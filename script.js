let quote = document.getElementById("quotePlace");
let button = document.querySelector("button");

let quoteArray = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“You only live once, but if you do it right, once is enough”",
  "“Be the change that you wish to see in the world.”",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * quoteArray.length);
}

button.addEventListener("click", function () {
  quote.textContent = quoteArray[randomNumber()];
});
