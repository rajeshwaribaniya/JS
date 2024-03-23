// const user = {
//     username : "Rajeshwari",
//     coursePrice: 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to the website.`);
//         // console.log(this);
//     }
// }

// user.welcomeMessage()

// console.log(this);
// we are in node environment. Here, this is referring to empty object because global doesnot have context.
// first there was only one way to run JS i.e in browser. Jun engine jasle JS execite gartheyo, tyo browser bhitra matra huntheyo. Now, hamle tyo engine nikaliyo, and named it like node, deno, bun, etc . So ahiley engine standalone xa. 
// when the engine runs in browser, one global object is window object

// this --> current context
// refer to current context

// user.username = "Lomas"  // we changed context here, simple context means values
// user.welcomeMessage()

// function chai(){
//     let username = "Rajeshwari";
//     // console.log(this);
//     console.log(this.username);  // Output: undefined // here context is actually working in objects, function bhitra aayera yesari this use garna payena
// }

// chai()

// const chai = function(){
//     let username = "Rajeshwari";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Rajeshwari";
//     console.log(this.username);
// }

// chai()

// arrow function basics is:
// () => {}

// we can do:
// const addTwo = () => {}

// basic arrow function: // simply see using {} need to write return
// const addTw0 = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return:
// const addTw0 = (num1, num2) => num1 + num2;  

// const addTw0 = (num1, num2) => (num1 + num2);  // see using () no need to write return

const addTw0 = (num1, num2) => ({ username: "Rajeshwari"})  // object return garna paranthesis ma wrap garnai parxa
console.log(addTw0(3,4));



