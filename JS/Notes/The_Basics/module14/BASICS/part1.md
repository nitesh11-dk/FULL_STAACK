
---


## Programming Paradigm Kya Hai?

Programming paradigm ka matlab hota hai code likhne ka tareeka ya structure. Ye ek approach hoti hai jo batati hai ki hum code ko kaise organize karein. Different paradigms ke alag-alag rules aur principles hote hain, jaise ki Functional Programming, Object-Oriented Programming (OOP), aur Procedural Programming.

---

### 1. **Functional Programming (FP) – Calculator App**

**Definition**:  
Functional programming ek aisa approach hai jisme tum functions ka use karte ho jo same input pe hamesha same output dete hain (pure functions), aur data ko change nahi karte (immutability).

**Real-World Example**:  
**Calculator App** – Calculator ke operations (addition, subtraction, multiplication, etc.) ko tum FP style mein likh sakte ho. Har function ek calculation karega bina kisi side-effects ke, matlab tumhara data kabhi change nahi hoga, sirf result milega.

**Example Code**:
```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

**Where it’s used**: Calculator apps, data transformation tools, financial apps, etc.

---

### 2. **Object-Oriented Programming (OOP) – Game Development**

**Definition**:  
OOP ek aisa programming style hai jisme tum **objects** ka use karte ho jo real-world cheezon ko represent karte hain. Har object mein data (properties) aur behavior (methods) hota hai. OOP ke main concepts hain **classes**, **inheritance**, **polymorphism**, aur **encapsulation**.

**Real-World Example**:  
**Car Racing Game** – Tum `Car` naam ki class banaoge jisme `speed`, `fuel`, aur `position` jaise properties honge, aur `start()`, `stop()` jaise methods honge. Phir har player ke liye ek nayi car banayi ja sakti hai jo apni unique properties rakhti hai.

**Example Code**:
```javascript
class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    start() {
        console.log(`${this.name} started at speed ${this.speed}`);
    }
}

const car1 = new Car('Ferrari', 200);
car1.start(); // Output: Ferrari started at speed 200
```

**Where it’s used**: Video games, GUI applications, web apps with complex data, etc.

---

### 3. **Procedural Programming (PP) – To-Do List App**

**Definition**:  
Procedural programming ek sequential approach hai jisme tum code ko step-by-step likhte ho. Har function ya procedure ek specific task ko solve karta hai, aur ye code ek ke baad ek chalata hai.

**Real-World Example**:  
**To-Do List App** – Tum ek to-do list banane ka code likh sakte ho jo sequentially tasks ko manage karega. Har task ko add karne ke liye ek `addTask()` function hoga, aur complete karne ke liye `completeTask()` function hoga.

**Example Code**:
```javascript
let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

function completeTask(index) {
    tasks[index] = `[Completed] ${tasks[index]}`;
    console.log(`Task completed: ${tasks[index]}`);
}

addTask('Finish homework');
completeTask(0);
```

**Where it’s used**: Small apps, command-line tools, small utilities, etc.

---

### **Pros and Cons**:

| Paradigm            | Pros                                             | Cons                                           |
|---------------------|--------------------------------------------------|------------------------------------------------|
| **Functional**      | Simple to understand, predictable, no side-effects | Not ideal for complex state management         |
| **OOP**             | Great for complex, real-world modeling, reusable code | Can get complex, overkill for simple apps      |
| **Procedural**      | Easy to write and follow, good for small programs | Can become messy for large projects (spaghetti code) |

### Summary:
- **FP** (Calculator): Predictable and reliable calculations.
- **OOP** (Car Racing Game): Complex object and behavior modeling.
- **PP** (To-Do List): Simple, step-by-step tasks management.


---

### Relationship:
- **OOP** and **FP** are modern paradigms that can exist together in many languages (JavaScript, Python, Scala). FP focuses on **functions** and avoiding state changes, while OOP focuses on **objects** and **state**.
- **Procedural programming** is an earlier, simpler paradigm where code is executed **line by line** and grouped into functions or procedures, but without the more complex structures of OOP or FP.

### Conclusion:
- **Functional Programming (FP)** and **OOP** are distinct paradigms but can be used together in languages that support both.
- **Procedural Programming** is different from **OOP** and is often considered an older, simpler style of programming.

  So, we can't say **FP is related to OOP** or **Procedural is related to Procedural Languages** — they are different approaches to solving programming problems.


---

| **Language** | **Multi-Paradigm** | **Functional Programming** | **Object-Oriented Programming** | **Procedural Programming** | **Systems Programming** | **Use Cases**                                                                                     |
|--------------|---------------------|----------------------------|---------------------------------|----------------------------|-------------------------|--------------------------------------------------------------------------------------------------|
| **Java**     | Yes                 | Limited                    | Strong                          | Moderate                    | No                      | Enterprise applications, web applications, Android development, large-scale systems             |
| **C++**      | Yes                 | Limited                    | Strong                          | Strong                      | Yes                     | Systems programming, game development, performance-critical applications, embedded systems       |
| **Python**   | Yes                 | Strong                     | Strong                          | Moderate                    | No                      | Web development, data science, automation, scripting, artificial intelligence, scientific computing|
| **JavaScript**| Yes                | Strong                     | Strong                          | Moderate                    | No                      | Web development (client-side and server-side), interactive applications, front-end development   |
| **Rust**     | Yes                 | Moderate                   | Moderate                        | Moderate                    | Strong                  | Systems programming, performance-critical applications, safe concurrency, web assembly            |


### Notes

- **Java**: Primarily OOP, used in enterprise apps; limited FP support.
- **C++**: Strong in OOP and procedural programming; used for systems programming.
- **Python**: Versatile; strong in FP and OOP; popular for many applications.
- **JavaScript**: Multi-paradigm; good FP and OOP; mainly for web development.
- **Rust**: Multi-paradigm; excels in systems programming; growing FP support, focuses on safety and concurrency.


---


1. [Slideplayer link](https://slideplayer.com/slide/13135897/)
2. [Hashnode image link](https://cdn.hashnode.com/res/hashnode/image/upload/v1604001468887/YzVRTd9B4.png?auto=compress,format&format=webp)


---

### 1. **JavaScript mein classes hain?**
Haan, JavaScript mein classes hain. Lekin, JavaScript prototype-based language hai. `class` syntax jo ES6 mein aaya, vo ek tarah ka shorthand hai jo prototypes ko use karne ko asaan banata hai. Classes ke peeche bhi prototypes hi kaam karte hain.

### 2. **Procedural Programming (PP) aur Object-Oriented Programming (OOP) mein kya fark hai?**
- **Procedural Programming (PP)**: Code step-by-step likha jata hai, functions ya procedures mein. Simple aur choti tasks ke liye acha hai.
- **Object-Oriented Programming (OOP)**: Code ko objects aur classes ke around organize karta hai. Complex systems ko model karne ke liye use hota hai, aur code ko reusable aur manageable banata hai.

### 3. **OOP kya hai aur kyun use karte hain?**
- **OOP (Object-Oriented Programming)**: Ek programming style jisme code objects aur classes ke around structure hota hai. Encapsulation, inheritance, aur polymorphism use karta hai.
- **OOP kyun use karte hain?**: Code ko organize aur manage karna asaan hota hai, especially large applications mein. Code modular aur reusable hota hai, aur real-world entities ko model karna aasan hota hai.



### Pillars of OOP

1. **Abstraction**:
   - **Explanation**: Complex details ko hide karta hai, aur sirf zaroori features dikhata hai.
   - **Example**: Car ka dashboard speed aur fuel level dikhata hai, lekin engine ki complex mechanics ko nahi dikhata.

2. **Encapsulation**:
   - **Explanation**: Data aur methods ko ek unit mein bundle karta hai aur kuch components ki access ko restrict karta hai.
   - **Example**: Smartphone app jo personal data ko securely store karti hai aur user interface ke through limited access provide karti hai.

3. **Inheritance**:
   - **Explanation**: Ek nayi class ko existing class ki properties aur methods inherit karne deta hai.
   - **Example**: "Bird" class ko base class bana sakte hain "Sparrow" aur "Eagle" classes ke liye, jo general bird characteristics inherit karti hain.

4. **Polymorphism**:
   - **Explanation**: Objects ko parent class ke instances ke roop mein treat karta hai, aur ek hi method ki different implementations allow karta hai.
   - **Example**: "Shape" class mein `draw()` method; "Circle" aur "Rectangle" classes apni apni `draw()` implementation rakh sakti hain.


   