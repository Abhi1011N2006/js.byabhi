let myDate = new Date();

console.log(myDate);     //  o/p =>2025-12-30T08:32:30.124Z

console.log(myDate.toString());  //  o/p => Tue Dec 30 2025 14:02:30 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());  //o/p =>Tue Dec 30 2025

console.log(myDate.toLocaleString());  // o/p => 12/30/2025, 2:05:55 PM

console.log(typeof myDate)   // Date is object

let myCreatedDate = new Date(2025 , 11 ,30 ,5,3);  // Date(year,month, date, hour , min)

console.log(myCreatedDate.toString())    // 23-jan-2023

let myAnotherDate = new Date("01-14-2023");
console.log(myAnotherDate.toString());

let TimeNow = Date.now();

console.log(TimeNow);
console.log(myAnotherDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()   //give current date 

console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());

