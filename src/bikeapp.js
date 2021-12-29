class BikeApp {
    constructor(broken, location){
        this.broken = broken
        this.available = true
        this.location = location
    }

    checkIfBroken(){
        if(this.broken == true){
            this.available = false;
            console.log('Bike is not available to ride')
        }
        else{
            this.available = true;
            console.log('Bike is available to ride')
        }
    }
};

module.exports = BikeApp;