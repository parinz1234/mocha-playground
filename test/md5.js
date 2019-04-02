const md5 = require('../md5')
const expect = require('chai').expect


describe('#md5()', () => {
    context('with string argument', () => {
        it('should compute MD5 hash', done => {
            md5('Glad Chinda', (err, hash) => {
                if (err) return done(err)

                expect(hash)
                    .to.be.a('string')
                    .that.matches(/^[a-f0-9]{32}$/)
                    .and.equal('877dbb93f50eb8a89012e15bd37ee7e4')
                
                done()
            })
        })
    })

    context('with non-string argument', () => {
        it('should throw an error', done => {
            md5(12345, (err, hash) => {
                if(err) {
                    expect(() => { throw err })
                        .to.throw(TypeError, 'Data must be a string or a buffer')
                    return done()
                }

                done()
            })
        })
    })
})