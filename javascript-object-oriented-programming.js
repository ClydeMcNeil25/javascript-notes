//Object-Oriented Programming

//Two of the same ways of writing an OOP
//Example 01
var purchase1 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax; //Access the object with the keyword "purchase1"
        console.log('Total Price:', calculation)
    }
}
purchase1.totalPrice(); //Output Total Price: 60

//Example 02, more efficient way of writing the code, you can reuse for other objects.
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax; //Accesses the object with the keyword of "this", it's the same thing as using "purchase" but it's more for accessing the object itself
        console.log('Total Price:', calculation);
    }
}
purchase2.totalPrice(); //Output Total Price: 60


//Classes, are even more of an efficient way for writing codes, mainly for reuse for other objects.
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log("Turbo Is On!!!")
    }
}
console.log(Car);

class Animal1 { /* ...class code here... */ }
var myDog = Object.create(Animal1)

console.log (Animal1)

class Animal2 { /* ...class code here... */ }
var myDog = new Animal2()

console.log (Animal2)


//OOP PRINCIPLES - Inheritance, Encapsulation, Abstraction, and Polymorphism
//OOP Inheritance - It's more of a hierarchy way on creating an object and having them relate to each other or forming sub-classes from the base class
class Animal01 { /* ...class code here... */ }
class Bird01 extends Animal01 { /* ...class code here... */ }
class Eagle01 extends Bird01 { /* ...class code here... */ }

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1)
console.log("eagle1 can fly ", eagle1.canFly);
console.log("eagle1 has feathers: ", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
console.log("penguin1 has feathers: ", penguin1);
console.log("penguin1 can fly: ", penguin1)

//OOP Encapsulation - Hidden code that individuals do not necessarily have to know how it works or to be concerned with.
"abc".toUpperCase(); //Once used in code the output will be: "ABC"

//OOP Abstraction - Extracting the concept of what you're trying to do, not dealing with a specific manifestation of that concept.

// Polymorphism - Something that can take on many forms
// In this example, "bell" can be used in multiple different forms.
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
console.log(bicycle.bell()); // "Get away, please"
const door = {
    bell: function() {
        return "Come here, please"
    }
}
console.log(door.bell()); // "Come here, please"

// Now creating a function that can call on a "thing", and when thing is replaced with the variables from above, output does the same thing.
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

// Using classes and inheritance along with polymorphism.
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


// Train Class
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
// Extension of the Train Class
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}


// Bike Class
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}
class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}
class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

// CONSTRUCTORS
// JavaScript has a number of built-in object types, such as:
// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.