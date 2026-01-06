// for of loop 
// ["", "", ""]
// [{}, {}, {}]
//NOTE : for of loop give exact value of iterable data type not index


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps |-> key value pair same as object but unlike object key can be string function or other object also
     // |-> maps are iterable but object not
const map = new Map()
map.set('IN', "India")     //map.set : set the value to map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   //object can't be iterable
//     console.log(key, ':-', value);
    
// }