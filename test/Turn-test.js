const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
  it('should be a function', function(){
    var turn = new Turn();
    assert.isFunction(turn);
  })
  it.skip('should be an instance of Turn', function(){
    var turn = new Turn();
    assert.instanceOf(turn, Turn);
  })
  it.skip('should be able to return a guess', function(){
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.returnGuess(), 'burgers');
  })
  it.skip('should be able to return a card', function(){
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.returnCard(), card);
  })
  it.skip('should be able to evaluate whether a guess is correct or not', function() {
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.evaluateGuess(), false);

    var turn2 = new Turn('curry', card);
    assert.equal(turn2.evaluateGuess(), true);
  })
  it.skip('should be able to relay to the user whether they\'re correct', function(){
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.giveFeedback(), "incorrect!");

    var turn2 = new Turn('curry', card);
    assert.equal(turn2.giveFeedback(), "correct!");

  })
});
