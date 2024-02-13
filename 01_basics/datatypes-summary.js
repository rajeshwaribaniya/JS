// Two data types : primitive and non - primitive/ reference

// Primitive --> call by value
// 7 types
/*  1. String
    2. Number
    3. Boolean
    4. Null (like temperature not zero , its empty)
    5. Undefined --> variable is only declared
    6. Symbol --> To make value unique
    7. BigInt
*/


// Reference type (Non- primitive)
// Array, Objects, Functions


// let userEmail;
// const score = 100;

// const id = Symbol('123');

// const anotherId = Symbol('123');
// console.log(typeof anotherId);   // Result --> symbol

// // console.log(id === anotherId);

// const animals = ["Lion", "Tiger", "Dog"]; // array
// console.log(typeof animals);// Result --> object
// // objects
// let myObj= {
//     name: "Rajeshwari",
//     age: 22,
// }
// console.log(typeof myObj); // Result --> object

// const myFunction = function(){
//     console.log("Hello world!");
// }

// console.log(typeof myFunction);  // Result --> function, its mainly called function object

// const score = 100;
// console.log(typeof score);

/*
Notes:

Typeof              Result
Undefined           undefined
Null                object
Boolean             boolean
Number              number

*/

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
// Primitive datatypes goes in stack
// we get copy in stack.

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
// We get reference. So, what changes we make will be changed in original value.


// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// -----------------------------------------------------------------------------------------------

// There are two types of memory
// 1. One is stack memory
// 2. Another is heap memory


// Where stack is used, where heap is used
//Primitive data types uses stack memory
//Non- Primitive data types uses heap memory

// When stack memory is used , we get the copy of the variables that we have declared.

// when something goes to heap, we get reference of original value. So, what changes we make will be changed in original value.

// let myBrotherName = "lomasbaniya";
// let anotherName = myBrotherName;
// anotherName = "lochan";
// console.log(anotherName);
// console.log(myBrotherName);

// The concept is first another name gets copy of lomasbaniya not actual value. 
// let myBrotherName = "lomasbaniya";
// let anotherName = myBrotherName;
// anotherName gets copy.

// we changed in copy here -->  anotherName = "lochan";
// So, original value will not change. Hence , 
// console.log(anotherName); gives lochan
// console.log(myBrotherName); gives lomasbaniya

let userOne = {
    email: "testuser1234@gmail.com",
    anotherEmail: "another@gmail.com",
}

let userTwo = userOne;
userTwo.email= "learning@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
