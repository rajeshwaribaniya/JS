console.log("Variables");
const accountID = 101;
// accountID = 2; // not allowed
//console.log(accountID); 

let accountEmail= "helloworld@gmail.com";
var accountPassword = "986543";
accountCity = "Bharatpur";

accountEmail = "byebyeworld@gmail.com";
accountPassword= "26435889644";
accountCity="Kathmandu";
let accountState;

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

/* Prefer not to use var 
because of issue in block scope and functional scope. 
*/