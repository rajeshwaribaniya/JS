function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");    
}

// sayMyName ---> reference
// sayMyName()  ----> execute

// sayMyName()

// here number1 and number2 are parameters
// function addTwoNumbers(number1, number2){     
//     console.log(number1 + number2);   
// }

function addTwoNumbers(number1, number2){     
    // let result = number1 + number2;
    // return result; 
    // console.log("Rajeshwari Baniya");  // this will not be executed.

    return number1 + number2;
}


const result = addTwoNumbers(4, 4);
// console.log("Result:",result);


// call garne

// here 3 and 4 are arguments
// addTwoNumbers(3,4)

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  // Output is --> Result:  undefined

function loginUserMessage(username = "Guest"){
    if (username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage()); 
//  console.log(loginUserMessage("Rajeshwari Baniya")); 

// console.log(loginUserMessage("Rajeshwari Baniya"));
// console.log(loginUserMessage());  ---> Output: undefined just logged in

// ... --> yeslai rest operator bhaninxa ani spread operator pani bhaninxa. Use case ma depend hunxa
// kati pera rest operator bhanne ani kati phera spread

// ahilay rest operator ho
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(2, 3, 4, 8, 16, 32));  // Output --> [ 2, 3, 4 ] --> array aayo

function calculateCartPrice( val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(2, 3, 4, 8, 16, 32));  

// output --> [ 4, 8, 16, 32 ]
// 2 taken by val1, 3 taken by val2 and now 4, 8, 16, 32 are in array.

// const user = {
//     userName: "Rajeshwari",
//     age: 22
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.userName} and age is ${anyObject.age}`);
// }

// // handleObject(user)

// handleObject({
//     userName: "Lomas",
//     age: 9
// })


const myNewArray = [2, 4, 8, 10];

function getFromArray(anyArray){
    return anyArray[1]
}

// console.log(getFromArray(myNewArray));
console.log(getFromArray([100,200, 300, 400, 800]));
