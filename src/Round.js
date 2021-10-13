const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard(){
    return this.currentCard;
  }
  takeTurn(guess){
    var turn = new Turn(guess, this.currentCard);
    var currentCardIndex = this.deck.cards.indexOf(this.currentCard);
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[currentCardIndex + 1];
    return turn.giveFeedback();
  }
  calculatePercentCorrect(){
    var percentCorrect = (this.deck.cards.length - this.incorrectGuesses.length);
    return Math.floor((percentCorrect / this.deck.cards.length) * 100);
  }
  endRound(){
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;
