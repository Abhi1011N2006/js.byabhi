"use strict";  //treat all js code as newer version


//REDABLITY :

//console.log("ABHI") console.log("123")  // -> Not Allowed 
                                        //             |-> it is corect if between two statement ';' is used
                                        //             |-> OR write statement in different line 

//DATA TYPES:
let name = "ABHI" //string data type
let roll = 32 //number
let isCorrect = true //boolean
let data = null     //NULL
let address         //Undefined


/*
string  : defined by single quates or double quates
number  : having range 2^53
bigint  : having range larger than normal number
boolean : having value true and false
null    : standalone value (khali) , eg.,let state = null
undefined: value not assign  eg.,let state ;
symbol  : Unique
*/

//typeof -> function giving the data type of variable

console.log(typeof(data))  //its type is object
console.log(typeof undefined)  // undefined


/*
Types of data:
     primitive : 1] String , 2]Number , 3]Boolean , 4]null  ,5]undefined , 6] Symbol ,7]BigInt

     non-primitive : Array , Object , Function
*/

const StringValue = "ABHI"; //string
const NumberValue = 32 ; //number
const BooleanValue =true ;  //boolean
const nullValue = null; // typeof null is equal to object
let undefinedValue ; //undefined value

// Symbol  : it take unique value  
let firstValue = Symbol('123');  //|
let SecondValue = Symbol('123'); //|-> Both not equal

console.log(firstValue == SecondValue); //false


const BigIntValue = 2323232323n;   //big int number

let ArrayNew = [1,2,3,4,5];  //array


let newObject = {
    name : "ABHI" ,            //object
    rollNo : 32
};

let newFun = function(){ 
    console.log("HELLO WORLD");  //function
}
