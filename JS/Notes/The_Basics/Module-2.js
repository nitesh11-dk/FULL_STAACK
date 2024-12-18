
// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! 3. Module-2   String &  its methods

/*
   Strings in JavaScript:
   - Strings are sequences of characters enclosed within single quotes (''), double quotes (""),
     or backticks (``). They are used to represent textual data.

   Uses of Strings:
   - Storing and manipulating textual data.
   - Displaying messages to users.
   - Building dynamic content in web applications.
*/

/*
   String Interpolation:
   - String interpolation is a way to construct a new string value by embedding expressions
     inside a string literal. This allows for easy dynamic generation of strings.

   Template Literals:
   - Template literals are string literals allowing embedded expressions.
   - They are enclosed by the backtick character (` `) instead of quotes.
   - Template literals support multiline strings and string interpolation.

   Example of String Interpolation and Template Literals:
*/

const name12 = "John";
const age12 = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
/*
   String Methods:
   1. slice(a, b): Returns a portion of the string from index 'a' to index 'b' (excluding 'b').
      Example:
*/
const str = "Hello World";
console.log(str.slice(1, 5)); // Output: "ello"

/*
   2. charAt(a): Returns the character at the specified index 'a'.
      Example:
*/
console.log(str.charAt(6)); // Output: "W"

/*
   3. indexOf(substring): Returns the index of the first occurrence of 'substring' within the string.
      Example:
*/
console.log(str.indexOf("o")); // Output: 4

/*
   4. substring(a, b): Returns the substring between indexes 'a' and 'b'.
      Example:
*/
console.log(str.substring(6, 11)); // Output: "World"

/*
   5. trim(): Removes whitespace from both ends of the string.
      Example:
*/
const strWithWhitespace = "   Hello World   ";
console.log(strWithWhitespace.trim()); // Output: "Hello World"

/*
   6. replace(what, with): Replaces 'what' with 'with' in the string. Use 'g' flag to replace all occurrences.
      Example:
*/
console.log(str.replace("World", "Universe")); // Output: "Hello Universe"

/*
   7. split(separator): Splits the string into an array of substrings based on 'separator'.
      Example:
*/
console.log(str.split(" ")); // Output: ["Hello", "World"]

/*
   8. repeat(n): Returns a new string containing the original string repeated 'n' times.
      Example:
*/
console.log(str.repeat(2)); // Output: "Hello WorldHello World"

/*
   9. toUpperCase(): Converts the string to uppercase.
      Example:
*/
console.log(str.toUpperCase()); // Output: "HELLO WORLD"

/*
   10. toLowerCase(): Converts the string to lowercase.
      Example:
*/
console.log(str.toLowerCase()); // Output: "hello world"

/*
   Additional String Methods:

   11. concat(str1, str2, ...): Concatenates one or more strings with the original string.
      Example:
*/
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2)); // Output: "Hello, World"

/*
   12. startsWith(substring): Checks if the string starts with 'substring'.
      Example:
*/
console.log(str.startsWith("He")); // Output: true

/*
   13. endsWith(substring): Checks if the string ends with 'substring'.
      Example:
*/
console.log(str.endsWith("ld")); // Output: true

/*
   14. includes(substring): Checks if the string contains 'substring'.
      Example:
*/
console.log(str.includes("llo")); // Output: true

/*
   15. padStart(length, padString): Pads the string from the start with 'padString' until it reaches the given 'length'.
      Example:
*/
console.log(str.padStart(10, "123")); // Output: "123HelloWo"

/*
   16. padEnd(length, padString): Pads the string from the end with 'padString' until it reaches the given 'length'.
      Example:
*/
console.log(str.padEnd(10, "abc")); // Output: "HelloWoabc"

/*
   17. match(regexp): Searches a string for a match against a regular expression and returns the matches.
      Example:
*/
console.log(str.match(/[a-zA-Z]/g)); // Output: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]

/*
   18. search(regexp): Searches a string for a specified value and returns the position of the match.
      Example:
*/
console.log(str.search("o")); // Output: 4

/*
   19. substr(start, length): Returns the characters in a string beginning at the specified location through the specified number of characters.
      Example:
*/
console.log(str.substr(1, 3)); // Output: "ell"

/*
   20. localeCompare(compareString): Compares two strings in the current locale.
      Example:
*/
console.log(str.localeCompare("hello")); // Output: -1 (indicating str comes before "hello" in sorting order)



// ! +++++++++++++++++++++++++++++