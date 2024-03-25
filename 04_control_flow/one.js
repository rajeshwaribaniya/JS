// if

// if (condition){

// }

// if (true){

// }

// if (2=="2"){
//     console.log("Executed");
// }

// if (2==="2"){
//     console.log("Executed");
// }


// console.log(2=="2");  // true
// console.log(2==="2"); // false ---> checks type also // value + type same then only true
//  2 is number datatype and "2" is string datatype

// const isLoggedIn = true; // Assignment operator
// true value lai assign gareko isLoggedIn bhitra

// <, >, <=, >=, ==, != , ===(check type also), !==

// const isLoggedIn = true;
// const temperature = 54;
// if (temperature<50){
//     console.log("Less than 50");
// } else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Executed");

// const score = 200;
// if (score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);   // power is not defined
// The reason is scope. jaba {} lagxa, yauta scope banxa. Jun varaible {} bhitra declare hunxa, yinko scope yei {} bhitra matra xa. Scope bahira 


// var scope --> global
// const score = 200;
// if (score > 100){
//     var power = "fly";
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// const balance = 1000;
// if (balance>500)console.log("test"), console.log("test2");;   // Implicit scope // single line mai execute hunxa
// using comma to write multi line is a bad practice.


// const balance = 850;
// if (balance<500){
//     console.log("Less than 500");
// } else if (balance<750){
//     console.log("Less than 750");
// } else if ( balance < 900 ){
//     console.log( "Less than 900");
// } else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
const loggedInFromApple = false;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses.");
}

if (loggedInFromGoogle || loggedInFromEmail || loggedInFromApple){
    console.log("User logged in");
}