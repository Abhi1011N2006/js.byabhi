function SayMyName(){   //    |
    console.log("A")    //    |
    console.log("B")    //    |---> Function Defination
    console.log("H")    //    |
    console.log("I")    //    |
}
SayMyName;    // function referance
SayMyName();  // function calling

function AddtwoNum( num1 , num2) {
    return num1 + num2;
}
let result = AddtwoNum(5,7);

console.log(result);

function takeMultiArgument (val1 , val2 , ...RemainingValue){  //first two value are store in val1 and val2 and remainning valeu store in RemainingValue as array
    console.log(RemainingValue);                                
}
takeMultiArgument(100,200,300,444,555,666);



function printobj(obj){
    console.log(obj.name);
    console.log(obj.roll);
}
printobj( {
    name : "ABHI",
    roll : 32,
})