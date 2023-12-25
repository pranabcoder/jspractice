const myObject = {

    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
};
/*
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}*/

const programmingLanguages = ['js', 'cpp', 'rb', 'swift'];
/*
for (const key in programmingLanguages) {
    console.log(programmingLanguages[key]);
} */

const myMap = new Map();
myMap.set('IN', 'India');
myMap.set('US', 'United States');
myMap.set('UK', 'United Kingdom');
myMap.set('FR', 'France');
myMap.set('IN', 'India'); 

for (const key in myMap) {
    console.log(key); //map is not iterable so for in loop will not work
}