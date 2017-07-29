
var inquirer = require("inquirer");
var basic = require("./basiccard.js");
var cloze = require("./ClozeCard.js");
var fs = require('fs');
var stuff = fs.readFileSync('basiccards.json');
var cards = JSON.parse(stuff);
var basicFlash;
var htmlCards = [];
var cssCards = [];
var javascriptCards = [];
var nodeCards = [];
var card;

firstPrompt();

    function firstPrompt() {
        inquirer.prompt([
            {
                type: "list",
                name: "flashcards",
                message: "Which kind of flash card would you like to use?",
                choices: ["NORMAL", "CLOZE"]
            },
            {
                type: "list",
                name: "categories",
                message: "Choose Your Category:",
                choices: ["HTML", "CSS", "JAVASCRIPT", "NODE"]
            },

        ])
            .then(function (answers) {
            // console.log(JSON.stringify(answers, null, '  '));
                if (answers.flashcards === "NORMAL") {

                    makeBasic(answers.categories);

                } else if (answers.flashcards === "CLOZE") {

                // makeCloze(answers.categories);
                }
            });

        };

    function makeBasic(category) {

        //loop through the cards array and make a smaller arrays for each of the
        if (category === 'HTML') {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].topic === 'html') {
                    basicFlash = new basic(cards[i].front, cards[i].back);
                    htmlCards.push(basicFlash);
                    var htmlCard = htmlCards[Math.floor(Math.random() * htmlCards.length)];
                    card = htmlCard;
                }
            }
        }   else if (category === 'CSS') {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].topic === 'css') {
                    basicFlash = new basic(cards[i].front, cards[i].back);
                    cssCards.push(basicFlash);
                    var cssCard = cssCards[Math.floor(Math.random() * cssCards.length)];
                    card = cssCard;
                }
            }
        }   else if (category === 'JAVASCRIPT') {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].topic === 'javascript') {
                    basicFlash = new basic(cards[i].front, cards[i].back);
                    javascriptCards.push(basicFlash);
                    var javascriptCard = javascriptCards[Math.floor(Math.random() * javascriptCards.length)];
                    card = javascriptCard;
                }
            }
        }   else if (category === 'NODE') {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].topic === 'node') {
                    basicFlash = new basic(cards[i].front, cards[i].back);
                    nodeCards.push(basicFlash);
                    var nodeCard = nodeCards[Math.floor(Math.random() * nodeCards.length)];
                    card = nodeCard;
                }
            }
        }
            inquirer.prompt([
                {
                    type: "input",
                    name: "question",
                    message: card.front
                }
            ])
                .then(function (answers) {


                    if (answers.question === card.back) {
                        console.log("Correct!");
                        makeBasic(category);
                    } else {
                        console.log("That's incorrect.  The correct answer is: " + card.back)
                        makeBasic(category);
                    }

                });
        }

            function makeCloze() {
                var clozeFlash = new ClozeCard(x, y, z)
            }

