// const facebookUser = new Object()  -------> singleton object
// const facebookUser = {}  // --------> non singleton objects
// console.log(facebookUser);

const facebookUser = {}

facebookUser.id = "1010";
facebookUser.name = "Rajeshwari";
facebookUser.isLoggedIn = false;
// console.log(facebookUser);

const regularUser ={
    email: "test@gmail.com",
    fullName: {
        userFullName : {
            firstName: "Rajeshwari",
            lastName: "Baniya"

        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName)

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = Object.assign( {}, obj1,obj2, obj4);   // {}  ---> target and obj1, obj2, obj4 are source
// console.log(obj3);

const obj3 = {...obj1, ...obj2}   // This is mostly used syntax
// console.log(obj3);

// array bitra objects
const users = [
    {
        id: 1,
        email:"r@gmail.com"
    },

    {
        id: 2,
        email:"rb@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(users[1].id);

// console.log(facebookUser);

// console.log(Object.keys(facebookUser));   // [ 'id', 'name', 'isLoggedIn' ]  result

// [ 'id', 'name', 'isLoggedIn' ]  --- > The datatype is array. All keys are taken, and put in a array

// console.log(Object.values(facebookUser)); 

// console.log(Object.entries(facebookUser)); // this is used less.

// console.log(facebookUser.hasOwnProperty('isLoggedIn'));

// console.log(facebookUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "learn JS",
    price: "999",
    courseInstructor: " Rajeshwari Baniya"
}

// object de-structure
const{courseInstructor: instructor} = course
console.log(instructor);