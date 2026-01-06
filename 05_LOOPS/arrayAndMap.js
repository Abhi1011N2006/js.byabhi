const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})  // transform each element of array

const newNums1 = myNumers
                .map((num) => num * 10 )        // we can use multiple time  map and filter function on array
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums1);

console.log(newNums);