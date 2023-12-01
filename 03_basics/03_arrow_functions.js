const user = {
    username: 'batman',
    price: 999,
    welcomeMessage: function () {
        console.log(`Welcome ${this.username} to website`);
        console.log(this); // { username: 'batman', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
};

// user.welcomeMessage(); // Welcome batman to website
// user.username = 'Sam';
// user.welcomeMessage(); // Welcome Sam to website
// console.log(this); // {}

// function chai(){
//     let username = 'batman';
//     console.log(this.username); // {}
// }
// chai(); // undefined
// const chai = function (){
//   let username = 'batman';
//     console.log(this.username); // {}
// };
// chai(); // undefined

// Arrow functions

const chai = () => {
    let username = 'batman';
    console.log(this.username); // undefined
};
// chai(); // undefined

// const addTwoNumbers = (a, b) => {
//     return a + b;
// };

// implicit return

// const addTwoNumbers = (a, b) => a + b;

// const addTwoNumbers = (a, b) => (a + b);

// return objects with arrow functions
const addTwoNumbers = (a, b) => ({a: a, b: b})

// console.log(addTwoNumbers(1, 4)); // 5

const myArray = [1, 2, 3, 4, 5];
// myArray.forEach((element, index) => {
//     console.log(element, index);
// }