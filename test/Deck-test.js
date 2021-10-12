const chai = require('chai');
const assert = chai.assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    var deck = new Deck();
    assert.isFunction(Deck);
  });
  it('should be an instance of Deck', function() {
    var deck = new Deck();
    assert.instanceOf(deck, Deck);
  });
  it('should be able to store cards fed into it', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);

    assert.equal(deck.cards[0], card1);
    assert.equal(deck.cards[1], card2);
    assert.equal(deck.cards[2].correctAnswer, "Ghostbusters");
  })
  it('should be able to count cards', function(){
    var card1 = new Card(1, "What has it got in its pocketses?", ["string", "loose change", "a Ring of Power"], 'a Ring of Power');
    var card2 = new Card(4, "What's new pussycat?", ["not much", "got a haircut", "got my doctorate"], 'got a haircut');
    var card3 = new Card(7, "Who you gonna call?", ["metropolitan transit authority", "my uncle Vinny", "Ghostbusters"], 'Ghostbusters');
    var deck = new Deck([card1, card2, card3]);
    var deck2 = new Deck([card1, card3]);

    assert.equal(deck.countCards(), 3);
    assert.equal(deck2.countCards(), 2);
  })

});
