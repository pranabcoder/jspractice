// for each loop example

const coding = ["js", "ruby", "py", "php", "java", "c++", "c#"];
/*
coding.forEach(function (item) {
  console.log(item);
}); */

/*
coding.forEach((item) => {
    console.log(item);
}); */

// function printMessage(item) {
//   console.log(item);
// }

// coding.forEach(printMessage);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});