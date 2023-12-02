// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

// DB Connected

((name) => {
    console.log(`DB Connected TWO ${name}`);
})('John'); // DB Connected TWO John