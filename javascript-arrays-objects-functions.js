//FUNCTIONS

//A function without parameters
function addTwoNums1() {
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c)
}
addTwoNums1()//30 is expected

//A function with parameters
function addTwoNums2(a, b) {
    let c = a + b
    console.log(c);
}
addTwoNums2(5, 6)//Whatever that's inside the argument, the function will run the code to solve.

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);