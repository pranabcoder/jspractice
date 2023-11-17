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
console.log(negValue); // -3
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 2); // 0
console.log(2 ** 2); // 4