// map example

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbs = myNumbers.map((number) => {
//     return number + 10;
// });

// const newNumbs = myNumbers.map((number) => number + 10);

const newNumbs = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log(newNumbs);


