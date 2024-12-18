// ! why array

// Arrays programming mein lists ya containers hote hain jo multiple data items ko hold karte hain. Inka use related pieces of information ko ek saath organize aur store karne ke liye hota hai. For example, agar aap ek bookstore mein books ki list manage kar rahe hain, toh aap ek array ka use karke un books ke titles, authors, genres, aur prices ko store kar sakte hain. Iss se information ko access aur manipulate karna asaan ho jata hai, jaise ek physical store mein items ko shelves par organize karna.

// Bookstore Inventory
let titles = ["The Great Gatsby", "To Kill a Mockingbird", "1984"];
let authors = ["F. Scott Fitzgerald", "Harper Lee", "George Orwell"];
let genres = ["Fiction", "Fiction", "Dystopian Fiction"];
let prices = [10.99, 12.50, 9.75];


// Array Basics:

// Arrays in JavaScript are ordered collections of values. They can hold different types of data and are primarily used for storing multiple values in a single variable.

// Example:
let arr1 = [1, 2, 3, 4, 5];

// Behind the Scenes:
// Arrays in JavaScript are objects. Each element in an array is a property where the index serves as the property name, and the elements are the property values.

// Example:
let arr2 = [1, 2, 3];
arr2[-1] = 23; // Adding a property to the array object

console.log(arr2) // appko magic hote huye dikhega  i ,,,e array object hy samajega 

// Const Arrays:
// Arrays declared with const can't be reassigned to a new array, but their elements can be modified.

// Example:
const arr3 = [1, 2, 3];
arr3.push(4); // Allowed
// arr3 = [4, 5, 6]; // Not allowed

// Spread Operator:
// The spread operator (...) is used to create a shallow copy of an array, allowing you to pass elements of an existing array into a new array.

// Example:
let arr4 = [1, 2, 3];
let arr5 = [...arr4]; // Creates a copy of arr4

// Flat Method:
// The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Example:
let arr6 = [1, 2, [3, 4]];
let flatArr = arr6.flat(); // Result: [1, 2, 3, 4]

// Array.isArray:
// This method checks if a value is an array.

// Example:
let arr7 = [1, 2, 3];
Array.isArray(arr7); // true

// Array.from:
// The Array.from method creates a new, shallow-copied array instance from an array-like or iterable object.

// Example:
let str = "hello";
let arr8 = Array.from(str); // Result: ['h', 'e', 'l', 'l', 'o']

// Array.of:
// The Array.of method creates a new array instance from a variable number of arguments.

// Example:
let arr9 = Array.of(1, 2, 3); // Result: [1, 2, 3]

// Slice and Splice:
// Slice returns a shallow copy of a portion of an array, while splice changes the contents of an array by removing or replacing existing elements.

// Example:
let arr10 = [1, 2, 3, 4, 5];
arr10.slice(2, 4); // Result: [3, 4]
arr10.splice(2, 1, 100); // Result: [1, 2, 100, 4, 5]

// Sort:
// The sort method sorts the elements of an array in place and returns the sorted array.

// Example:
let arr11 = [3, 1, 4, 2];
arr11.sort(); // Result: [1, 2, 3, 4]

// Join:
// The join method creates and returns a new string by concatenating all elements in an array.

// Example:
let arr12 = ['a', 'b', 'c'];
arr12.join('-'); // Result: 'a-b-c'

// Includes:
// The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// Example:
let arr13 = [1, 2, 3];
arr13.includes(2); // true
arr13.includes(4); // false



// Push, Pop, Unshift, Shift:
// These methods are used to add or remove elements from the beginning or end of an array.

let arr14 = [1, 2, 3];
arr14.push(4); // Adds 4 to the end of the array
arr14.pop(); // Removes the last element (4) from the array
arr14.unshift(0); // Adds 0 to the beginning of the array
arr14.shift(); // Removes the first element (0) from the array

// Concat:
// The concat method is used to merge two or more arrays, returning a new array without modifying the existing arrays.

let arr15 = [1, 2];
let arr16 = [3, 4];
let arr17 = arr15.concat(arr16); // Result: [1, 2, 3, 4]

// Reverse:
// The reverse method reverses the elements of an array in place.

let arr18 = [1, 2, 3];
arr18.reverse(); // Result: [3, 2, 1]