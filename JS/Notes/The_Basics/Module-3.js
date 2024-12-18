
// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! 4. Module-3   Number  , Math and   its methods
/*
   Number & Math Methods:
*/

/*
   Number Methods:
   1. toFixed(2): Rounds the number to a specified number of decimal places.
      Example:
*/
const num = 4.567;
console.log(num.toFixed(2)); // Output: "4.57"

/*
   2. toPrecision(2): Returns a string representing the number to a specified precision.
      Example:
*/
console.log(num.toPrecision(2)); // Output: "4.6"

/*
   3. toString(): Converts a number to a string.
      Example:
*/
console.log(num.toString()); // Output: "4.567"

/*
   4. toLocaleString('en-IN'): Returns a string with a language-sensitive representation of the number.
      Example:
*/
console.log(num.toLocaleString('en-IN')); // Output: "4.567" (assuming 'en-IN' locale)

/*
   Math Methods:
   1. Math.abs(-4): Returns the absolute value of a number (always positive).
      Example:
*/
console.log(Math.abs(-4)); // Output: 4

/*
   2. Math.round(4.6): Rounds a number to the nearest integer.
      Example:
*/
console.log(Math.round(4.6)); // Output: 5

/*
   3. Math.ceil(4.9): Rounds a number to the next highest integer.
      Example:
*/
console.log(Math.ceil(4.9)); // Output: 5

/*
   4. Math.floor(4.5): Rounds a number to the next lowest integer.
      Example:
*/
console.log(Math.floor(4.5)); // Output: 4

/*
   5. Math.min(4, 6, 57, 4, 74): Returns the minimum value from a set of numbers.
      Example:
*/
console.log(Math.min(4, 6, 57, 4, 74)); // Output: 4

/*
   6. Math.max(4, 6, 57, 4, 74): Returns the maximum value from a set of numbers.
      Example:
*/
console.log(Math.max(4, 6, 57, 4, 74)); // Output: 74

/*
   7. Math.pow(a, b): Returns the base to the exponent power.
      Example:
*/
console.log(Math.pow(2, 3)); // Output: 8

// ? Numeric Constants:
// - MAX_SAFE_INTEGER: The largest integer that can be safely represented and compared in JavaScript.
// - MIN_SAFE_INTEGER: The smallest integer that can be safely represented and compared in JavaScript.
// - MAX_VALUE: The largest positive finite value representable in JavaScript.
// - MIN_VALUE: The smallest positive value representable in JavaScript.

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324


//? Generating a random number between a specified range (inclusive):
const min = 1;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
   Additional Number & Math Methods:
*/

/*
   1. parseFloat(string): Parses a string argument and returns a floating point number.
      Example:
*/
const floatValue = parseFloat("3.14");
console.log(floatValue); // Output: 3.14

/*
   2. parseInt(string, radix): Parses a string argument and returns an integer of the specified radix (base).
      Example:
*/
const intValue = parseInt("10", 10);
console.log(intValue); // Output: 10

/*
   3. isNaN(value): Checks whether a value is NaN (Not-a-Number).
      Example:
*/
console.log(isNaN(NaN)); // Output: true

/*
   4. isFinite(value): Checks whether a value is a finite number.
      Example:
*/
console.log(isFinite(Infinity)); // Output: false

/*
   5. Number.isInteger(value): Checks whether a value is an integer.
      Example:
*/
console.log(Number.isInteger(5)); // Output: true

/*
   6. Number.isNaN(value): Checks whether a value is NaN.
      Example:
*/
console.log(Number.isNaN("hello")); // Output: false

/*
   7. Number.parseFloat(string): Parses a string argument and returns a floating point number.
      Example:
*/
console.log(Number.parseFloat("3.14")); // Output: 3.14

/*
   8. Number.parseInt(string, radix): Parses a string argument and returns an integer of the specified radix (base).
      Example:
*/
console.log(Number.parseInt("10", 10)); // Output: 10

/*
   9. Math.sqrt(x): Returns the square root of a number.
      Example:
*/
console.log(Math.sqrt(25)); // Output: 5

/*
   10. Math.log(x): Returns the natural logarithm (base e) of a number.
      Example:
*/
console.log(Math.log(Math.E)); // Output: 1

/*
   11. Math.exp(x): Returns the exponential value of a number.
      Example:
*/
console.log(Math.exp(2)); // Output: 7.38905609893065

/*
   12. Math.sin(x), Math.cos(x), Math.tan(x): Returns the sine, cosine, and tangent of an angle (in radians).
      Example:
*/
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)

/*
   13. Math.random(): Returns a random floating point number between 0 (inclusive) and 1 (exclusive).
      Example:
*/
console.log(Math.random()); // Output: random number between 0 and 1


