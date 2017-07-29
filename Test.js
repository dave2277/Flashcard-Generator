
var fs = require('fs');
var stuff = fs.readFileSync('basiccards.json');
var cards = JSON.parse(stuff);
console.log(words[0].front);