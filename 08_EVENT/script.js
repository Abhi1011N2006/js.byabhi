// document.getElementById('owl').onclick = ()=>{
//     alert("owl clicked");
// }


document.getElementById('owl').addEventListener('click' , function(){
alert("owl clicked again");
},false)  //default value is false
// attachEvent() : Used in internet Exploral
//jQuery : .on

// document.getElementById('owl').addEventListener('click' , function(e){
//  console.log("clicked on owl")
// },false) //Event bubbling: false value

document.getElementById('images').addEventListener('click' , function(e){
 console.log("clicked on images")
},false) // Event capturing : true value

//when clicked on owl : 1] clicked on owl       |-> when both has false order of execution
//                      2] clicked on images    |


// document.getElementById('owl').addEventListener('click' , function(e){
//  console.log("clicked on owl")
// },true) 

// document.getElementById('images').addEventListener('click' , function(e){
//  console.log("clicked on images")
// },true) 

//when clicked on owl : 1] clicked on images |-> when both has true order of execution
//                      2] clicked on owl    |

// document.getElementById('google').addEventListener('click',function(e){
//         e.preventDefault();    // Stops the default browser action associated with the event , like cannot open goggle.com web after click on it  
//         e.stopPropagation()    //stop to awake event related to parent class
//         console.log("google clicked");
//     }, false)

// TASK  : when clicked on img remove that image ,consider large no. of imges

document.querySelector('#images').addEventListener('click' , function(e){
        console.log(e.target);
        if(e.target.tagName == "IMG"){
           console.log(e.target.id);
           let removeIt = e.target.parentNode;
        //    removeIt.parentNode.removeChild(removeIt)  -> another way to delete item
           removeIt.remove()
        }
},false);









