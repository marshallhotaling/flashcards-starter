const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');
const {createCard} = require("../src/card");

describe('turn', function() {
    it('should be a function', function() {
        console.log(evaluateGuess)
        expect(evaluateGuess).to.be.a('function');
    });

    it('should cheak if question is equal to correct ', function() {
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        let guess = "object";
        const choice= evaluateGuess(guess,card.correctAnswer);
        expect(choice).to.be.a("boolean");
        expect(choice).to.equal(true)
    });
});