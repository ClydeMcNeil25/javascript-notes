// De-Structuring Arrays and Objects - taking the original variable that is already established and then making a new object that solely exists on its own.


//Built-In Methods: Object.keys(), Object.values(), and Object.entries()
const car1 = {
    speed: 200,
    color: "red"
}
//Object.keys() returns an array of the keys.
console.log(".key Method: ", Object.keys(car1));
//Object.values returns an array of the values.
console.log(".values Method: ", Object.values(car1));
//Object.entries(), which returns an array listing both the keys and the values.
console.log(".entries Method: ", Object.entries(car1));


//For-Of-Loops
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('----- for-in is unrealiable -----');
for (prop in sportsCar) {
    console.log(prop);
}
console.log("😋", "Iterating over object AND its prototype!");

console.log('----- for-of is reliable -----');
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}
console.log('⭐', "Iterating over object's OWN PROPERTIES only!");

//Template Literals - using backticks " ` ", you can combine (concatenate) strings, with variables all inside of backticks
let greet = "Hello";
let place = "World";
console.log("Template Literals: ", `${greet} ${place} !`)


// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
logDairy();
// Task 2
function logDairy() {
    for (var xdairy of dairy ) {
        console.log(xdairy);
    }
}
// Task 3
const animal = {
    canJump: true
}
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();
animalCan();


//Looping over Arrays in JavaScript

//forEach() Method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
//Output:
        // 0. kiwi
        // 1. mango
        // 2. apple
        // 3. pear

//filter() Method
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;            //Returns numbers that are greater than 20
})
//Output: [30,40,50]

//map Method
//.map method takes an array and passes it through a function...
//returns the numbers (num) and divides it by 10
nums.map( function(num) {     
    return num / 10                         
})
//Output: [0,1,2,3,4,5]

//Working with Objects
const result = [];                      //Declaring an empty array
const drone = {                         //Creating the properties for the object drone
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);   //Declaring droneKeys to set the object drone inside of an array
droneKeys.forEach( function(key) {      //Now you're indexing the properties object drone
    result.push(key, drone[key])        //Inserting the key valued pairs into the array
})
console.log(result)                     //Output: ['speed', 100, 'color', 'yellow']

//Using the Map constructor, there's no prototypes and it does not have inheritance.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);                //Output: Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
//Use .get to specifically select a value.
console.log(bestBoxers.get(1));         //Output: 'The Champion'

//Working with Sets
//To build a new set here's what the syntax looks like:
// new Set();
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits); //Using Set, quickly filters an array for unique members. In this case repetitive strings were filtered to output only one
console.log(uniqueFruits);


//Spread Operators - Used to join array elements into a function without having to type them individually.
//The syntax for a spread operator is: function = [...variable01, ...variable02];

//ARRAYS
const fruits1 = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log("Spread Operators for Arrays: ", fruitsAndBerries); // outputs a single array

//OBJECTS
const flying = { wings: 2 }
const car2 = { wheels: 4 }
const flyingCar = {...flying, ...car2}
console.log("Spread Operators for Objects: ", flyingCar) // {wings: 2, wheels: 4}

//Using the spread operator to spread strings separately in an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log("Spread Operators for Strings: ", arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copying an object into a completely separate object
const car4 = {
    speed: 200,
    color: 'yellow'
}
const car5 = {...car4} //Copied object car4
car4.speed = 201 //Changed the speed by accessing car4's values but listed for car5
console.log("Copying an object and making a separate object: ", car4.speed, car5.speed)

//Copying an array into a completely separate array
const fruits2 = ['apples', 'pears']
const fruits3 = [...fruits]
fruits2.pop()
console.log("Copying an array and making a separate array: ", fruits2, "not", fruits3)
//Rest Operators - Used to take items from an array and use them to create a separate sub-array.