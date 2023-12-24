// for loop example

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/
/*
for (let i = 0; i < 10; i++) {
    
    const element = i;
    if (element === 5) {
        console.log("5 is the best number");
    }
    
    console.log(element);
}
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
        console.log(i + '*' + j + '=' + (i*j));
    }
}
*/

/*
let myArray = ['flash', 'batman', 'superman'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // flash, batman, superman
}
*/
// break and continue
/*
for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log('Detected 5!');
        break;
    }
    console.log(`Value of i is: ${i}`); // 0, 1, 2, 3, 4
}
*/
for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log('Detected 5!');
        continue;
    }
    console.log(`Value of i is: ${i}`); // 0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
}

