let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // Wed Jun 09 2021 12:00:00 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Wed Jun 09 2021
// console.log(myDate.toLocaleString()); // 6/9/2021, 12:00:00 PM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date('2023-01-14');
// console.log(myCreatedDate.toDateString()); // Sat Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1623206400000
// console.log(myCreatedDate.getTime()); // 1671782400000
// console.log(Math.floor(Date.now()/1000));
// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// let newDate = new Date(Date.now());
// console.log(newDate); // 2021-06-09T06:30:00.000Z
// console.log(newDate.getMonth() + 1); // 5
// console.log(newDate.getDay());
// console.log(newDate.getFullYear()); // 2021

newData.toLocaleString('default', {
    weekday: 'long'
});