// Object Literal

const user = {
    username: "rajeshwari",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function (){
        // console.log("Got user details from database.");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;

}

const userOne =  new User("rajeshwari", 12, true)


const userTwo =  new User("rajesh", 8, true)
console.log(userOne);
console.log(userTwo);
