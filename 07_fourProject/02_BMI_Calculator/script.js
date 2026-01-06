const cal = document.querySelector('#cal')
cal.addEventListener('click' , ()=>{
    const height = document.getElementById("Height").value;
    const weight = document.getElementById("Weight").value;
    const final = weight / (height*height)  ;
    document.getElementById("cal").value = final ; 

})