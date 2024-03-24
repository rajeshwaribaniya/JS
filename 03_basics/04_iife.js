// Immediately Invoked Function Expressions ( IIFE )

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// ending with semicolon 

(function chai(){
    // It is named IIFE
    console.log(`DB CONNECTED`);
})();



// ()() 
// first () ---------> yeta bhitra function ko definition lekne
//  second () -------> execution
// global scope ko pollution ko karan problems aauxa dherai jaso, so yo problem hatauna IIFE use gareko ho

( () => {
    console.log(`DB CONNECTED TWO`);
})();
// run bhayena kinaki mathi function invoke ta vayo, tara it doesnot know to stop the context so end garna semi colon launa parxa

( (username) => {
    console.log(`DB CONNECTED THREE ${username}`);
})('RAJESHWARI BANIYA');