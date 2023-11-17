// let score = 33;
//let score = '33abc';
let score = null;
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 0

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
// console.log(typeof booleanIsLoggedIn); // boolean

// 1 => true
// 0 => false
// "" => false
// "abc" => true

let someNumber = 33;
let stringNumber = someNumber.toString();
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // "33"

// ***************** Operations *****************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3
// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 / 2); // 1
// console.log(2 % 2); // 0
// console.log(2 ** 3); // 8

let str1 = 'Hello';
let str2 = 'Prashant';

let str3 = str1 + ' ' + str2;
// console.log(str3); // Hello Prashant

// console.log(1 + "2"); // "12"
// console.log("1" + 2); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// console.log((3 + 4) * 5 % 3); // it is not a good practice to write like this

// console.log(true); // true
// console.log(+ true); // 1
// console.log(true +);    // SyntaxError: Unexpected token ')'

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // it is not a good practice to write like this

let gameCounter = 100;
gameCounter++; // gameCounter = gameCounter + 1;
console.log(gameCounter); // 101

// link to study more about operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// https://tc39.es/ecma262/#sec-ecmascript-language-expressions
