const runCallback  = require('../spy')
const sinon = require('sinon')
const expect = require('chai').expect

describe('Shoud return spy correctly', () => {
    it('Shoud return spy correctly', () => {
        const spyCallBack = sinon.spy()
        runCallback(spyCallBack)
        expect(spyCallBack.callCount).to.equal(2)
    })
})


