### Characteristics of Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects." These objects can be defined using classes, encapsulating data and functionality. The four main characteristics of OOP are **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction**.

#### 1. Classes and Objects
- **Class**: A class is a blueprint or template used to create objects. It defines attributes (data) and methods (functions) that an object will have.
- **Object**: An object is an instance of a class. When a class is created, no memory is allocated until an object is instantiated from it.

**Python Example**:

```python
# Class definition
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

# Object creation
car1 = Car("Tesla", "Model S")
car2 = Car("Ford", "Mustang")

# Accessing object attributes
print(car1.brand)  # Output: Tesla
print(car2.model)  # Output: Mustang
```

**JavaScript Example**:

```js
// Class definition
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

// Object creation
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Ford", "Mustang");

// Accessing object attributes
console.log(car1.brand);  // Output: Tesla
console.log(car2.model);  // Output: Mustang
```

#### 2. Encapsulation
- **English**: Encapsulation is the bundling of data and methods that operate on that data into a single unit, i.e., a class. It also restricts direct access to certain components by making them private, which can be done using the `__` prefix in Python.
- **Hinglish**: Encapsulation ka matlab hai data aur methods ko ek class ke andar bandhna. Yeh ensure karta hai ki kuch data ko directly access nahi kiya jaa sakta, aur yeh data private bana diya jaata hai using `__`.

**Python Example**:

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name  # Public attribute
        self.__salary = salary  # Private attribute

    # Getter method for salary (to access private attribute)
    def get_salary(self):
        return self.__salary

# Object creation
emp = Employee("John", 50000)

# Access public attribute
print(emp.name)  # Output: John

# Access private attribute through a method
print(emp.get_salary())  # Output: 50000
```

**JavaScript Example**:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;        // Public attribute
    let _salary = salary;    // Private attribute

    // Getter method for salary (to access private attribute)
    this.getSalary = function() {
      return _salary;
    };
  }
}

// Object creation
const emp = new Employee("John", 50000);

// Access public attribute
console.log(emp.name);  // Output: John

// Access private attribute through a method
console.log(emp.getSalary());  // Output: 50000
```

#### 3. Inheritance
- **English**: Inheritance allows one class (child class) to inherit properties and methods from another class (parent class). This facilitates code reuse and improves modularity.
- **Hinglish**: Inheritance ek aisa concept hai jisme ek class doosri class se properties aur methods inherit karti hai. Iska fayda yeh hota hai ki hume same code baar baar likhna nahi padta.

**Python Example**:

```python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound."

# Child class inheriting from Animal
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks."

# Object of child class
dog = Dog("Buddy")
print(dog.speak())  # Output: Buddy barks
```

**JavaScript Example**:

```js
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// Object of child class
const dog = new Dog("Buddy");
console.log(dog.speak());  // Output: Buddy barks
```

#### 4. Polymorphism
- **English**: Polymorphism allows objects to be treated as instances of their parent class while each object can have its own implementation of methods. It helps in defining methods that behave differently depending on the object calling them.
- **Hinglish**: Polymorphism ka matlab hai ki ek method alag objects ke liye alag tareeke se behave kare. Yeh concept ek method ko multiple forms mein define karne ka mauka deta hai.

**Python Example**:

```python
# Base class
class Bird:
    def fly(self):
        return "Birds can fly."

# Derived class
class Penguin(Bird):
    def fly(self):
        return "Penguins can't fly."

# Creating objects
sparrow = Bird()
penguin = Penguin()

# Calling the same method, different behavior
print(sparrow.fly())  # Output: Birds can fly.
print(penguin.fly())  # Output: Penguins can't fly.
```

**JavaScript Example**:

```js
// Base class
class Bird {
  fly() {
    return "Birds can fly.";
  }
}

// Derived class
class Penguin extends Bird {
  fly() {
    return "Penguins can't fly.";
  }
}

// Creating objects
const sparrow = new Bird();
const penguin = new Penguin();

// Calling the same method, different behavior
console.log(sparrow.fly());  // Output: Birds can fly.
console.log(penguin.fly());  // Output: Penguins can't fly.
```

#### 5. Abstraction
- **English**: Abstraction is the concept of hiding the complex implementation details of a system and exposing only the necessary parts. In Python, this is implemented using abstract classes.
- **Hinglish**: Abstraction ka matlab hai ki unnecessary details ko chhupa kar sirf important features ko expose karna. Python mein abstraction abstract classes ke through implement hota hai.

**Python Example**:

```python
from abc import ABC, abstractmethod

# Abstract base class
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Subclass implementing the abstract method
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

# Object of subclass
circle = Circle(5)
print(circle.area())  # Output: 78.5
```

**JavaScript Example**:

```js
// Abstract class in JavaScript is implemented through a normal class
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape.");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

// Subclass implementing the abstract method
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return 3.14 * this.radius ** 2;
  }
}

// Object of subclass
const circle = new Circle(5);
console.log(circle.area());  // Output: 78.5
```

### Summary of OOP Characteristics

| Characteristic      | Description                                              | Example                                               |
|---------------------|----------------------------------------------------------|-------------------------------------------------------|
| **Class & Object**   | A class is a blueprint, and objects are instances of the class | Creating a `Car` class and `car1` object of that class |
| **Encapsulation**    | Hiding data and bundling methods and attributes together | Private attributes in the `Employee` class            |
| **Inheritance**      | Child classes inherit properties and methods from parent classes | `Dog` class inherits from `Animal`                   |
| **Polymorphism**     | Same method behaves differently based on the object      | `fly()` method behaves differently for `Bird` and `Penguin` |
| **Abstraction**      | Hiding the complexity, showing only relevant details     | Abstract base class `Shape` with a method `area()`    |