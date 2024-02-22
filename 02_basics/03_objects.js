// singleton 

// if we declare like literals, then ---> singleton (bandaina)
// if ----> constructor  -----> singleton (banxa) // Object.create



// object literals

// It is a way to declare object.


const mySym = Symbol("Key 1")


const JsUser = {
    myName: "Rajeshwari",
    "full name": "Rajeshwari Baniya",                    // this cannot be accessed by JsUser.full name it     //needs console.log(JsUser["full name"]);

    age: 22,
    [mySym]: "myKey1",
    location: "Bharatpur",
    email: "nepal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);   // generally we use dot like this
// console.log(JsUser["email"]);

// console.log(JsUser[mySym]);  // Symbol case

// console.log(JsUser); // i am a symbol key --> said by mySym

// console.log(JsUser["full name"]);

JsUser.email = "bharatpur@gmail.com";   // email changed to --> bharatpur@gmail.com
// console.log(JsUser);

// Object.freeze(JsUser);   // now JsUser is freezed

JsUser.email = "kathmandu@gmail.com"; 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.myName} `);    // String interpolation

    // this ---> same object ko reference garna. Object bhitra ko properties pauxau with this.
}

console.log(JsUser.greeting2());