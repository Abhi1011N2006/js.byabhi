const coding = ["js", "ruby", "java", "python", "cpp"]

// Array.forEach(call_back function(item , index,array)) : function used to iterate through Array

// coding.forEach( function (val){
//     console.log(val);            //---> 1
// } )

// coding.forEach( (item) => {
//     console.log(item);              //---> 2
// } )

function printMe(item){
     console.log(item);             //---> 3
}

coding.forEach(printMe)

// 1,2,3 are doing same task 

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )