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

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// --------- Operations -------------


//  let value = 3;
//  let negValue = -value;
//  console.log(negValue);


//  let str1 = "hello";
//  let str2 = " Rajeshwari";
//  let str3 = str1 + str2;
//  console.log(str3);


// console.log("1"+ 2 + 2); // output -> 122 // string first so all treated as string
// console.log(1+ 2 + "2"); // output -> 32 

// console.log(+true);
// console.log(+"");

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);


// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter);

// let y = 5;
// let x = ++y;
// console.log(x); gives 6


let y = 5;
let x = y++;
console.log(x);

// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), 
//the increment operator increments and returns the value after incrementing.


