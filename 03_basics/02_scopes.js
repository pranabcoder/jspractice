// let a = 10;
// const b = 20;
// var c = 30;

let a = 100;

if (true) {
    let a = 10;
    const b = 20;
    // console.log(`Inner a: ${a}`);
    var c = 30;
}
// console.log(a); // 100
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

function one(){
    const username = 'John';
    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // ReferenceError: website is not defined
    // two();
}
one(); // no output because two() is not called

if (true) {
    const username = 'John';
    if (username === 'John') {
        const website = " youtube";
        // console.log(username + website);
    }
    // function two(){
    //     const website = "youtube";
    //     console.log(username);
    // }
    // two();
    // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined

// ++++++++++++++++++++++  Interesing ++++++++++++++++++++++

// console.log(addOne(5));
function addOne(value){
    return value + 1;
}

// addOne(5); // 6

// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(value){
    return value + 2;
}

// addTwo(5); // 7