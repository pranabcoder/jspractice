"use strict"; // treat all js code as new version

// alert(3 + 3) - > we are using Node.js not browser
// output : ReferenceError: alert is not defined

// console.log(3 + 3); console.log("Pranas") - > not a good practice. Code readability is bad

let name = "Pranas"; // string
let age = 25; // number
let isLogged = true; // boolean

// Primitive data types
// number -> 2 to power 53
// bigint
// string = ""
// boolean => true/false
// null => standalone value
// undefined => value is not assigned
// symbol => unique identifier

console.log(typeof "Pranas"); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined