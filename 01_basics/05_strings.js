const myName = "Rajeshwari";
const repoCount = 11;

// console.log(name + repoCount + " Nepal");   ---> not recommended

// recommended to use Backticks
 console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);
 
 // This syntax is better and readable.
 // String interpolation

const gameName = new String('Football');
// console.log(typeof gameName);  // ------ Result ----> object

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());  // But this hasnot changed our original string.
console.log(gameName.charAt(3));  // to know 3rd position character ( 0, 1st , 2nd, 3rd )  ---> Result --> t

// // to know in which position is t
console.log(gameName.indexOf('t')); 

// More methods:



