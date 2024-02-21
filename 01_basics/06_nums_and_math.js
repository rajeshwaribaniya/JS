// const score = 400;
// console.log(score);

// const balance = new Number(100);   // 100% number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));



// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ----------- Maths ---------------

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(8.9));

// console.log(Math.max(2, 4, 8, 12, 1, 3, 9));
// console.log(Math.min(2, 4, 8, 12, 1, 3, 9));

// console.log(Math.random()); // values comes between 0 and 1  ---> 0.1, 0.2, ....

// console.log((Math.random()*10) + 1); // minimum value will be 1
// If 0.1, floor gives 0 and +1 adds 1. 

// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1 ))+min); // +min at last ---> minimum we need 10
