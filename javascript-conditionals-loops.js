/*
Notes: you can only use "IF, ELSE IF, & ELSE" or "SWITCH" conditional statements to return boolean values
*/

let color = ['green', 'yellow', 'red']
let colorRandom = Math.floor(Math.random() * color.length);

// Console logging to see what the computer identifies.
console.log(colorRandom)
console.log(color[colorRandom])


// Looking into the array and getting the index.
if (colorRandom === 0) {
    console.log("Time to go")
} else if (colorRandom === 1) {
    console.log("Slow Down")
} else {
    console.log("Stop")
}
// Looking in the array and comparing strings.
if (color[colorRandom] === 'green') {
    console.log("Time to go")
} else if (color[colorRandom] === 'yellow') {
    console.log("Slow Down")
} else {
    console.log("Stop")
}
// Converted to a switch statement.
switch(color[colorRandom]) {
    case 'green':
        console.log("Time to go")
        break;
    case 'yellow':
        console.log("Slow Down")
        break;
    default:
        console.log("Stop")
}


/*
Notes: LOOPS, usually you will use these to prove conditions are met infinitely until the conditions are met.
*/

//LOOPS

//FOR LOOPS

//Repeating the same message.
for (i = 0; i <= 1; i++) {
    console.log('Happy New Year!')
}
console.log(i)

//Counting up then console logging message.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("Count Up Finished!")

//Counting down then console logging message.
for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log("Count Down Finished!")

//WHILE LOOPS

//Basic loop counting up to message.
var k = 1;
while (k < 6) {
    console.log(k);
    k++;
};
console.log('Counting completed!');

//Basic loop counting down to message.
let j = 5;
while (j > 0) {
    console.log(j);
    j = j - 1;
};
console.log('Counting completed!');

//As long as the card that is being picked does not equal "cardPicked" the code will keep going until it equals "cardPicked"
let cards = ['diamond', 'clubs', 'spade', 'hearts']
let cardPicked;

while(cardPicked != 'diamond') {
    cardPicked = cards[Math.floor(Math.random() * cards.length)]
    console.log(cardPicked)
}
console.log(cardPicked)

//NESTED LOOPS, the best thing to take away is that the inner loop will run as long as the outer loop is running.

//An example of a nested loop.
for (let year = 2023; year < 2025; year++) {
    console.log(year)
    for (let month = 6; month < 9; month++) {
        console.log(month)
    }
}
//Another nested loop example
for (let h = 100; h > 10; h = i - 10) {
    for (var t = 10; t > 4; t = t - 10) {
        console.log(h + " divided by " + h + " equals " + h / t);
    }
}