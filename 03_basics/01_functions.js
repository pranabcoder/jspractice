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

// console.log(loginUserMessage("John Miller")); // "John Miller just logged in"

// console.log(loginUserMessage()); // " just logged in"

// function calculateCartPrice(...num1) {
//     return num1;
// }

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, )); // [200, 400, 500]
// console.log(calculateCartPrice(200, 400, 500, 2000)); // [500, 2000]

const user = {
    username: 'John',
    price: 199
};

function handleObject(anyobject){
    console.log(`Username: ${anyobject.username} and Price: ${anyobject.price}`);
}

// handleObject(user); //  Username: John and Price: 199

// handleObject({
//    username: 'Sam',
//    price: 299
// });

// const myNewArray = [10, 20, 30, 40, 50];

function returnSecondElement(getArray){
    return getArray[2];
}

// console.log(returnSecondElement(myNewArray)); // 20

console.log(returnSecondElement([10, 20, 30, 40, 50])); // 30