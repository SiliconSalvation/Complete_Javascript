'use strict';


class Car {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;

        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;

        console.log(`${this.make} is going at ${this.speed} km/h`);

        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }    
};

class EV extends Car{

    constructor(make, speed, charge) {
        super(make, speed);

        this.charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.charge--;

        console.log(`${this.make} is going ${this.speed} km/h, with a charge of ${this.charge}`);
        return this;
    }

    chargeBattery(value) {
        this.charge = value;
        return this;
    }
};

const rivianCar = new EV('Rivian', 120, 23);

rivianCar.accelerate().accelerate().brake().chargeBattery(50).accelerate().brake();

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.brake = function() {
//     this.speed -= 5;

//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;

//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function(make, speed, batteryCharge) {
//     Car.call(this, make, speed);

//     this.batteryCharge = batteryCharge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeTo = function(charge) {
//     this.batteryCharge = charge;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.batteryCharge -= 1;

//     console.log(`${this.make} is going ${this.speed} km/h, with a charge of ${this.batteryCharge}`);
// };

// con 

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 65);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();

// bmw.brake



// const ford = new Car('Ford', 120);
// ford.accelerate();

// console.log(ford.speedUS);
// ford.speedUS = 100;

// console.log(ford.speedUS);
// ford.brake();