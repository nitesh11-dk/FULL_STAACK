// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! Truthy & Falsy Values
// ? Truthy values are considered true when evaluated in a boolean context.
// * Falsy values are considered false when evaluated in a boolean context.
// * Falsy values: false, 0, BigInt value, "", null, undefined, NaN, document.all

// ! Difference Between == and ===
// == checks value, while === checks value and datatype.
// Example:
console.log(10 === 10); // true
console.log(10 === '10'); // false

console.log(10 == 10); // true
console.log(10 == '10'); // true

// ! Difference Between let, const, and var
// var is  present in es5 , let and const are present in es6
// var is function-scoped, while let and const are block-scoped.
// let allows reassignment, const does not allow reassignment but allows mutation of properties.
//  there are more different between let const and var ,  if you want to know more you can refer this link https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// Example:
var a = 10;
let b = 20;
const c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// ! Increment and Decrement Operators
// Increment (++) adds one, decrement (--) subtracts one.
// Example:
let num = 10;

console.log(++num); // 11 // first  update by +1 then print
console.log(num++); // 11 // first print then update by +1 (then num becomes 12)
console.log(--num); // 11 // first  update by -1 then print
console.log(num--); // 11 // first print then update by -1 (then num becomes 10)


// ! Comparison for Non-Numbers
// JavaScript uses Unicode character codes for comparison.
// Example:
console.log("a" < "A"); // false (Unicode for 'a' is greater than 'A') // for aa unicode starts from 61 and for A from 41
console.log("a" < "*"); // true (Unicode for 'a' is less than '*')


// ? Try & Catch
// try is used to test a block of code for errors, catch handles the error if one occurs.
// Example:
try {
   console.log(undefinedVariable);
} catch (error) {
   console.log(error); // ReferenceError: undefinedVariable is not defined
}

// ! Additional Console Methods
// console.warn(), console.error(), console.table()
// Example:
let x = 10;
let y = 20;

console.log("Hello");
console.warn("Warning!");  // Outputs a warning message
console.error("Error!");   // Outputs an error message
console.table({x, y});     // Displays data in tabular format


//!  Using Double Negation (!!) to Check Truthiness:
// In JavaScript, the double negation (!!) is often used to convert a value to its corresponding Boolean value. It effectively converts any value to its truthy or falsy counterpart.

// Falsy values demonstration
console.log(!!false);        // false
console.log(!!0);            // false
console.log(!!'');           // false
console.log(!!null);         // false
console.log(!!undefined);    // false
console.log(!!NaN);          // false

// Truthy values demonstration
console.log(!!true);         // true
console.log(!!1);            // true
console.log(!!'hello');      // true
console.log(!![1, 2, 3]);    // true
console.log(!!{a: 1, b: 2}); // true
console.log(!!function(){}); // true

// Custom values demonstration
console.log(!!'0');          // true, as it's a non-empty string
console.log(!![]);           // true, as it's an empty array (still an object)
console.log(!!{});           // true, as it's an empty object

// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++