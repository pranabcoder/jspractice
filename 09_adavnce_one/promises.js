// const promiseOne = new Promise((resolve, reject) => {

//     // Do an async task
//     // DB Calls, cryptography, read/write file, network calls
//   setTimeout(() => {
//     console.log("Async Work Complete");
//     resolve("Promise One");
//   }, 2000);
// });

// promiseOne.then((value) => {
//   console.log(value);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 started");
//     resolve();
//   }, 2000);
// }).then(() => {
//     console.log("Async task 2 complete");
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("Async task 3 started");
//     resolve({
//         username: "Chai",
//         email: "chai@example.com"
//     });
//   }, 2000);
// });

// promiseThree.then((value) => {
//     console.log(value);
//     console.log("Async task 3 complete");
// });

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
//       if (!error) {
//         resolve({
//           username: "John",
//           password: "1234"
//         });
//       } else {
//         reject(new Error('ERROR: Something went wrong'));
//       }
//   }, 2000);
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise Four is completed");
// });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "javascript",
//         password: "123"
//       });
//     } else {
//       reject(new Error("ERROR: JS went wrong"));
//     }
//   }, 2000);
// });

// async function consumePromiseFive(){

//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

async function getAllUsers() {
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response);
    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
