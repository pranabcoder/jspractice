const accountId = 1234;
let accountEmail = "pranab@gmail.com"
var accountPassword = "1234";
accountCity = "Bangalore";
let accountState;

// Const keyword is used to declare a constant variable which cannot be changed
// let keyword is used to declare a variable which can be changed
// var keyword is used to declare a variable which can be changed

// accountId = 2; - Not allowed in const variable declaration
// console.log(accountId)
// output: TypeError: Assignment to constant variable.

accountEmail = "pranab@hotmail.com"
accountPassword = "12345";
accountCity = "Hyderabad";
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//output: [ 1234, 'pranab@hotmailcom', '12345', 'Hyderabad', undefined ]

/*
* Prefer not to use var keyword
* Because of issue in block scope and function scope
*/
