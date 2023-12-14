const userEmail = "p@pranab.ai";

/*if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}*/

// false values
// false, 0, "", null, undefined, NaN, 0n, -0, BigInt(0)

// truthy values
// true, 1, " ", "0", {}, [], -1, 0n, BigInt(-1), "false", function() {}

// how to check array is empty or not
/*
const emptyArray= [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}*/

// How to check empty object
/*const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}*/

// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');

// Nullish coalescing operator (??): null and undefined

let value = null;
value = 5 ?? 10;
console.log(value);


