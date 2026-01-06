//{} it cointain another scope
let a = 90;
if(true){
    console.log(a) ;   //inner scope can access variable in global scope
    let b = 99;
    var c =50;
}
// console.log(b);  //give error =>ReferenceError: b is not defined
                // variable defined in functional scope cannot assecc in global scope

console.log(c);   //var keyword can obey the rules of scope , so it access in any scope once it initialized


function one(){
    const username = "ABHI";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // can't assecc inner scope code for outer scope
    two();
}

one(); 


addone(5);
function addone(num){
    console.log(num+1);
}

Addtwo(5);
const Addtwo = function (num) {
    return num+2;                   //cannot run give error => ReferenceError: Cannot access 'Addtwo' before initialization
}

