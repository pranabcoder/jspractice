// for of loop example

/*
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
*/

/*
const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
*/
// Maps example 

const myMap = new Map();
myMap.set('IN', 'India');
myMap.set('US', 'United States');
myMap.set('UK', 'United Kingdom');
myMap.set('FR', 'France');
myMap.set('IN', 'India'); // duplicate key

// console.log(myMap); // { IN: 'India', US: 'United States', UK: 'United Kingdom', FR: 'France' }

/*
for (const key of myMap) {
    // code
    console.log(key); // [ 'IN', 'India' ] [ 'US', 'United States' ] [ 'UK', 'United Kingdom' ] [ 'FR', 'France' ]
}*/

/*
for (const [key, value] of myMap) {
    // code
    console.log(key, ':-', value); // IN :- India US :- United States UK :- United Kingdom FR :- France
} */

const myObject = {

    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Hockey',
    'game4': 'Basketball'
};

for (const [key, value] of myObject) {
    // code
    console.log(key, ':-', value); // TypeError: myObject is not iterable

}