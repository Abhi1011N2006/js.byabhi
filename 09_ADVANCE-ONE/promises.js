// const promise1 = new Promise(function(resolve,reject){
//     //do an async task
//     //DB calls,cryptography , network
//     setTimeout(() => {
//         console.log('Async task is complited');
//         resolve();        //connect .then fnction
//     }, 1000);
// });
// promise1.then(()=>{
//     console.log('promise consumed');
// })

//SAME WORK 

// new Promise(function(resolve,reject){
//     //do an async task
//     //DB calls,cryptography , network
//     setTimeout(() => {
//         console.log('Async task 2 is complited');
//         resolve();        //connect .then fnction
//     }, 1000);
// }).then(()=>{
//     console.log('another promise consumed');
// })

// const promisethree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username : "chai" , email : 'abhi@gmail.com'});
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        let error = false;
//        if(!error){
//         resolve({username : "abhi" , pass : 1233});
//        }
//        else{
//         reject("ERROR SOMETHING WENT WRONG");
//        }

//     }, 1000);
// })
// const username = promisefour.then((user)=>{
//     console.log(user);
//     return user.username;                          //return varible cannot store in this variable 
// to access return data use multiple .then function
// })
// console.log(username);


// promisefour.then((user)=>{
//     console.log(user);
//     return user.username; 
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error); 
// }).finally(()=>{
//     console.log("finally block is running");
// })


//ABOVE PRMISE IS SAME AS BELOW BUT RESOLVE REJECT HANDLED BY ASYNC AWAIT AND TRY CATCH BLOCK
// const promisefive = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        let error = true;
//        if(!error){
//         resolve({username : "abhi" , pass : 1233});
//        }
//        else{
//         reject("ERROR SOMETHING WENT WRONG");
//        }
//     }, 1000);
// })

// async function consumedPromiseFive(){
//     try{
//         const response = await promisefive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumedPromiseFive();


// async function getResponse() {
//     try{
//         let response = await fetch('https://randomuser.me/api/');
//         console.log(response);
//         const data = await response.json()
//         console.log("**********************************************")
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getResponse();




fetch('https://randomuser.me/api/')
    .then((anotherResponse) => {
                                                         
        return anotherResponse.json();
    }) 
    .then((data) => {
        console.log(data.results[0].gender);            // STRUCTURE OF DATA: {
                                                        //   results: [
                                                        //     {
                                                        //       gender: 'male',
                                                        //       name: [Object],
                                                        //       location: [Object],
                                                        //       email: 'kuzman.tomovic@example.com',
                                                        //       login: [Object]
        console.log("working");
    }).catch((error) => {
        console.log("E : ", error)
    })




