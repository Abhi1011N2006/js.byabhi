let age1 = 19;

if(age1 == 19){
    // console.log("your age is 19");   // general if statement
}

const isLoggedIn = true;
const isPremium = false;

if(isLoggedIn && isPremium){
    // console.log("you able to use app with additional benifit");
}
else{
    //  console.log("you want to login , or you cannot take premium ");
}

const age = 32;
if(age =>0 && age <= 5){
    // console.log("you are baby");
}
else if(age > 5 && age <=18 ){
    // console.log("able to go school");
}
else if(age > 18){
    // console.log("able to drive bike or car");
}
else {
    // console.log("invelid age")
}


const userEmail = [];
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have user email")
}

// falsy value  : false , 0 , -0 , BigInt 0n,"",null , undefined , NaN

//truthy value  : "0" , 'false' , " ", [] , {} , function(){}

// Nullish coalescing operator (??) : 

let val1 ; 

// val1 = 5 ?? 10 //val1 =5     //it check if first value is valid then initialized it otherwise check and initialized second value
val1 = null ?? 10;  //val1 = 10
// val1 = undefined ?? 15  //val1 = 15

console.log(val1);

//TERNARY STATEMENT
// condition : true_statement ? else_statement;
const age2 = 19

age2 >=18 ? console.log( "mature" ) : console.log( "young" );
// const result = age2 >= 18 ? "mature" : "young";
// console.log(result);
