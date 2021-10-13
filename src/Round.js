const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
  };
  returnCurrentCard(){
    return this.currentCard;
  }
  takeTurn(guess){
    var turn = new Turn(guess, this.currentCard);
    var currentCardIndex = this.deck.cards.indexOf(this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[currentCardIndex + 1];
    return turn;
  }
};

module.exports = Round;
