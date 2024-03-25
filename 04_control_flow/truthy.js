// const userEmail = "js@gmail.com";
// const userEmail = "";   
// const userEmail = [];  // empty array is also truthy

// if(userEmail){
//     console.log("Got user email.");
// } else {
//     console.log("Don't have user email");
// }

//  Here we have not done any comparison. We have considered a string is a true value. This is truthy value. When we assume string have true value. 
//  const userEmail = "";  here is empty string. So, assumed it is false. 

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0",  'false',  " "(here is space), [](empty array is also truthy), {}(empty object), function(){}(empty function)

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj= {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20   // -->    10 will be output

// when we call from database, use firebase,  we donot get response directly, we get two values. We may get null response, or response nai na aauna pani sakxa, undefined aauna sakxa so here it may create problem. So for that case especially ?? this is made. 

// yedi null value aayo bhane, so safety check. 
// null ra undefined huda we don't know value kasari aayeko ho. So, instead better to use flag value, true, false



// console.log(val1);

// Ternary Operator
// condition? true: false

const iceTeaPrice = 200;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");


