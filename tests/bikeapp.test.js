const BikeApp = require('../src/bikeapp');

describe('Test bikeapp', () => {
    const bike1 = new BikeApp(true, 'New york')
    const bike2 = new BikeApp(false, 'Washingtom DC')

    test('Make sure this.available is false when this.broken is true', () => {
        expect(bike1.broken).toBe(true)
        expect(bike1.location).toBe('New york')
        bike1.checkIfBroken()
        expect(bike1.available).toBe(false)
    })

    test('Make sure this.available is true when this.broken is false', () => {
        expect(bike2.broken).toBe(false)
        expect(bike2.location).toBe('Washingtom DC')
        bike2.checkIfBroken()
        expect(bike2.available).toBe(true)
    })
})
