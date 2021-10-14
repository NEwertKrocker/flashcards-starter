const chai = require('chai');
const assert = chai.assert;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function(){
  it('should keep track of the current round', function(){
    var game = new Game();

    assert.exists(game.currentRound);
  });

  it('should create cards from the dataset', function(){
    var card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
    var game = new Game();

    game.start();

    assert.deepEqual(game.cards[0], card1)
  });

  it('should put cards into a deck', function(){
    var card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    var game = new Game();

    game.start();

    assert.deepEqual(game.deck.cards[0], card1)
  });

  it('should create a new Round using the deck', function(){
    var card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
    var game = new Game();

    game.start();

    assert.instanceOf(game.currentRound, Round);
  });
});
