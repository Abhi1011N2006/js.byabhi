const arr1 =[1,2,3,4];
const arr2 = [11,22,33,44];

arr1.push(arr2);   //arr1 become 2D Array : [1,2,3,4,[11,22,33,44]];
console.log(arr1);

const arr3 = arr1.concat(arr2);

console.log(arr3);  //it element are uniformly distributed arr3 = [1,2,3,4,11,22,33,44]
 

const newarr = [...arr1,...arr2]  //... is spreading operator used to remove brackets
                                  //same output as newarr

console.log(newarr); 

const anothernewarr = [1,2,3,[4,5,6,[7,8,[9,11]]]];
const anothernewarr1 = anothernewarr.flat(Infinity);
console.log(anothernewarr1);  //convert multidimentional array into 1D array

console.log(Array.isArray("ABHI"));   //check wheter providing value is array or not
console.log(Array.isArray([1,2,3,4]));

console.log(Array.from("ABHI"));  //create array from iterable object

console.log(Array.from({name : "ABHI"}));  // Give empty array

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));