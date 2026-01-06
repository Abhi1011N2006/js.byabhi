/*
F-STRING
*/
const name ="ABHI"
const fileName = "STRING,JS"

// console.log(name + fileName);  //it get trick when multiple variable want to enter in string

// console.log(`name is ${name} and file name is ${fileName}`);   // it is called f-string 

const gamename = new String("free fire") // intialized string as object
console.log( gamename);  //  o/p : [string : 'free fire']

console.log(typeof gamename) ;  //data type is object

console.log(gamename[0]);    //assecc element in sting using key here 0 is key

console.log(gamename.length);  //give the length of string , it include white space

console.log(gamename.toUpperCase());  // change whole string to upper case character cannot change original string

console.log(gamename.charAt(1));    //give the charactrer in string present at that key

console.log(gamename.indexOf("r"))    //give first occuring  index of that chatracter character in string

const newstring = gamename.substring(0,3);   //here last index is exclusive hence char at 3 not in newstring
console.log(newstring);                        // negative base index not allowed


const anotherstring = gamename.slice(-9,4);   //last index is exclusive ,negative base indexing is allowed
console.log(anotherstring);

const new1String = "   ABHI gaikwad        ";
console.log(new1String.trim());   // remove all spaces from starting and ending of string
console.log(new1String);            // cannot affect original string

const url = "https://abhi%20gaikwad%20portfolio.com/profile";

console.log(url.replace('%20','-'));  //replace first occurence of %20 to -

console.log(url.includes("abhi")) ; //it give boolean value based on substring is present in string or not

const another1String = "abhi-ganesh-gaikwad";
console.log(another1String.split('-'));   //split string based on occurance of '-' and give array having element is in string

