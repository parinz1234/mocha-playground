const sinon = require('sinon')
const expect = require('chai').expect
const { getRandomNumber, getPow } = require('../src/stub')

describe('stub', () => {
    let stubRandom
    let stubFloor
    
    it('Should return stub correctly', () => {
        stubRandom = sinon.stub(Math, `random`).callsFake(() => 0.55)
        stubFloor = sinon.stub(Math, `floor`).withArgs(6.5).returns(6)
        const number = getRandomNumber()
      
        expect(stubRandom.callCount).equal(1)
        expect(stubFloor.callCount).equal(1)
        expect(stubFloor.withArgs(6.5).callCount).equal(1)
        expect(stubFloor.calledWith(6.5)).equal(true)
        expect(stubFloor.calledOnceWith(6.5)).equal(true)
    })
})
  