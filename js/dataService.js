//declaring this page to be an angular model, connected via quoteBook, it's a service, it's named dataService, and accompanied
//by a function
angular.module('quoteBook').service('dataService', function() {

//The data we want to display in an array of objects
var quotes = [
  // {text: "Life is like a box of chocolates, you'll never know what you're going to get.", author: "unknown"},
  // {text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
  // {text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"},
  // {text: "What we think, we become.", author: "Buddha"},
  // {text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", author: "Francic of Assisi"},
  // {text: "Happiness is not something that you postpone for the future; it is something you design for the present.", author: "Jim Rohn"}
];

//global function(because of the this) that will return all the quote objects
this.getQuotes = function() {
  JSON.parse(localStorage.getItem("quotes"));
  if(!quotes || quotes.length < 1) {
    quotes = [
      {text: "Life is like a box of chocolates, you'll never know what you're going to get.", author: "unknown"},
      {text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr."},
      {text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"},
      {text: "What we think, we become.", author: "Buddha"},
      {text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", author: "Francic of Assisi"},
      {text: "Happiness is not something that you postpone for the future; it is something you design for the present.", author: "Jim Rohn"}
    ];
  }
  return quotes;
};

//global function that allows us to add a quote and tests if it has all the necessary information. will push to array
this.addQuote = function(newQuote) {
  if(newQuote.text && newQuote.author) {
    quotes.push(newQuote);
    return true;
  }
  return false;
};

//global function that allows us to remove the quote if the parameter meets the quotes.text[i] requirement
this.removeQuote = function(textToRemove) {
  for(var i = 0; i < quotes.length; i++) {
    if(quotes[i].text === textToRemove) {
      quotes.splice(i--, 1);
      localStorage.setItem("quotes", JSON.stringify(quotes));
    }
  }
};

//storing in local storage. sending the array in as a string and returning the array as a parse
localStorage.setItem("quotes", JSON.stringify(quotes));
JSON.parse(localStorage.getItem("quotes"));

});
