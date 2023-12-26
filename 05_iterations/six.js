// for each loop


// const coding = ["js", "ruby", "py", "php", "java", "c++", "c#"];

// const values = coding.forEach( (item) =>  {
//   //console.log(item);
//     return item;
// });

// console.log(values); //   undefined

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers = myNumbers.filter((item) => {
//     if (item % 2 === 0) {
//         console.log(item);
//     }
//     return item; // Add the "return" statement
// });

// console.log(filteredNumbers); // Use the return value

// const newNumbers = myNumbers.filter((item) => item > 4);
// console.log(newNumbers);

// const newNumbers = [];
// myNumbers.forEach((item) => {
//     if (item > 4) {
//         newNumbers.push(item);
//     }
// });
// console.log(newNumbers);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((book) => {
//     return book.genre === 'History';
// });

const userBooks = books.filter((book) => book.genre === 'History');

console.log(userBooks);

