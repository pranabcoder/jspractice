// const user = {
//     username: 'batman',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function() {
//         // console.log('Got user details from the database');
//         //console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
//         console.log(this);
//     }
// };

// console.log(user.username);
// //console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User('batman', 8, true);
const userTwo = new User('superman', 5, false);
console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);
