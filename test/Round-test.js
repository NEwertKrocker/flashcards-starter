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

    assert.equal(round.currentCard, round.deck.cards[0]);
  });

  it('should be able to return the current card', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.equal(round.returnCurrentCard(), round.deck.cards[0]);
  });

  it('should update the turn count when a guess is made', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);

    assert.equal(round.turns, 0);

    round.takeTurn();

    assert.equal(round.turns, 1);

    round.takeTurn();
    round.takeTurn();

    assert.equal(round.turns, 3);
  });

  it('should queue up the next card when a turn is taken', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.equal(round.turns, 0);
    assert.equal(round.currentCard, round.deck.cards[0]);

    round.takeTurn();

    assert.equal(round.turns, 1);
    assert.equal(round.currentCard, round.deck.cards[1]);
  });

  it('should be able to store incorrect guesses', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.deepEqual(round.incorrectGuesses, []);

    var turn = round.takeTurn('string');

    assert.deepEqual(round.incorrectGuesses, [1]);

    var turn2 = round.takeTurn('not answering this');

    assert.deepEqual(round.incorrectGuesses, [1, 4]);
  });

  it('should return feedback whether a guess is correct or incorrect', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var deck = new Deck([card1, card2]);
    var round = new Round(deck);

    assert.equal(round.takeTurn('string'), 'incorrect!');

    assert.equal(round.takeTurn('got a haircut'), 'correct!');
  });

  it('should be able to calculate and return a percentage of correct guesses', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);

    round.takeTurn('string');
    round.takeTurn('not answering this');
    round.takeTurn('you can\'t make me');

    assert.equal(round.calculatePercentCorrect(), 0);

    var round2 = new Round(deck);

    round2.takeTurn('a Ring of Power');
    round2.takeTurn('got a haircut');
    round2.takeTurn('Ghostbusters');

    assert.equal(round2.calculatePercentCorrect(), 100);

    var round3 = new Round(deck);

    round3.takeTurn('a Ring of Power');
    round3.takeTurn('got a haircut');
    round3.takeTurn('I\'m tired of this foolishness');

    assert.equal(round3.calculatePercentCorrect(), 66);
  });

  it('should be able to print an end-round message with a total score', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);

    round.takeTurn('a Ring of Power');
    round.takeTurn('got a haircut');
    round.takeTurn('WRONG ANSWER');

    assert.equal(round.endRound(), '** Round over! ** You answered 66% of the questions correctly!');
  });
});
