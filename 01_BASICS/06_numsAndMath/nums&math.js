const score = 264;
console.log(`${score}    and     ${typeof(score)}`);  

const balance = new Number(800);  //another way to initialized number 
console.log(`${balance}    and     ${typeof(balance)}`);   //typeof of balance is  'OBJECT'

console.log(balance.toString())  //convert number into sting eg : "100"

//agter converting num into string so all function that allow to string are allowed to pertform

console.log(balance.toFixed(1)); //approx number to 1 decimal unit

const number = 123.4456;
console.log(number.toPrecision(4));  //number contain only first 4 number

const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN'))  //o/p 10,00,00,000


// ********************************************* MATH **********************************************


console.log(Math);    //give empty object of math
console.log(Math.abs(-4));   //convert any value into positive integer (-ve => +ve , +ve => +ve)

console.log(Math.round(4.6))   //round off the number

console.log(Math.ceil(4.1)) //always round off value to upper number ,here o/p = 5

console.log(Math.floor(4.9))  // always round off to lowerr value , here o/p = 4

console.log(Math.min(4,3,5,6,7,90)) //give min value in given numbers

console.log(Math.max(4,3,5,6,7,90)) //give max value in given numbers

//to generate random number in given range 

console.log(Math.random());  //generate random number in range 0 <= number <= 1

// if you want to generate number in range min and max

// formula = Math.floor(Math.random()*(max-min+1)+min)

//to generate number from 1 to 6

console.log(Math.floor((Math.random()*6)+1 ));