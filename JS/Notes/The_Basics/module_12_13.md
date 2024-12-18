
---

# **Module 12 - Asynchronous & API Handling**

## 1. `setInterval` & `setTimeout`

- **`setInterval`**: Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

  ```javascript
  setInterval(() => {
    console.log('This message will be displayed every 2 seconds.');
  }, 2000);
  ```

- **`setTimeout`**: Executes a function or code snippet after a specified delay.

  ```javascript
  setTimeout(() => {
    console.log('This message will be displayed after 2 seconds.');
  }, 2000);
  ```

## 2. `clearInterval` & `clearTimeout`

- **`clearInterval`**: Stops the execution of a function that was set up with `setInterval`.

  ```javascript
  let intervalId = setInterval(() => {
    console.log('This will not be printed.');
  }, 1000);

  clearInterval(intervalId);
  ```

- **`clearTimeout`**: Stops the execution of a function that was set up with `setTimeout`.

  ```javascript
  let timeoutId = setTimeout(() => {
    console.log('This will not be printed.');
  }, 1000);

  clearTimeout(timeoutId);
  ```

## 3. Main Stack, Call Stack, & Event Loop

- **Main Stack**: The stack of function calls that are currently being executed. Functions are added to the stack when they are called and removed when they return.

- **Call Stack**: The stack that keeps track of the function calls. It operates in a Last In, First Out (LIFO) manner.

- **Event Loop**: The mechanism that handles asynchronous operations in JavaScript. It continually checks the message queue and executes the callback functions.

  ```javascript
  console.log('Start');

  setTimeout(() => {
    console.log('Timeout');
  }, 0);

  console.log('End');
  ```

  Output:
  ```
  Start
  End
  Timeout
  ```

## 4. Creating Promises

A Promise represents an operation that hasn't completed yet but is expected in the future.

  ```javascript
  let myPromise = new Promise((resolve, reject) => {
    let success = true; // This can be changed to false to test rejection
    if (success) {
      resolve('Operation was successful!');
    } else {
      reject('Operation failed.');
    }
  });
  ```

## 5. `then`, `catch`, `finally`, `async`, `await`

- **`then`**: Handles the resolved value of a promise.

  ```javascript
  myPromise.then((message) => {
    console.log(message);
  });
  ```

- **`catch`**: Handles any errors if the promise is rejected.

  ```javascript
  myPromise.catch((error) => {
    console.log(error);
  });
  ```

- **`finally`**: Executes code after the promise has been settled (either resolved or rejected).

  ```javascript
  myPromise.finally(() => {
    console.log('This will always execute.');
  });
  ```

- **`async` & `await`**: Simplify working with promises by allowing asynchronous code to be written in a synchronous style.

  ```javascript
  async function asyncFunction() {
    try {
      let result = await myPromise;
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('This will always execute.');
    }
  }
  ```

## 6. `Promise.all`

- **`Promise.all`**: Takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any promise rejects.

  ```javascript
  let p1 = Promise.resolve(1);
  let p2 = Promise.resolve(2);
  let p3 = Promise.resolve(3);

  Promise.all([p1, p2, p3])
    .then((results) => {
      console.log(results); // [1, 2, 3]
    })
    .catch((error) => {
      console.log(error);
    });
  ```

## 7. `Promise.race`

- **`Promise.race`**: Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

  ```javascript
  let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'First'));
  let p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Second'));

  Promise.race([p1, p2])
    .then((result) => {
      console.log(result); // 'Second'
    });
  ```

## 8. `Promise.any`

- **`Promise.any`**: Returns a promise that resolves as soon as any of the promises in the array resolves, or rejects if all promises are rejected.

  ```javascript
  let p1 = Promise.reject('Error 1');
  let p2 = Promise.reject('Error 2');
  let p3 = Promise.resolve('Success');

  Promise.any([p1, p2, p3])
    .then((result) => {
      console.log(result); // 'Success'
    })
    .catch((error) => {
      console.log(error);
    });
  ```

## 9. AJAX

- **AJAX (Asynchronous JavaScript and XML)**: Allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.

  ```javascript
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
  ```

## 10. JSON

- **JSON (JavaScript Object Notation)**: A lightweight data-interchange format.

  ```javascript
  let obj = { name: 'John', age: 30 };
  let jsonString = JSON.stringify(obj); // Convert object to JSON string
  console.log(jsonString);

  let jsonObject = JSON.parse(jsonString); // Convert JSON string back to object
  console.log(jsonObject);
  ```

## 11. Fetch API

- **Fetch API**: Provides a modern way to make network requests.

  ```javascript
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  ```

## 12. Axios Library

- **Axios**: A promise-based HTTP client for the browser and Node.js. It differs from Fetch by providing additional features such as interceptors.

  ```javascript
  const axios = require('axios');

  axios.get('https://api.example.com/data')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  ```

## 13. API Endpoints and Routes

- **API Endpoints**: Specific paths within an API that handle requests. Each endpoint performs a particular action, such as retrieving or modifying data.

  ```javascript
  // Example endpoints:
  // GET /users - Retrieve user data
  // POST /users - Create a new user
  ```

- **API Routes**: Define the structure and behavior of the API endpoints.

  ```javascript
  // Example route definition in Express.js
  const express = require('express');
  const app = express();

  app.get('/users', (req, res) => {
    res.send('Get users');
  });

  app.post('/users', (req, res) => {
    res.send('Create user');
  });
  ```

## 14. Displaying Data with HTML

- **Displaying Data**: Use JavaScript to manipulate the DOM and display data dynamically.

  ```javascript
  document.getElementById('output').innerHTML = '<p>Hello, World!</p>';
  ```

## 15. HTTP Headers

- **HTTP Headers**: Provide metadata about the HTTP request or response.

  ```javascript
  fetch('https://api.example.com/data')
    .then(response => {
      console.log(response.headers.get('Content-Type'));
    });
  ```

## 16. GET and POST Methods

- **GET Method**: Requests data from a specified resource.

  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

- **POST Method**: Sends data to a server to create or update a resource.

  ```javascript
  fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John' })
  })
    .then(response => response.json())
    .then(data => console.log(data));
  ```

## 17. Query Strings

- **Query Strings**: Used to pass parameters in the URL of a GET request.

  ```javascript
  fetch('https://api.example.com/data?search=query')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

---

# **Module 13 - Error Handling & File Management**

## 1. Try-Catch

- **Try-Catch**: Handles exceptions in JavaScript.

  ```javascript
  try {
    let result = riskyOperation();
  } catch (error) {
    console.log('

Error occurred:', error);
  }
  ```

## 2. Custom Error Handling (Using Extend Error Class)

- **Custom Error Handling**: Create custom error classes by extending the `Error` class.

  ```javascript
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }

  try {
    throw new CustomError('Something went wrong');
  } catch (error) {
    console.log(error.name); // CustomError
    console.log(error.message); // Something went wrong
  }
  ```

## 3. Require & Export

- **`require`**: Import modules in Node.js.

  ```javascript
  const module = require('./module');
  ```

- **`export`**: Export modules in Node.js.

  ```javascript
  module.exports = function() { /*...*/ };
  ```

## 4. Default Import/Export

- **Default Export**: Export a single value or function as the default export.

  ```javascript
  // module.js
  module.exports = function() { /*...*/ };
  
  // app.js
  const myFunc = require('./module');
  ```

## 5. Named Import/Export

- **Named Export**: Export multiple values or functions.

  ```javascript
  // module.js
  exports.myFunc = function() { /*...*/ };
  exports.myValue = 42;

  // app.js
  const { myFunc, myValue } = require('./module');
  ```

## 6. Taking Input in JS with Node

- **Taking Input**: Use `readline` to interact with the user.

  ```javascript
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What is your name? ', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
  });
  ```

---
