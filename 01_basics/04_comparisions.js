// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 === 1); // false
// console.log(2 !== 1); // true
// console.log(2 === "2"); // false

// console.log("2" > 1); // true, string '2' becomes a number 2
// console.log("02" > 1); // true, string '02' becomes a number 2

// console.log(null > 0); // (1) false
// console.log(null === 0); // (2) false
// console.log(null >= 0); // (3) true
// Explanation:
// For maths and other comparisons < > <= >=
// null is converted to a number - 0.
// During the equality check == and strict equality check ===
// undefined and null are indistinguishable (except strict === check).
// That’s why (2) and (3) above are true.
// And here’s the funny part:
// null is greater than undefined.
// This was done intentionally in the language.
// Conceptually, undefined means “no value”.
// It’s a special value that’s meant to indicate the absence of value.
// On the other hand, null is a special value that represents “nothing”.
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined === 0); // false (3)
