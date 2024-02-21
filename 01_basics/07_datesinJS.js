// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // single digit count from 0
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("2023-01-14"); // YY-MM-DD
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023"); // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); // results in milliseconds

console.log(Date.now()/1000); // convert to seconds -----> results in decimal

// so using Math.floor()

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // starting from zero

// we see doing +1 so that it won't create confusion
console.log(newDate.getMonth()+1);

// newDate.toLocaleString('default',{
//     weekday: "long"
// })


