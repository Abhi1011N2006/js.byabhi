const mySym = Symbol("key1");

const jsUser = {      //object is data type having element of key value pair , key are number or string
    name : "ABHI",  
    surname : "GAIKWAD",
    [mySym] : "mykey1",
    age : 18,
    location : "sangamner",
    gmail : "gaikwadabhi@gmail.com"
}

//accesing element
console.log(jsUser.gmail);
console.log(jsUser["gmail"]);
console.log(jsUser[mySym]);

// overriding value 
jsUser.gmail = "abhi1011@gmail.com";

jsUser.greeting = function(){           //Add greating function in jsUser object
    console.log("hello js user");
}

jsUser.greeting();

