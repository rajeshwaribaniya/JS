// let score = 33;
// console.log(typeof score);

// let score = "33";
// let score = "33rbc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = "Rajeshwari Baniya"
// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
//look capital Number, now pass score. Score converts into number


// console.log(valueInNumber); // gives NaN -> Not-a-Number when // let score = "33rbc";
// console.log(valueInNumber); //gives 0 when let score = null;
// console.log(valueInNumber); //gives Nan when let score = undefined;
// console.log(valueInNumber); // gives 1 when let score = true;

// If there comes string which cannot be converted into number, it gives NaN
// like let score = "Rajeshwari Baniya"
// console.log(valueInNumber);

// when we convert number like "33", it easily converts into 33
// If we have like "33abc" , it gives us value NaN -> Not a Number. But NaN type is number
// true converts into 1, false -> 0

// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "Rajeshwari";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); false when // let isLoggedIn = "";
// console.log(booleanIsLoggedIn); true when let isLoggedIn = "Rajeshwari";

// 1 -> true; 0 ->false;
// "" -> false; 
// "Rajeshwari" -> true;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);