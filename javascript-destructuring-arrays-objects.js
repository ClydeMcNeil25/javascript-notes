// De-Structuring Arrays and Objects - taking the original variable that is already established and then making a new object that solely exists on its own.


//Built-In Methods: Object.keys(), Object.values(), and Object.entries()
const car1 = {
    speed: 200,
    color: "red"
}
//Object.keys() returns an array of the keys.
console.log(Object.keys(car1));
//Object.values returns an array of the values.
console.log(Object.values(car1));
//Object.entries(), which returns an array listing both the keys and the values.
console.log(Object.entries(car1));


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
console.log(`${greet} ${place} !`)


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
[0,10,20,30,40,50].map( function(num) {     //.map method takes an array and passes it through a function...
    return num / 10                         //returns the numbers (num) and divides it by 10
})
//Output: [0,1,2,3,4,5]