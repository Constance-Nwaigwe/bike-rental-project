const { Users, Equipment } = require('../src/users');

describe('Testing users class', () => {

    const user1 = new Users('Jane Doe', 1234567891234567, 24)
    const user2 = new Users('Bob Ross', 123456789123456, 25)

    test('Check that payment limitation is working', () => {
        expect(user1.username).toBe('Jane Doe')
        expect(user1.card).toBe(1234567891234567)
        expect(user1.payment).toBe(24)
        user1.checkPayment()
        user1.checkCard()
    })
    test('Check if card number limitation is working', () => {
        expect(user2.username).toBe('Bob Ross')
        expect(user2.card).toBe(123456789123456)
        expect(user2.payment).toBe(25)
        user2.checkPayment()
        user2.checkCard()
    })
})

describe('Test that Equipment class inhertes from Users class', () => {
    //const user3 = new Users('Mary Johnson', 2234562891232562, 30)
    const equ1 = new Equipment('Mary Johnson',false,true)
    const equ2 = new Equipment('Jake Johnson',true,false)

    test('Check hashelmet function', () => {
        expect(equ1.username).toBe('Mary Johnson')
        expect(equ1.helmet).toBe(false)
        expect(equ1.bag).toBe(true)
        equ1.hashelmet()
    })
    test('Check hashelmet function', () => {
        expect(equ2.username).toBe('Jake Johnson')
        expect(equ2.helmet).toBe(true)
        expect(equ2.bag).toBe(false)
        equ2.hashelmet()
    })
})
