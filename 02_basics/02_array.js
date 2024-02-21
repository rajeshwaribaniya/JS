// const namesOne = ["Ram", "Hari", "Shiva"];
// const nameTwo = ["Sita", "Gita", "Laxmi"];

// namesOne.push(nameTwo);
// console.log(namesOne);

// console.log(namesOne[3][1]);

// const allNames = namesOne.concat(nameTwo);
// console.log(allNames);

// const allNewNames = [ ...namesOne, ...nameTwo];
// console.log(allNewNames);              // ----------------> Spread more preferred

// const anotherArray = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

// we want one array. We have array under array under array. We want all in one array.
// so using flat. I gave infinity depth.

// const singleArray = anotherArray.flat(Infinity);
// console.log(singleArray);

// console.log(Array.isArray("Rajeshwari"));
// console.log(Array.from("Rajeshwari"));
// console.log(Array.from({myName: "Rajeshwari"}));  // interesting ------> []

// let score1 = 100;
// let score2= 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));