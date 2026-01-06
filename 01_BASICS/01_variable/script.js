// Variable diclaration:
const roll  = 123   //cannot change , it must be initialized
let accId = "abhi@gmail.com"
var accountpass = '1234'
accCity = "jaipur"
/*
    NOTE : var should not be used used let instead of var
        var not bounded with scope is share by all program 
        whenever let keyword is bounded by scope
        if variable not initialized it is show undefined

*/




//roll = 32 ->   //Not allowed cannot changed
accId = "abc"
accountpass = "2222"
accCity = "bengaluru"
console.table([ roll,accId ,accountpass,accCity])

//concole.table : Give data in table form having first col for variable name and second col for its value