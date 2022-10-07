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

// CONSTRUCTORS
// JavaScript has a number of built-in object types, such as:
// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.