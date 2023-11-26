// array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeros = ["Batman", "Superman", "Spiderman", "Ironman"];
const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);


// console.log(myArray[0]); // 1 -< log the value of the first element
// console.log(myArray["job"]); // undefined -< log the value of the property "job"

// Array methods -
myArray.push(10); // add an element at the end of the array
// console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myArray.pop(); // remove the last element of the array
// console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// myArray.unshift(9); // add an element at the beginning of the array
// console.log(myArray); // [ 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myArray.shift(); // remove the first element of the array
// console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(myArray.includes(9)); // true -< check if the array contains the value 9
// console.log(myArray.indexOf(3)); // 2 -< return the index of the value 3

const newArray = myArray.join()
console.log(myArray);
console.log(typeof newArray); // string