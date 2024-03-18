// let a = 10;
// let b = 20;
// let c = 30;


// {} ---> this is called scope
// var c = 300;

// if (true){
//     let a = 10;
//     const b = 20;
//     var c = 30;

// }

// console.log(a);
// console.log(b);
// console.log(c);

// if bhitra lekheko block scope ra yesko bhira ko global scope

// evrything written in global scope is available in block scope. 
// But the values in block scope should not go outside.

// let a = 300;

// if (true){
//     let a = 10;
//     console.log("Inner value of a:",a);
// }

// console.log(a);

// function one(){
//     const userName = "Rajeshwari";

//     function two(){
//         const website = "youtube";
//         console.log(userName);
//     }

//     // console.log(website); // yo bahira aayesi problem aauxa

//     two()
// }

// one()

if (true){
    const userName = "Rajeshwari";

    if (userName ==="Rajeshwari"){
        const website = " Youtube";
        // console.log(userName+website);
    }
}



// -----------------------------------------------------------------------------------------------------

console.log(addOne(5)); // does not give any error

function addOne(num){
    return num + 1;
}


// addTwo(5) // --> This gives error

const addTwo = function(num){
    return num + 2;
}



