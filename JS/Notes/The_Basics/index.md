# JavaScript Index

## 1. How Js works
- Execution Context
  - Memory Component (Variable Environment)
  - Code Component (Thread of Execution)
- Variable Environment
- Thread of Execution

## 2. Module-1
### 1. Data Types
- Primitive Data Types
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Symbol
  - BigInt
- Non-Primitive Data Types
  - Array
  - Object
  - Function

## 3. Stack and Heap Memory
- Stack Memory
- Heap Memory

## 4. Deep Copy vs Shallow Copy
- Deep Copy
- Shallow Copy

## 5. Dynamics vs Statics
- JavaScript (Dynamic)
- TypeScript (Static)

## 6. Mutable vs Immutable
- Mutable
- Immutable

## 7. Undefined, Null, NaN
- Undefined
- Null
- NaN

## 3. Module-2 String & its methods
- String Interpolation
- Template Literals
- String Methods
  1. slice()
  2. charAt()
  3. indexOf()
  4. substring()
  5. trim()
  6. replace()
  7. split()
  8. repeat()
  9. toUpperCase()
  10. toLowerCase()
  11. concat()
  12. startsWith()
  13. endsWith()
  14. includes()
  15. padStart()
  16. padEnd()
  17. match()
  18. search()
  19. substr()
  20. localeCompare()

## 4. Module-3 Number, Math and its methods
- Number Methods
  1. toFixed()
  2. toPrecision()
  3. toString()
  4. toLocaleString()
- Math Methods
  1. abs()
  2. round()
  3. ceil()
  4. floor()
  5. min()
  6. max()
  7. pow()
  8. sqrt()
  9. log()
  10. exp()
  11. sin()
  12. cos()
  13. tan()
  14. random()

 ## 5. Module-4  -- Addon & Booleans
2.  Truthy & Falsy Values
3.  Difference Between == and === & Difference Between let, const, and var
4.  Increment and Decrement Operator
5.  Comparison for Non-Numbers
6.  Try & Catch
7.  Additional Console Methods (warn, error, table)
8. !!   Using Double Negation (!!) to Check Truthiness:


##  6. Module-5  Array Methods and Concepts Index
# why array ? 
1. Array Basics
2. Behind the Scenes
3. Const Arrays
4. Spread Operator
5. Flat Method
6. Array.isArray
7. Array.from
8. Array.of
9. Slice and Splice
10. Sort
11. Join
12. Includes
13. Push, Pop, Unshift, Shift:
14. Concat:
15. Reverse:


## 7. Module-6 Object Basics & Object Methods
# why objects ? 
# Creating a Symbol and Adding it to an Object
# Accessing Object Properties

## Object Methods
 1. Object.keys
 2. Object.values
 3. Object.entries
 4. Object.freeze
 5. Object.isFrozen
 6. Object.seal
 7. Object.isSealed
 8. Object.assign
 9. Object.hasOwnProperty
 10. Object.getOwnPropertyNames
 11. Object.getOwnPropertySymbols
 12. Object.create
 13. Object.getPrototypeOf
 14. Object.setPrototypeOf
 15. Object.getOwnPropertyDescriptors
 16. Object.is
 17. Object.entries with Map
 18. Object.fromEntries

 ## 8. Module-7 destructuring & rest , spread Operator
 1. Array Destructuring:
 2. Object Destructuring:
 3.spread and rest operator:
 4. Changing Property Name via Destructuring:
 5. Destructuring Object Within Object & Changing Property Name:

 ## 9. Module-8   Functions
 1.Function Declaration or initialization & calling function 
 2.!Parameters & Arguments
 3.Function Reference & return keyword$$
 4. Object, Array, and Function as Arguments
 5.  Rest Operator with function 

 ## 10 . Module-9 Control Flow 
 1.If-Else
 2. If-Else Ladder
 3. Using logical operators in If-Else
 4. Switch Statement
 5.Nullish Coalescing Operator (??)
 6. Ternary Operator


---

## **Module 12 - Asynchronous & API Handling**

1. Timers and Intervals  
- **setInterval** & **setTimeout** ✔️  
- **clearInterval** & **clearTimeout** ✔️  

2. JavaScript Runtime  
- **Main Stack** & **Side Stack**  
- **Event Loop**  

3. Promises and Handling  
- **Creating Promises**  
- **Then**, **Catch**, **Finally**, **Async**, **Await**  
- **Promise.all**  
- **Promise.race**  
- **Promise.any**  

4. AJAX and JSON  
- **AJAX**  
- **JSON**  
  - **`JSON.parse()`**  
  - **`JSON.stringify()`**  

5. API Handling  
- **API (Application Programming Interface)**  
- **Fetch API** (using `.then-catch` and `async-await`)  
- **Axios Library** (difference from Fetch)  
- **API Endpoints and Routes**  
- **Query Strings**  
- **Displaying Data with HTML**  

---

## **Module 13 - Error Handling & File Management**
1. Error Handling  
- **Try-Catch**  
2. Modules and File Management  
- **Require** & **Export**  
- **Default Import/Export**  
- **Named Import/Export**  
3. Taking Input in JS with Node  
--- 


### Module 14 - Object-Oriented Programming (OOP) in JavaScript

**Programming Paradigms:**

1. **Functional Programming (FP)**  
2. **Object-Oriented Programming (OOP)**  
3. **Procedural Programming (PP)**  
4. **Structured Programming (SP)**  

**Additional Paradigms:**

1. **Declarative Programming**  
2. **Logic Programming**  
3. **Event-Driven Programming**  
4. **Concurrent Programming**  
5. **Reactive Programming**  
6. **Aspect-Oriented Programming (AOP)**  

**JavaScript Specific:**

1. Are there classes in JavaScript?  
2. What is the difference between Procedural Programming (PP) and Object-Oriented Programming (OOP)?  
3. What is OOP and why do we use it?  

**Object-Oriented Programming (OOP) Concepts:**

1. Pillars of OOP:  
   - Abstraction  
   - Encapsulation  
   - Inheritance  
   - Polymorphism  


2. Parts of OOP: Language-Specific Features  

- 1. Object Literals  
- 2. Constructor Functions  
        - `this` Keyword  
          - `this` with different contexts  
        - Constructor Function & Instance  
        - Instances (`new` Keyword) & `instanceof` Method, `instance.constructor`  
        - Why Use `new` Keyword  
        - Definition of Constructor Function

  # 5. Prototypes & Prototype Inheritance

## Addon - Info for New Keyword

### Topics:
- What happens when the `new` keyword is used:
  - A new object is created.
  - A prototype is linked.
  - The constructor is called.
  - The new object is returned.

### JavaScript Default Behavior:
- Prototypical behavior.
- Everything is an object.

### Ways to Add Methods to a Constructor Function:
- `this.methodName`.
- `functionName.prototype.methodName`.

### Inheritance:
- Older Way: `student.__proto__ = teacher`.
- Modern Way: `Object.setPrototypeOf(student, teacher)`.


   6. `call`, `apply`, `bind`  
   7. Classes, `extends`, `super()`  
   8. Creating Static Methods, Private Variables, Private Fields  
   9.  Getter and Setter Methods  
      - By Class  
      - By Function  
      - By Objects  
   10. `Object.getOwnPropertyDescriptor` & `Object.defineProperty`  
   11. `Object.create()`

1. **4 Pillars of OOP With Examples**  
   - Abstraction  
   - Encapsulation  
   - Inheritance  
   - Polymorphism