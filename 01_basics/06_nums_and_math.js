const score = 400;
const balance = Number(1000);
// console.log(score); // 400
// console.log(balance); // [Number: 1000]
// console.log(balance.toString()); // 1000
// console.log(typeof balance.toString()); // string
// console.log(balance.toString().length); // 4
// console.log(balance.toFixed(2)); // 1000.00
// const otherNum = 23.8966;
// console.log(otherNum.toPrecision(3)); // 23.9
// const otherNum = 123.8933;
// console.log(otherNum.toPrecision(3)); // 124
// const otherNum = 1123.8966;
// console.log(otherNum.toPrecision(3)); // 1.12e+3
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
