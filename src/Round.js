const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = this.deck[0];
  };
  returnCurrentCard(){
    return this.currentCard;
  }
  takeTurn(guess){
    var turn = new Turn(guess, this.currentCard);
    
  }
};

module.exports = Round, Turn;
