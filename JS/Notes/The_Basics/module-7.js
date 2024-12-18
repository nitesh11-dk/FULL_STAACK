//! Array Destructuring:
let arr = ["nitesh", 12, "maths"];
let [name, , age] = arr;
console.log(name, age); // Output: nitesh 12

//! Object Destructuring:
let obj = {
    nam: "nitesh",
    age12: 18,
    passo: 1234
};
let { nam, age12 } = obj; // Renaming properties during destructuring
console.log(nam , age12); // Output: 1234 18


//! spread and rest operator:
// Spread operator (…) expands an iterable (like an array) into individual elements.
// Rest operator (...) gathers individual elements into an array.

// *spread operator
let a = [1, 2, 3, 4,];
let b = [...a]; // here ... is acting as spread operator


// * rest operator
function example(a, b, ...c) { // here ... is acting as rest operator
    console.log(a, b, c);
}
example(1, 2, 3, 4, 5); // Output: 1 2 [3, 4, 5]





let nestedObj = {
    outerObj: {
        innerObj: {
            name: "John"
        }
    },
    rollo:12
};

//! Changing Property Name via Destructuring:
let { rollo :rollNumber} = nestedObj; // Renaming during destructuring
console.log(rollNumber); // Output: 12


//! Destructuring Object Within Object & Changing Property Name:
// let {outerObj.innerObj.name :name} =nestedObj  // ! wrong 
let { outerObj: { innerObj: { name: newName } } } = nestedObj;
console.log(newName); // Output: John

