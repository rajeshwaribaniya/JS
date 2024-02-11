// console.log(2>1);

// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// The reason is that an equality check == and comparisons <>= work differently.
// Comparisons convert null to a number, treating it as 0. So,
//  null>=0 is true and null>0 is false. 

// strict check  ---> ===
// === -> check values as well as check data types

// console.log("2"==2);  //here conversion takes place
console.log("2"===2); // here it checks data type also , no conversion, it says "2" and 2 are not same.
// 
 