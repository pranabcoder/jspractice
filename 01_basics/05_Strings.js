const name = 'John';
const repoCount  = 50;
// console.log(name + repoCount + "Value");
// console.log(`Hello my name is ${name.toUpperCase()} and I have ${repoCount} repos`);

const gameName = new String('Hitesh-hc-ite-choudhary');
// console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__); // String
// console.log(gameName.length); // 4
// console.log(gameName.toUpperCase()); // PUBG
// console.log(gameName.toLowerCase()); // pubg
// console.log(gameName.charAt(3)); // g
// console.log(gameName.indexOf('u')); // 1
// const newString = gameName.substring(0, 5);
// console.log(newString); // Pubg_
// const newString = gameName.substring(-8, 4);
// console.log(newString) // Hite
// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); // ite

// const newStringOne = "          Hitesh Choudhary          ";
// console.log(`Before Timing the space of string => ${newStringOne}`); // Before Timing the space of string =>           Hitesh Choudhary
// console.log(newStringOne.trim()); // Hitesh Choudhary

const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary
// console.log(url.includes('hitesh')); // true
// console.log(url.includes('ghosh')); // false
console.log(gameName.split('-')); // [ 'Hitesh', 'hc', 'ite', 'choudhary' ]
