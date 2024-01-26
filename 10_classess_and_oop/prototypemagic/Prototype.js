// let myName = "John      ";
// let myChannel = "CodeWithHarry   ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = function () {
    console.log("Hitesh is presenr in all objects");
}

heroPower.hitesh();
myHeros.hitesh();

Array.prototype.heyhitesh = function () {
    console.log(`Hitesh says hello`);
};

myHeros.heyhitesh();
//heroPower.heyhitesh();


// Inheritance in JavaScript

const User = {
    name: 'John',
    email: 'chai@google.com'
};
const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// Old Syntax
Teacher.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = 'ChaiAurCode      ';

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();

"hitesh   ".trueLength();
"chaiAurCode   ".trueLength();