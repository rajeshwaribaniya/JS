// array

// ()     ----------> parenthesis
// []    -----------> brackets
// {}    ----------> braces

// const myArray = [ 0, 1, 2, 3, 4, 5] // simple array  0 is a element
// const myAnotherArray = [ 0, 1, 2, 3, 4, 5, true, "Rajeshwari"]   // It is still an array
// console.log(myAnotherArray[7]);

// Array is Object. In a single variable like myAnotherArray, we can store multiple items.

// const mySisters = ["Aishwarya", "Sushmita"];

// const myArray2 = new Array(1, 2, 3, 4);


// Array methods

const myArray = [ 0, 1, 2, 3, 4, 5];
// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9); // ---> 9 inserted in array start, so we need to shift all array values
// myArray.shift(); // removes that 9  ---> element in start of array is removed


// console.log(myArray.includes(8));
// console.log(myArray.indexOf(2));

// const newArr = myArray.join()
// console.log(newArr);
// console.log(myArray);

// console.log(typeof newArr); // ------> string
// console.log(typeof myArray);

// slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,3); 
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3);
console.log("C ", myArray); // ----> Array is changed. The portion is not there so we have now only 0, 4,5
console.log(myn2);


