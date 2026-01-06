//IIFE : imitiately invoked function expression

(function test(){
    var message = "he am here";                //IIFE |-> avoid polluting the global scope
    console.log("function is working");         //    |-> create private scope
})();                                           //    |-> to execute code immediately

// console.log(message);    //cannot access message variable even it has initialised by var keyword by=ecause of IIFE

// IIFE WITH PARAMETER WITH ARROW FUNCTION

((name)=>{
    console.log(name);
})("ABHI");