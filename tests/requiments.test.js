const Requiments = require('../src/requiments');

describe('Testing requirements', () => {
    const req1 = new Requiments(21,20)
    const req2 = new Requiments(17,50)

    test('Check if time limitation is working', () => {
        expect(req1.age).toBe(21)
        expect(req1.ridetime).toBe(20)
        req1.checkAge()
        req1.checkLength()
    })

    test('Check if age limitation is working', () => {
        expect(req2.age).toBe(17)
        expect(req2.ridetime).toBe(50)
        req2.checkAge()
        req2.checkLength()
    })
})
