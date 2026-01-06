//Another way to creating object

const tinderUser = new Object();
const tinderUser1 = {};

tinderUser.id = "abhi1011";
tinderUser.name = "ABHI";
tinderUser.isLoggedIn = true ;


console.log(tinderUser);

const generalInfo = {
     name : "ABHI" ,
     socialMedia : {
        instagram : {
            instaID : "abhi123xyz"
        }
        
     }
}

console.log(generalInfo.socialMedia.instagram.instaID);

const obj1 = {1:"a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};
const obj3 = {5 : "e" , 6 : "f"};

const obj4 = {obj1 , obj2} ;   // obj4 = { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// console.log(obj4);

const obj5 = Object.assign({},obj1,obj2);  //create new array by this method
                                            //other attribute can add in first attribute here obj1 and obj2 add in empty object

                                        
console.log(obj5);

const obj6 = {...obj1 , ...obj2};
console.log(obj6);


console.log(tinderUser);
console.log(Object.keys(tinderUser));   //give all keys of 'tinderUser' object          |
console.log(Object.values(tinderUser));   //give all values of 'tinderUser' object      |_ > all o/p is in array
console.log(Object.entries(tinderUser));  // give all key value pair in separate array  |
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // check whether key is in object|


const course ={
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "hitesh sir"
}


const {courseinstructor : instructor} = course;  // equivalent to  : const instructor =course.courseinstructor

console.log(instructor);

[{
    coursename : "js in hindi",     //also allowed
    price : "999",
    courseinstructor : "hitesh sir"
}]