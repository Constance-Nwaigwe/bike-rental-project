class Users {
    constructor(username, cardnum, payment){
        this.username = username
        this.card = cardnum
        this.payment = payment
    }

    checkPayment(){
        if(this.payment < 25){
            console.log('Payment needs to be 25 dollars or high. Please try again.')
        }
        else{
            console.log('Enjoy you bike ride!!')
        }
    }
    checkCard(){
        if(this.card.toString().length != 16){
            console.log('Invalid Card number')
        }
        else{
            console.log('Card Accepted')
        }
    }
};

class Equipment extends Users{
    constructor(username, helmet, bag){
        super(username)
        this.helmet = helmet
        this.bag = bag
    }

    hashelmet(){
        if(!this.helmet){
            console.log('You need to wear a helmet.')
        }
        else{
            console.log('You are ready to ride!!')
        }
    }
};

module.exports = { Users, Equipment };