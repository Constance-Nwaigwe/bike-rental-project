class Requiments {
    constructor(age, ridetime){
        this.age = age
        this.ridetime = ridetime
    }

    checkAge(){
        if(this.age < 18){
            console.log('Must be 18 years of age to ride.')
        }
        else{
            console.log('You are old enough to ride.')
        }
    }
    checkLength(){
        if(this.ridetime < 30){
            console.log('Length of ride must be at least 30 minutes long.')
        }
        else if(this.ridetime > 120){
            console.log('Length of ride must be shorter than 121 minutes')
        }
        else{
            console.log(`You have ${this.ridetime} minutes of bike time. Enjoy!!`)
        }
    }
};

module.exports = Requiments;