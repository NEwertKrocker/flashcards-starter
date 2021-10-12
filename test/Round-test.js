const chai = require('chai');
const assert = chai.assert;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function(){
  it('should be a function', function() {
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.isFunction(Round);
  });
  it('should be an instance of Round', function() {
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.instanceOf(round, Round);
  });
  it('should begin with a currentCard, which is the first card in the Deck', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.equal(round.currentCard, round.deck[0]);
  });
  it('should be able to return the current card', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.equal(round.returnCurrentCard(), round.deck[0]);
  });
  it('should be able to create new Turn instances when a guess is made', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.exists(turn);

  });

  // it should update the turn count when a guess is made
  // it should queue up the next card
  // it should record whether the guess is correct or incorrect
  // it should store incorrect guesses in an array
  // it should return feedback if the guess is correct
  // it should return feedback if the guess is incorrect
  // it should be able to calculate and return a percentage of correct guesses
  // it should be able to print an end-round message with a total score for the round

});
