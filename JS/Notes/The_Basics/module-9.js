// Example demonstrating different types of control flow in JavaScript

// * 1. If-Else
const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// * 2. If-Else Ladder
const num = 5;
if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// * 3. Using logical operators in If-Else
const hour = 12;
if (hour < 12 && hour >= 6) {
    console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}

// * 4. Switch Statement
const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// * 7. Nullish Coalescing Operator (??)
// Nullish Coalescing Operator (??): The Nullish Coalescing Operator (??) is a JavaScript operator introduced in ES11 (or ES2020) that returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand. It's typically used to provide a default value for variables that might be null or undefined

//  ? ! Hinglish
// Nullish Coalescing Operator (??): Nullish Coalescing Operator (??) JavaScript mein ek operator hai jo ES11 (ya ES2020) mein introduce kiya gaya hai. Ye operator left-hand operand null ya undefined ho toh right-hand operand ko return karta hai, varna left-hand operand ko return karta hai. Ye aam taur par use hota hai variables ke liye default value provide karne ke liye jo null ya undefined ho sakta hai. Ye operator "??", yaani ke double question mark ke roop mein likha jata hai.


const defaultValue = "Default Value";
let userInput;
console.log(userInput ?? defaultValue);

// * 8. Ternary Operator

// Ternary Operator: The Ternary Operator (condition ? expr1 : expr2) is a concise way to write an If-Else statement in a single line. It evaluates the condition and returns expr1 if true, otherwise expr2.

const isAuthenticated = true;
const access = isAuthenticated ? "Access granted" : "Access denied";
console.log(access);
