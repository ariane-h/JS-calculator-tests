var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should add numbers', function(){
    calculator.add(1)
    calculator.operatorClick('+')
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should subtract numbers', function(){
    calculator.add(7)
    calculator.operatorClick('-')
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply numbers', function(){
    calculator.add(3)
    calculator.operatorClick('*')
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide numbers', function(){
    calculator.add(21)
    calculator.operatorClick('/')
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concenate multiple number button clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 32)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.numberClick(0)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.add(4)
    assert.equal(calculator.runningTotal, 12)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1)
    calculator.numberClick(0)
    calculator.operatorClick('+')
    calculator.numberClick(6)
    calculator.clearClick()
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.add(4)
    assert.equal(calculator.runningTotal, 14)
  })

});
