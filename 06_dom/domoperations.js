// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title');
//     // Perform operations on the element
//     console.log(titleElement);
// });
// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').id;
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').class;
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').className;
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').getAttribute;
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').getAttribute('id');
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').getAttribute('class');
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').setAttribute('class', 'test');
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title').setAttribute('class', 'test heading');
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title');
//     titleElement.style.backgroundColor = 'green';
//     titleElement.style.padding = '15px';
//     titleElement.style.borderRadius = '15px';
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title');
//     titleElement.style.backgroundColor = 'green';
//     titleElement.style.padding = '15px';
//     titleElement.style.borderRadius = '15px';
//     const textContent = titleElement.textContent; // Assign the value of titleElement.textContent to a variable
//     console.log(textContent); // Use the variable in a function call or assignment
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title');
//     titleElement.style.backgroundColor = 'green';
//     titleElement.style.padding = '15px';
//     titleElement.style.borderRadius = '15px';
//     const innerTextContent = titleElement.innerText; // Assign the value of titleElement.textContent to a variable
//     console.log(innerTextContent); // Use the variable in a function call or assignment
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ID
//     const titleElement = document.getElementById('title');
//     titleElement.style.backgroundColor = 'green';
//     titleElement.style.padding = '15px';
//     titleElement.style.borderRadius = '15px';
//     const innerHTMLContent = titleElement.innerHTML; // Assign the value of titleElement.textContent to a variable
//     console.log(innerHTMLContent); // Use the variable in a function call or assignment
//     // Perform operations on the element
//     console.log(titleElement);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified ClassName
//     const getElementByClassName = document.getElementsByClassName('heading');
//      // Perform operations on the element
//     console.log(getElementByClassName);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified QuerySelector
//     const querySelectorElementCheck = document.querySelector('h2');
//      // Perform operations on the element
//     console.log(querySelectorElementCheck);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified QuerySelector
//     const querySelectorElementCheck = document.querySelector('#title');
//      // Perform operations on the element
//     console.log(querySelectorElementCheck);
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified QuerySelector
//     const querySelectorElementCheck = document.querySelector('.heading');
//      // Perform operations on the element
//     console.log(querySelectorElementCheck);
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified QuerySelector
//     const querySelectorElementCheck = document.querySelector('input[type="password"]');
//      // Perform operations on the element
//     console.log(querySelectorElementCheck);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Access the element with the specified QuerySelector
//     const querySelectorElementCheck = document.querySelector('p:first-child');
//      // Perform operations on the element
//     console.log(querySelectorElementCheck);
// });

document.addEventListener('DOMContentLoaded', function () {
    // Access the element with the specified QuerySelector
    const myUnorderedList = document.querySelector('ul');
    const turnGreen = myUnorderedList.querySelector('li');
    turnGreen.style.backgroundColor = 'green';
    turnGreen.style.padding = '10px';
    turnGreen.innerText = 'I am green';
});