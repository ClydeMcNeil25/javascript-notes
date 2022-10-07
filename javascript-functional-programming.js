// Return Values from Functions


// Console Logging
console.log('Hello');

// Using a function to Console Logging in a different way set with a custom function.
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')

// Returning Values from Functions.
function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(doubleIt(10).toString())        //Output: "20"
console.log(objectMaker(20));               // Output: {prop: 20}
console.log(objectMaker( doubleIt(100) ));  //Output {prop: 200}


// let currencyOne = 100;
// let currencyTwo = 0;
// let exchangeRate = 1.2;

// function convertCurency(amount, rate) {
//     return amount * rate;
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate);

// console.log(currencyTwo);

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}
// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
}
// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')

celebrateStyler('birthday')
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')


// Recursion, is when a function calls on it's own function
// This will run avoiding Recursion     //This will run an an infinite loop    
function example01(){                   //function example01(){
    console.log('Line One');              //console.log('Line One');          
    console.log('Line Two');              //console.log('Line Two');  
    console.log('Line Three');            //console.log('Line Three);
}                                         //example01();  
example01();                              //}

// An alternate way of writing the same code above
let counter = 3;
function example02() {
    console.log(`Line ${counter}`);
    counter = counter - 1;
    if (counter === 0) return;
    example02();
}
example02()

// Scope; 
let num1 = 10;              //Global is the code that exists outside of the function

function score() {          //Local is everything that exists inside of the function
    let num2 = 20;
    console.log(num2);
}
console.log(score())


//Functional Programming (FP) vs Object-Oriented Programming (OOP)
//Example of FP, the main differences is that the data and functionality of the code are separate
//FP functions return new values and then are used somewhere else in the code.
function getDistance(mph, h) {              //Function
    return mph * h                          //Function
}                                           //Function

var mph = 60;                               //Data
var h = 2;                                  //Data
var distance = getDistance(mph, h);         //Data

console.log(distance); // <====== THIS HERE!

//Example of OOP, in this style, the data and functions are grouped together
//The importance of this style is that instead of calling on values, we're calling on the state of an object.
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//var vs let vs const
//var you can redeclare a variable with the use of var
var user = "Me";
var user = "You"; //This overwrites the first declaration of the user "Me" to user "You"

//let is a little stricter to where you can't use let to declare another value to the same variable but you can change
let otherUser = "Him";
otherUser = "Her"; //This is how you overwrite the first declaration of the otherUser "Him" and change to "Her"

//const is the most strictest of the three where once when the variable is set, you cannot change with either way compared to var and let
const thatUser = "Them";
