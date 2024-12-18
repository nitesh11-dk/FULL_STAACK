// why objects ?

// Objects in JavaScript allow you to represent real-world entities with multiple attributes. For example, you can create an object to represent a book in a library, with properties like title, author, genre, publication year, and availability status. Using objects, you can organize and manage complex data structures efficiently in your JavaScript code, making it easier to work with real-world entities and their properties.

// Define an object to represent a book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationYear: 1925,
    available: true
};

// Accessing Objects properties in two ways, accessing symbol from an object

// Object Basics:
// Objects in JavaScript are collections of key-value pairs. Keys are strings (or Symbols), and values can be of any data type.

// Creating a Symbol and Adding it to an Object:
let sym = Symbol(); // Create a unique symbol
let obj = {
    2: "hitesh",  // Numeric key
    age: 23,       // String key
    [sym]: "ksfsjflsf", // Symbol key
    name: {
        name: "hitesh",
        lastName: "kumar"
    }  
};
console.log(obj.name); // 1. Accessing property using key
console.log(obj[sym]); // Accessing property using Symbol
console.log(obj["age"]); // 2. Accessing property using string key

// ! accessing object ke yander object ko  
let nam = obj.name.name;
 console.log(nam)


// Object Methods:

// 1. Object.keys:
// Returns an array containing the keys of an object.
console.log(Object.keys(obj)); // Output: ['2', 'age']

// 2. Object.values:
// Returns an array containing the values of an object.
console.log(Object.values(obj)); // Output: ['hitesh', 23]

// 3. Object.entries:
// Returns an array containing arrays of key-value pairs.
console.log(Object.entries(obj)); // Output: [['2', 'hitesh'], ['age', 23]]

// 4. Object.freeze:
// Object.freeze method ka use hota hai objects ko "frozen" karne ke liye, matlab unhe change nahi kar sakte. Jab koi object freeze ho jata hai, to uske properties ko add, delete, ya modify nahi kiya ja sakta.

// Example:
// const obj = { name: 'John', age: 30 };
Object.freeze(obj);
obj.age = 40; // Yeh change nahi hoga, kyunki obj freeze ho chuka hai


// 5. Object.isFrozen:
// Object.isFrozen method ka use hota hai check karne ke liye ki ek object frozen hai ya nahi. Yeh true ya false return karta hai.

// Example:
const obj1 = { name: 'John', age: 30 };
Object.freeze(obj1);
Object.isFrozen(obj1); // true


// 6. Object.seal:
// Object.seal method ka use hota hai objects ko "sealed" karne ke liye. Sealed objects mei properties ko add ya remove nahi kiya ja sakta, lekin existing properties ke values change kiye ja sakte hai.

// Example:
const obj2 = { name: 'John', age: 30 };
Object.seal(obj2);
obj2.age = 40; // Change hoga, kyunki obj sealed hai
obj2.gender = 'Male'; // Naya property add nahi hoga
delete obj2.name; // Property delete nahi hoga

// 7. Object.isSealed:
// Object.isSealed method ka use hota hai check karne ke liye ki ek object sealed hai ya nahi. Yeh true ya false return karta hai.

// Example:
const obj3 = { name: 'John', age: 30 };
Object.seal(obj3);
Object.isSealed(obj3); // true

// 8. Object.assign:
// Merges two or more objects by copying the properties from one or more source objects to a target object.
let obj12 = {
    1: "hello",
    age: 233,
    name: {
        firstName: "hitesh",
        lastName: "kumar"
    }
};
let mergedObj = Object.assign({}, obj, obj12);
console.log(mergedObj);

// 9. Object.hasOwnProperty:
// Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(obj.hasOwnProperty("age")); // Output: true


// !  Additional Object Methods: check  kar sakte ho  if you want to know more

// 10. Object.getOwnPropertyNames:
// Returns an array containing the names of all own properties of an object (including non-enumerable properties except for those which use Symbol).
console.log(Object.getOwnPropertyNames(obj)); // Output: ['2', 'age']

// 11. Object.getOwnPropertySymbols:
// Returns an array of all symbol properties found directly upon a given object.
console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol()]

// 12. Object.create:
// Creates a new object with the specified prototype object and properties.
const prototypeObj = { x: 1, y: 2 };
const newObj = Object.create(prototypeObj);
console.log(newObj.x); // Output: 1

// 13. Object.getPrototypeOf:
// Returns the prototype of the specified object.
console.log(Object.getPrototypeOf(newObj) === prototypeObj); // Output: true

// 14. Object.setPrototypeOf:
// Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
const anotherObj = {};
Object.setPrototypeOf(anotherObj, prototypeObj);
console.log(anotherObj.x); // Output: 1

// 15. Object.getOwnPropertyDescriptors:
// Returns all own property descriptors of a given object.
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.age); // Output: { value: 23, writable: true, enumerable: true, configurable: true }

// 16. Object.is:
// Determines whether two values are the same value.
console.log(Object.is(5, 5)); // Output: true

// 17. Object.entries with Map:
// Converts an object into a Map, allowing methods like forEach, get, set, etc.
const mapFromObject = new Map(Object.entries(obj));
console.log(mapFromObject.get("age")); // Output: 23

// 18. Object.fromEntries:
// Converts an array of key-value pairs into an object.
const entries = [['a', 1], ['b', 2]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // Output: { a: 1, b: 2 }

// These additional methods provide more flexibility and functionality for working with JavaScript objects.

