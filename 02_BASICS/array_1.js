//INITIALIZING ARRAY 
// first method
const myArr = [1,4,5,6,7];

//another method

const anotherArr = new Array("ABHI" , "GAIKWAD");

//ACCESING ELEMENT

console.log(myArr[1]);

//ARRAY METHODS

myArr.push(69);   //push : add element at the end of array
console.log(myArr);
myArr.pop();      //pop : pop last element of array 
console.log(myArr);
myArr.unshift(9);
console.log(myArr);  //Add elemrnt at the begining , it is same as push from front
myArr.shift();
console.log(myArr);  //delete first element in array , it is same as pop from front

console.log(myArr.includes(6));   // check whether element is present in arr or not
console.log(myArr.indexOf(6));   // give index of 6 in array  

//creating new arr from another array

const newArr = myArr.join();
console.log(`${newArr}   :  ${typeof newArr}`);  // newArr is the string of element in myArr 
console.log(myArr);

const myna = myArr.slice(1,3);  //last index is exclusive , creating new array from sub part of myArr
console.log(myna);      
console.log(myArr);

const myna2 = myArr.splice(1,3); //last element is inclusive
console.log("c" ,myna2);    // creating new array which cointain element in particular range which change original array 
console.log(myArr); 


