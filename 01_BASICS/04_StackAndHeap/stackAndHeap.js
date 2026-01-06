//stack (primitive) , Heap (non-primitive)

let name = "ABHI";
let anotherName = name;   //stack memory pass copy of variable here name copy is pass in another name variable
console.log(anotherName);  //so any change in another name cannot reflect in original variable 
anotherName = " Gaikwad"
console.log(anotherName);
console.log(name)


//HEAP
 
let a = {
    name : "ABHI",                          //    |
    roll : 32                               //    |___>  if 'a' object passing to 'b'
}                                           //    |      then change in 'b' can reflect in 'a' 
let b = a;                                  //    |        
console.log(a.name);
console.log(b.name);
b.name = "ABHI_GAIKWAD";
console.log("**************************")
console.log(a.name);
console.log(b.name);

