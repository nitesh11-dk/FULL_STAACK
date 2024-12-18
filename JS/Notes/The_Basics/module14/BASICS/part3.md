
---

### **Addon - Info for `new` Keyword**

#### **What Happens When the `new` Keyword is Used:**

1. **A New Object is Created:**
   - The `new` keyword creates a new, empty object.
   
2. **A Prototype is Linked:**
   - The new object is linked to the constructor function's prototype.
   
3. **The Constructor is Called:**
   - The constructor function is called with `this` referring to the new object. Properties and methods are set up on this new object.
   
4. **The New Object is Returned:**
   - By default, the new object is returned from the constructor function.

#### **JavaScript Default Behavior:**

- **Prototypical Behavior:**
  - JavaScript uses prototype-based inheritance. Each object can inherit properties and methods from another object.
  
- **Everything is an Object:**
  - Almost everything in JavaScript is an object, including functions and arrays.

---

### **What is a Prototype?**

In JavaScript, every function has a `prototype` property. This `prototype` is an object that contains properties and methods that are shared by all instances of the function. When you create a new object using a constructor function, this object inherits properties and methods from the constructor's prototype.

**Key Points:**
- **Prototype Object:** The prototype object is used to share methods and properties across all instances created by the constructor function.
- **Inheritance:** Instances of a constructor function inherit properties and methods from the prototype.

### **Defining Methods: Constructor Function vs. Prototype**

#### **1. Methods Inside Constructor Function:**

When you define a method inside the constructor function, it is added to each instance individually. This means that each object created with the constructor will have its own copy of that method.

**Example:**

```js
function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
    this.displayInfo = function() {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
    };
}

let student1 = new Student("Alice", 1);
let student2 = new Student("Bob", 2);

student1.displayInfo();  // Output: Name: Alice, Roll No: 1
student2.displayInfo();  // Output: Name: Bob, Roll No: 2
```

**Drawbacks:**
- **Memory Usage:** Each instance gets its own copy of the method, which can increase memory usage if many instances are created.
- **Redundancy:** Methods defined inside the constructor function are redundant across all instances.

#### **2. Methods Using Prototype:**

When you define methods on the prototype of a constructor function, all instances share the same method from the prototype object. This is more memory efficient as there is only one copy of the method shared among all instances.

**Example:**

```js
function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

Student.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
};

let student1 = new Student("Alice", 1);
let student2 = new Student("Bob", 2);

student1.displayInfo();  // Output: Name: Alice, Roll No: 1
student2.displayInfo();  // Output: Name: Bob, Roll No: 2
```

**Advantages:**
- **Memory Efficiency:** All instances share the same method, which saves memory.
- **Method Sharing:** Methods are defined once on the prototype and shared across all instances.

### **In Summary:**

- **Constructor Method:** Adding methods inside the constructor function creates a separate method for each instance, which can be less efficient.
- **Prototype Method:** Adding methods to the prototype ensures that there is a single shared method for all instances, making it more memory efficient and cleaner.

---

- **: Now with the help of Prototype , you can Extend Built-in Object Prototypes:**

    ```js
    Array.prototype.indexLength = function() {
        console.log(this.length - 1);
    };

    let arr = [2, 3, 4, 5, 10];
    arr.indexLength(); // Output: 4 (length - 1)  
    arr.length // Output: 5
    ```

    ```js
    String.prototype.trueLength = function() {
        console.log(this.trim().length);
    };

    let str = "    JavaScript    ";
    str.trueLength();  // Output: 10
    ```

#### **Prototype Inheritance:**

- **Older Way:**

    ```js
    var human = {
        name: "Harsh",
        canFly: true,
        canTalk: true,
        willDie: true
    };

    var sherryStudent = {
        solveQuestion: true,
        createModernWeb: true
    };

    sherryStudent.__proto__ = human;

    console.log(sherryStudent.canFly);  // Output: true
    ```

- **Modern Way:**

    ```js
    const teacher = {
        canTeach: true
    };

    const student = {
        canLearn: true
    };

    Object.setPrototypeOf(student, teacher);

    console.log(student.canTeach);  // Output: true
    ```

### **Prototype Inheritance**

Prototype inheritance allows objects to inherit properties and methods from other objects. This is done using the prototype chain.

**Older Way:**
```js
var human = {
    name: "Harsh",
    canFly: true
};

var sherryStudent = {
    solveQuestion: true
};

// Set sherryStudent's prototype to human
sherryStudent.__proto__ = human;

console.log(sherryStudent.canFly);  // Output: true
```
- **Explanation:** `sherryStudent` inherits properties from `human` via the `__proto__` property.

**Modern Way:**
```js
const teacher = {
    canTeach: true
};

const student = {
    canLearn: true
};

// Set student’s prototype to teacher
Object.setPrototypeOf(student, teacher);

console.log(student.canTeach);  // Output: true
```
- **Explanation:** `student` inherits properties from `teacher` using `Object.setPrototypeOf`.

### **`Object.setPrototypeOf` Syntax**

The `Object.setPrototypeOf` method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.

#### **Syntax:**
```js
Object.setPrototypeOf(target, prototype);
```

- **`target`**: The object whose prototype you want to change.
- **`prototype`**: The object to set as the prototype of the target object, or `null` to remove the prototype chain.

#### **Example:**
```js
const animal = {
    eats: true
};

const dog = {
    barks: true
};

// Set the prototype of dog to animal
Object.setPrototypeOf(dog, animal);

console.log(dog.eats);  // Output: true
console.log(dog.barks); // Output: true
```
In this example, `dog` inherits the `eats` property from `animal` through the prototype chain.