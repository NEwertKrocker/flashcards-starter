const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
  it('should be a function', function(){
    var turn = new Turn();
    assert.isFunction(turn);
  })
  it('should be an instance of Turn', function(){
    var turn = new Turn();
    assert.instanceOf(turn, Turn);
  })
  it('should be able to return a guess', function(){
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.returnGuess(), 'burgers');
  })
  it('should be able to return a card', function(){
    var card = new Card(1, `What's for dinner tonight?`, ['burgers', 'spaghetti', 'curry'], 'curry');
    var turn = new Turn('burgers', card);
    assert.equal(turn.returnCard(), card);
  })
  // evaluateGuess method returns a boolean indicating correct or not HAPPY/SAD
  // giveFeedback returns "correct!"/"incorrect!" based on prev. HAPPY/SAD

});
