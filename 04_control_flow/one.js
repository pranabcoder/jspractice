// // if
//
// if (true){
//     // Will run if true
// }
//
// if (false){
//     // Will not run
// }

const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log('User is logged in');
// }
// <(Less than), >(greater than), <=(Less than equal), >=(greater than equal ), ==(Equal to), !=(Not equal to)
// === (Equal to and same type), !== (Not equal to and same type)
// if (2 == '2'){
//     console.log("executed")
// } // executed

// if (2 === '2'){
//     console.log("executed")
// } // not executed
// const temperature = 41;
// if (temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200;
// if (score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // error

// const balance = 1000;
// if (balance > 500) console.log("Balance is greater than 500");

// const balance = 1000;
// if (balance > 500) console.log("Balance is greater than 500"), console.log("Balance is greater than 500"); // multiple statements but not recommended

// const balance = 1000;

// if (balance < 500) {
//     console.log("Balance is less than 500");
// } else if (balance < 750) {
//     console.log("Balance is less than 750");
// } else if (balance < 900) {
//     console.log("Balance is less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEamil = true;
//
// if (userLoggedIn && debitCard && 2 === 2) {
//     console.log("Allow to buy course");
// }

if (userLoggedIn || loggedInFromGoogle || loggedInFromEamil) {
    console.log("Allow to buy course");
}