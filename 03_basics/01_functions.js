// function declaration

// function sayHello() {
//     console.log("J");
//     console.log("A");
//     console.log("V");
//     console.log("A");
// }

// sayHello // function reference
// sayHello() // function execution

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// addTwoNumbers(10, 20); // 30
const result = addTwoNumbers(10, 20);
console.log(`Result ${result}`); // undefined