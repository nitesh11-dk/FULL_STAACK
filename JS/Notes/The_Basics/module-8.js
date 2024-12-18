// Functions in JavaScript

// !Function Declaration or initialization & calling function 
function greet(name) {
    return "Hello, " + name + "!";
}

// ? calling function 
greet();




// !Parameters & Arguments
// Parameters are the variables listed inside the parentheses in the function definition.
// Arguments are the values passed to the function when it is invoked.
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4)); // Output: 7

//! Function Reference & return keyword

const result = greet; // Function reference
console.log(result("John")); // Output: Hello, John!

//* Return Keyword
// The return statement ends the function execution and specifies the value to be returned.
function greetWithPrefix(name, prefix) {
    return prefix + " " + name;
}
console.log(greetWithPrefix("Alice", "Hi")); // Output: Hi Alice



//! Object, Array, and Function as Arguments
function operateOnArray(arr, func , obj) {
console.log(arr , func , obj)
}
const double = function hello() { console.log("Hello") };

operateOnArray([1, 2, 3], double , {name:"nitesh"}); // Output: [2, 4, 6]



//! Rest Operator
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function sumAll(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10


