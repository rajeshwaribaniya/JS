const promiseOne = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed.");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed.");
}) // --> connection with resolve

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved.");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve({
            username : "Chai",
            email : "chai@gmail.com"
        });
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "Rajeshwari",
                password : "123"
            })
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=> {
    return user.username;
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "javascript",
                password : "123"
            })
        }else {
            reject('Error: JS went wrong')
        }
    },1000)

})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }

//     catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/rajeshwari1-1')
.then((response)=> {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error) )