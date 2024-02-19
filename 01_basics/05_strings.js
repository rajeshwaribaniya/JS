// const myName = "Rajeshwari";
// const repoCount = 11;

// console.log(name + repoCount + " Nepal");   ---> not recommended

// recommended to use Backticks
//  console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);
 
 // This syntax is better and readable.
 // String interpolation

// const gameName = new String('Football-game');
// const newString = gameName.substring(0,4);
// console.log(newString);  // notice that 0->F,1->o,2->o,3->t characters are printed but the 4th  when given (0, 4) is not printed .... Last i.e 4th character will not be printed.

// console.log(typeof gameName);  // ------ Result ----> object

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());  // But this hasnot changed our original string.
// console.log(gameName.charAt(3));  // to know 3rd position character ( 0, 1st , 2nd, 3rd )  ---> Result --> t

// // to know in which position is t
// console.log(gameName.indexOf('t')); 

// const anotherGameName = new String('Cricketq');
// const anotherString = anotherGameName.slice(-6,6);  // ----> we can give negative values in slice
// console.log(anotherString);

// const newStringOne = "        Rajeshwari        ";
// console.log(newStringOne);
// console.log(newStringOne.trim());   // removes starting and end spaces

// const url = "https://rajeshwari.com/rajeshwari%20baniya";
// console.log(url.replace('%20','-'));
// console.log(url.includes('lomas'));

// const subjectName = new String('CSIT-BCA-BIT');
// console.log(subjectName.split('-'));
