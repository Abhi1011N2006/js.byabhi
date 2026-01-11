let randomNum = function (){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6 ; i++){
         color += hex[Math.floor(Math.random()*16)];
    }
    // console.log(color);
    return color;
}
var set;
document.getElementById("start").addEventListener('click' , ()=>{
    set = setInterval(()=>{
        
        document.querySelector('body').style.backgroundColor = randomNum();
    },500)
    
})
document.getElementById("stop").addEventListener('click' , ()=>{
   clearInterval(set);
    
})
