// Primitive data types: number, string, boolean, null, undefined, Symbol, BigInt

// Reference data types(Non primitive): object, array, function

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 1234567890123456789012345678901234567890n;

const heros = ["superman", "batman", "spider man"];

let myObject ={
    name: "superman",
    age: 30
}

const myFunction = function (){
    console.log("hello world");
}
// console.log(typeof myFunction); // function
// console.log(typeof myObject); // object
// console.log(typeof heros); // object
// console.log(typeof bigNumber); // bigint
// console.log(typeof score); // number
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outsideTemp); // object


// +++++++++++++++++++++++++++++ Memory allocation +++++++++++++++++++++++++++++

// stack memory: primitive data types
// heap memory: reference data types

let myYoutubeName = "code with harry";
let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "chai aur code";
// console.log(myYoutubeName);
// console.log(anotherYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl.com"
};

let userTwo = userOne;
console.log("User one actual value  -- >  " + userOne.email);
console.log("Before changing the value of email  -- >  " + userTwo.email);
userTwo.email = "user@hotmail.com";
console.log("After changing the value of email  -- >  " + userTwo.email);
