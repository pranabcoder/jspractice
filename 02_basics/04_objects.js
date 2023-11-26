const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
};
// console.log(regularUser.fullName); // { userFullName: { firstName: 'John', lastName: 'Doe' } }
// console.log(regularUser.fullName.userFullName); // { firstName: 'John', lastName: 'Doe' }
// console.log(regularUser.fullName.userFullName.firstName); // John

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign({}, obj1, obj2); // Object.assign(target, ...sources)
// const obj3 = {...obj1, ...obj2}; // Spread operator (...)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users  = [
    {
        id: 1,
        name: "John",
        email: "john@test.com"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@test.com"
    },
    {
        id: 3,
        name: "Jack",
        email: "jack@test.com"
    },
    {
        id: 4,
        name: "Jill",
        email: "jill@test.com"
    }
];

// console.log(users[0].name); // John
// console.log(tinderUser); // { id: '123abc', name: 'John', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'John', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// object destructuring - > ES6
const course = {
    courseName: "JavaScript",
    price: 900,
    courseInstructor: "John Doe",
};

const {courseInstructor: instructor} = course;
console.log(instructor); // John Doe