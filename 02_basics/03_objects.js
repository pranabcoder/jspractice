// singleton

// object literals

const mySym = Symbol('mySymOne');
const jsUser = {
    name: 'John',
    fullName: 'John Doe',
    [mySym]: 'mySymOne',
    age: 32,
    location: 'Kolkata',
    email: 'user@test.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday", "Sunday"]
};
// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser.fullName);
// console.log(typeof jsUser[mySym]);
jsUser.email = 'user@google.com';
// console.log(jsUser.email);
// Object.freeze(jsUser);
// console.log(jsUser);
jsUser.greeting = function (){
    console.log('Hello JS User');
}
jsUser.greetingTwo = () => {
    console.log(`Hello ${jsUser.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());