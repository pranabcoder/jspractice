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
for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    }
}

