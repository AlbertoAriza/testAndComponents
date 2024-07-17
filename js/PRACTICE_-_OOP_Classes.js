'use strict';

/*               _               _              __              _   _          
  __ ___ _ _  __| |_ _ _ _  _ __| |_ ___ _ _   / _|_  _ _ _  __| |_(_)___ _ _  
 / _/ _ \ ' \(_-<  _| '_| || / _|  _/ _ \ '_| |  _| || | ' \/ _|  _| / _ \ ' \ 
 \__\___/_||_/__/\__|_|  \_,_\__|\__\___/_|   |_|  \_,_|_||_\__|\__|_\___/_||_|
*/
/*  → CREANDO CLASES CON 'CONSTRUCTOR FUNCTIONS' (old school) ←  */
const Vehicle = function(make, speed){
    this.make = make;
    this.speed = speed;
}
Vehicle.prototype.start = function(){
    console.log('starting engine');
    
}
Vehicle.prototype.stop = function(){
    console.log('stopping engine');
}

// creamos una segunda clase para que una herede de la otra más adelante
const Car = function(make, speed, capacity){
    Vehicle.call(this, make, speed);
    this.capacity = capacity;
}

// linkeamos el objeto Car a Vehicle para que herede y quede la cadena Object → Vehicle → Car → bmw
Car.prototype = Object.create(Vehicle.prototype);

// Los métodos de la clase se agregan mediante el método .prototype más el nombre del método que se desea agregar. Este se iguala a la función deseada.
Car.prototype.accelerate = function(){
    this.speed += 10;
}
Car.prototype.brake = function(){
    this.speed =-5;
}

console.log('→  imprimimos la clase Vehicle');
console.log(Vehicle);
console.log(Vehicle.__proto__);
console.log(Vehicle.prototype);
console.log('****************');

console.log('→  imprimimos la clase Car  ←');
console.log(Car);
console.log(Car.__proto__);
console.log(Car.prototype);
console.log('****************');

console.log(' →  imprimimos el objeto bmw ← ');
let bmw = new Car('BMW', 210, 5);
console.log(bmw);
console.log(bmw.__proto__);
bmw.start();
bmw.stop();
console.log(bmw instanceof Car);
console.log(bmw instanceof Vehicle);
console.log(bmw instanceof Object);


console.log('****************');

// → challenge ElectricCar
console.log('→  TESLA CHALLENGE');

const ElectricCar = function(make, speed, capacity, battery){
    Car.call(this, make, speed, capacity, battery);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.accelerate = function(){
    this.speed += 20;
    this.battery -= 1;
    console.log(`'${this.make}' going at ${this.speed}' with a charge of ${this.battery}%`);
    
}

ElectricCar.prototype.chargeBattery = function(chargeTo){
    this.battery = chargeTo;
}

let tesla = new ElectricCar('tesla', 120, 5, 23);
console.log(tesla);
tesla.start();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
console.log(tesla);

console.log('**********************');


/*___ ___   __      _                    
 | __/ __| / /   __| |__ _ ______ ___ ___
 | _|\__ \/ _ \ / _| / _` (_-<_-</ -_|_-<
 |___|___/\___/ \__|_\__,_/__/__/\___/__/
*/
/*  → CREANDO ES6 CLASES (new method) ←  */
class Person {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // ES6 METHODS WILL BE AUTOMATICALLY ADDED TO THE PROTOTYPE PROPERTY OF THE PERSON CLASS
    calcAge(){
        let current = new Date();
        return current.getFullYear() - this.birthYear;
    }
}

console.log('→ imprimimos el objeto jessica ← ');
let jessica = new Person('Jessica', 1990);
console.log(jessica);
console.log(jessica.calcAge());
jessica.age = jessica.calcAge();
jessica.surname = "doe";
Person.prototype.work = function(){
    console.log("I'm working");
}
console.log(jessica);
console.log(jessica.__proto__);
jessica.work();
console.log(Person.prototype);

console.log('**********************');


/*___     _          _         ___ _     _    _    
 | _ \_ _(_)_ ____ _| |_ ___  | __(_)___| |__| |___
 |  _/ '_| \ V / _` |  _/ -_) | _|| / -_) / _` (_-<
 |_| |_| |_|\_/\__,_|\__\___| |_| |_\___|_\__,_/__/
*/

// → CLASE PADRE
class Account{
    #number = Account.#count++;
    #owner;
    #fechaApertura = new Date();
    interest;
    #movements = [];
    static #count = 0;

    constructor(owner){
        this.owner = owner;
    }

    set owner(newOwner){
        if(typeof newOwner === "string" && newOwner.length > 0){
            this.#owner = newOwner;
        }else{
            console.error("This is not a valid name")
        }
    }
    set movement(movement){
        this.#movements.push(movement);
        console.log(this.#movements);
    }

    get number(){
        return this.#number;
    }
    get fechaApertura(){
        let fecha = new Intl.DateTimeFormat("es").format(this.#fechaApertura);
        return fecha;
    }
    get owner(){
        return this.#owner;
    }
    get movement(){
        return this.#movements;
    }

    accountInfo(){
        return `This account number ${this.number} belongs to ${this.owner} and contains ${this.movement.reduce((acc, current) => acc + current, 0)} and it was opened on ${this.fechaApertura}`;
    }
}

// → CLASE HIJO 1
class SavingAccount extends Account{
    constructor(owner){
        super(owner);
        this.interest = 0.02;
    }
}

// → CLASE HIJO 2
class CurrentAccount extends Account{
    constructor(owner){
        super(owner);
        this.interest = 0.02;
    }
}

let account1 = new SavingAccount('Jose');
let account2 = new SavingAccount('Mariola');
let account3 = new CurrentAccount(400);

account1.movement = 1000;

console.log(account1);
console.log(account2);
console.log(account3);


console.log(account1.owner);
console.log(account1.movement);
console.log(account1.accountInfo());

console.log('**********************');


// → FINAL CHALLENGE BLOCK 14 ←
/*  1.- Recreate challenge 3 but this time using ES6 classes.
        Create an EvCl child class of the Car class
        Make the 'charge' property private.
        Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the Car class. Then experiment with chaining.
*/
console.log('→ FINAL CHALLENGE BLOCK 14 ←');

class EvCl extends Car{
    #charge;
    constructor(make, speed, capacity, charge){
        super(make, speed, capacity);
        this.charge = charge;
    }

    set charge(charge){
        this.#charge = charge;
    }
    get charge(){
        return this.#charge;
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        return this;
    }
    brake(){
        this.speed -=10;
        return this;
    }
    chargeBattery(load){
        this.#charge = load;
        return this;
    }
    carInfo(){
        return`This ${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}%`
    }
}

let mazda = new EvCl('Mazda', 120, 5, 23)
console.log(mazda);
mazda.accelerate();

console.log(mazda.carInfo());


console.log('**********************');





