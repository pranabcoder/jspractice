/* user will provide an array of numbers - input = [1, 2, 3, 4]
output = [[1,2,3,4],[3,5,7],[8,12],[20]]
*/

/*
function transformArray(inputArray) {
    let result = [inputArray];
    while (inputArray.length > 1) {
        let newArray = [];
        for (let i = 0; i < inputArray.length - 1; i++) {
            newArray.push(inputArray[i] + inputArray[i + 1]);
        }
        inputArray = newArray;
        result.push(inputArray);
    }
    return result;
}


let testInput = [1, 2, 3, 4];
let transformedArray = transformArray(testInput);
console.log(transformedArray);
*/

function transformArray(inputArray) {
    if (inputArray.length <= 1) {
        return [inputArray];
    }

    let newArray = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        newArray.push(inputArray[i] + inputArray[i + 1]);
    }
    return [inputArray, ...transformArray(newArray)];
}

let testInput = [1, 2, 3, 4];
let transformedArray = transformArray(testInput);
console.log(transformedArray);

