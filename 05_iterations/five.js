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

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding  = [
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb',
    },
    {
        languageName: 'python',
        languageFileName: 'py',
    },
    {
        languageName: 'php',
        languageFileName: 'php',
    },
    {
        languageName: 'java',
        languageFileName: 'java',
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp',
    },
    {
        languageName: 'c#',
        languageFileName: 'cs',
    },

];

myCoding.forEach((item) => {
    console.log(item.languageName);
});