

// const temp1 = document.getElementById('box1');
// const temp2 = document.getElementById('box2');
// const temp3 = document.getElementById('box3');
// const temp4 = document.getElementById('box4');

// const change1 = temp1.style.backgroundColor ;
// temp1.addEventListener('click' ,()=>{
//     document.querySelector('body').style.backgroundColor = change1;
// } );

// const change2  = temp2.style.backgroundColor ;
// temp2.addEventListener('click' , ()=>{
//     document.querySelector('body').style.backgroundColor = change2;
// });

// const change3 = temp3.style.backgroundColor ;
// temp3.addEventListener('click' , ()=>{
//     document.querySelector('body').style.backgroundColor = change3;
// });

// const change4 = temp4.style.backgroundColor ;
// temp4.addEventListener('click' , ()=>{
//     document.querySelector('body').style.backgroundColor = change4;
// });

// OPTIMIED CODE


const boxes = document.querySelectorAll('.box');

boxes.forEach(item =>{
    item.addEventListener('click',()=>{
        const change = getComputedStyle(item).backgroundColor;
        document.querySelector('body').style.backgroundColor = change
    })
})
