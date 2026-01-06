//function in object
const user = {
    username : "ABHI",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Abhishek";
user.welcomeMessage();

console.log(this);

function chai(){
    let username = "Abhi gaikwad"; 
    console.log(this.username);  //this function refer to current executing context
                                //this keyword refet to the object that is currently executing a function 
}
chai();

const chai1 = () =>{
    let username = "abhi";  //arrow function cannot cointain this keyword
    console.log(this)
}


// const addTwo = (num1,num2) => {     //it is primitive way to arrow function
//     return num1 + num2;             //it need to call function
// }

// console.log(addTwo(5,6));
                                                //this called impicite return
// const addTwo = (num1,num2) => num1+num2;   //their is no {} hence their is no exclusive scope therefore no need to write return keyword

// console.log(addTwo(6,6));


// const addTwo = (num1,num2) => (
//     num1+num2                   //when we create acope using {} we write explicite return but when we use () no need to write return keyword
// )
// console.log(addTwo(5,6));   

const addTwo = (num1,num2) => ({name : "ABHI"})
console.log(addTwo(5,6))


const myArray = [21,5,6,3,77];
myArray.forEach((item)=>{
    console.log(item);
});