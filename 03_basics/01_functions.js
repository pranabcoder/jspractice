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
// console.log(`Result ${result}`); // 30

// function loginUserMessage(username) {
//     if(username === undefined){
//         return "Please enter username";
//     }
//     return `${username} just logged in`;
// }

// function loginUserMessage(username) {
//     if(!username){
//         return "Please enter username";
//     }
//     return `${username} just logged in`;
// }

function loginUserMessage(username = 'Guest') {
    if(!username){
        return "Please enter username";
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("John Miller")); // "John Miller just logged in"

// console.log(loginUserMessage()); // " just logged in"