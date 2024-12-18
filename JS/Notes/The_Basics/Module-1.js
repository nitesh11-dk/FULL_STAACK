
// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


// ! 2 Module-1

//  ? 1. Data Types
// *  # on the basis of how the data is kept and access from the memory there are two types of data types,

// * 1. Primitive Data Types

// ! There are 7 primitive data types in JavaScript:

// . 1. String: Represents a sequence of characters, enclosed within single ('') or double ("") quotes.
let name = "John";

// . 2. Number: Represents numeric data, including integers and floating-point numbers.
let age = 25;

// . 3. Boolean: Represents a logical entity, either true or false.
let isStudent = true;

// . 4. Null: Represents the intentional absence of any object value.
let score = null;

// . 5. Undefined: Represents a variable that has been declared but not assigned any value yet.
let address;

// . 6. Symbol: Represents a unique identifier for object properties.
const key = Symbol("uniqueKey");

// . 7. BigInt: Represents integers with arbitrary precision.
const bigNumber = 1234567890123456789012345678901234567890n;

// ! 2 .Non-Primitive Data Types

// . These include arrays, objects, and functions, which are reference types.

// * Examples:

// . Array: Represents a collection of elements indexed by numbers.
let numbers = [1, 2, 3];

// . Object: Represents a collection of key-value pairs.
let person = { name: "Alice", age: 30 };

// . Function: Represents reusable blocks of code.
function greet() {
  console.log("Hello!");
}

// ? +++++++++++++++++++++++++++++++++++++++++++++++++++++


// ? 2. Stack and Heap Memory

// ! Stack Memory:

// . Used for storing primitive data types.
// . Provides deep copies of data.
//   memory size and data is allocated that's why 
// . Faster access compared to heap memory.

// * Example:
let x = 10; // Here, 'x' holds the value 10 directly in the stack memory.

// ! Heap Memory:

// . Used for storing reference data types.
// . Provides references to data, leading to shallow copies.
// . Slower access compared to stack memory.

// * Example:
let arr = [1, 2, 3]; // 'arr' holds a reference to the array stored in heap memory.


// ? +++++++++++++++++++++++++++++++++++++++++++++++++++++


// ? 3 Deep Copy vs Shallow Copy

// . Deep Copy: Creates a new copy of data, independent of the original.
// . Shallow Copy: Copies references to the original data, meaning changes in one reflect in the other.

// * Example:
// . Deep Copy:
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray]; // Creates a new copy of the array.


// . Shallow Copy:
let originalObj = { name: "John" };
let copiedObj = originalObj; // 'copiedObj' holds a reference to the same object.


// ! Template literals : modern syntax for write storing `${variable/expresion}`
let name1 = 'Asan'
console.log(`Team name is ${1+2}`);

// ? +++++++++++++++++++++++++++++++++++++++++++++++++++++


// ? 4  Dynamics vs Statics

// . JavaScript is a dynamic type language, allowing variable type changes.
// . TypeScript is a static type language, enforcing fixed variable types.
// . Static typing enhances code readability and catches errors at compile time.

// * Example (JavaScript):
let dynamicVar = 10;
dynamicVar = "Changed to a string"; // Valid in JavaScript.

// * Example (TypeScript):
// let staticVar: number = 10;  // ts ka code hy js
// staticVar = "Error! Type 'string' is not assignable to type 'number'."; // Error in TypeScript.

// ? +++++++++++++++++++++++++++++++++++++++++++++++++++++


// ? 5 . Mutable vs Immutable

// . Mutable: Objects whose state can be modified after creation.
// . Immutable: Objects whose state cannot be changed once created.
// . Immutable objects are thread-safe and can be shared across multiple threads without the need for synchronization.

// * Example (Mutable):
let mutableObj = { name: "Alice" };
mutableObj.name = "Bob"; // Valid - modifying object property.

// * Example (Immutable):
const immutableObj = { name: "Alice" };
// immutableObj.name = "Bob"; // Error! Cannot assign to 'name' because it is a constant.


// ? +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ? 6 . Undefined  , Null , NaN

// * Undefined
// ? Undefined represents a variable that has been declared but has not yet been assigned a value. It is also returned when trying to access an object property that does not exist.
// ? Real-life Example: A package that hasn't been delivered yet and its status is unknown.
//  ? in memory execution phase  ,  all the variable decelaratios is first initilized to undefined .

// * Null 
//? Null represents the intentional absence of any value or object. It is typically used to signify that a variable or object does not currently have a value assigned to it.
//? Real-life Example: A shopping cart that hasn't had any items added to it yet.
let shoppingCart = null; // Initially, the shopping cart is empty




//*  NaN ( Not a Number) -- type of NaN is  Number , NaN is the number which is not real that is not a number
//? NaN represents a value that is not a valid number. It is typically returned when performing mathematical operations on non-numeric data types.
//? Real-life Example: Trying to perform arithmetic with non-numeric data, such as multiplying a string by a number.

let result = "hello" * 5; // Attempting to multiply a string by a number
console.log(result); // Output: NaN


// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++
