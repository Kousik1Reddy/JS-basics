const Quote = require("inspirational-quotes");

// console.log(Quote.getQuote()); // returns quote (text and author)
// console.log(Quote.getQuote({ author: false }); // return quote without author
// console.log(Quote.getRandomQuote());
const a = Quote.getRandomQuote();
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: a,
    e: "oO",
    T: "U ",
  })
);

// const node = {
//     data : 10,
//     link : null,
// }

