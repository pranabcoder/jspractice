const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["batman", "superman", "wonderwoman"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // ["thor", "Ironman", "spiderman", ["batman", "superman", "wonderwoman"]]
// console.log(marvelHeros[3][2]); // wonderwoman
//  const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // ["thor", "Ironman", "spiderman", "batman", "superman", "wonderwoman"]

// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros); // ["thor", "Ironman", "spiderman", "batman", "superman", "wonderwoman"]

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// let realAnotherArray = anotherArray.flat(2);
// console.log(realAnotherArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// console.log(Array.isArray("John")); // false
// console.log(Array.from("John")); // ["J", "o", "h", "n"]
// console.log(Array.from({name: "John"})); // []

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;
console.log(Array.of(scoreOne, scoreTwo, scoreThree)); // [100, 200, 300]