const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
    this.cardset = prototypeQuestions;
  }
  start(){
    this.cardset.forEach(card => this.cards.push(new Card(card["id"], card["question"], card["answers"], card["correctAnswer"])))
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
