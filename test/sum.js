const sum = require('../sum')
const expect = require('chai').expect


describe('#sum()', () => {
    context('without arguments', () => {
        it('shoud return 0', () => {
            expect(sum()).to.equal(0)
        })
    })

    context('with number arguments', () => {
        it('should return sum of arguments', () => {
            expect(sum(1, 2 ,3 ,4 ,5)).to.equal(15)
        })

        it('shoud return argument when only one argument is passed', () => {
            expect(sum(5)).to.equal(5)
        })
    })

    context('with non-number arguments', () => {
        it('should throw error', () => {
            expect(function () {
                sum(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })
})