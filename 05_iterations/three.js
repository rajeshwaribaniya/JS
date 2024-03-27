// for of

// ["", "", ""] ------> string inside array
// [{}, {}, {}] ---------> object inside array

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

// const map = new Map()
// map.set('NP', "Nepal");
// map.set('IN', "India");
// map.set('FR', "France");
// console.log(map);

const map = new Map()
map.set('NP', "Nepal");
map.set('IN', "India");
map.set('FR', "France");
map.set('NP', "Nepal");
// console.log(map);

// output does not show nepal two times. It stores unique collection. The Map object holds key-value pairs and remembers the original insertion order of the keys. 

for (const [key, value] of map) {
    console.log(key, ":", value);
}