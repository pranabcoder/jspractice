const myArr = [];

// %DebugPrint(myArr);

// Two types are arrays in js - continuous, Holey

// SMI (Small integer)

// Packed elements

// Double(float, string, function)

const arrTwo = [1, 2, 3, 4, 5, 6];

// PACKED_SMI_ELEMENTS

arrTwo.push(8.0);

// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7');

// PACKED_ELEMENTS

arrTwo[10] = 11;

//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// Bound check 

// hasOwnProperty(arrTwo, 9);
// hasOwnProperty(arrTwo.prototype, 10);
// hasOwnProperty(Object.prototype, 10);

// holes are very expensive in js

