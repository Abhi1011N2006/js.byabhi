let clock = document.querySelector('.block')
// let date = new Date();

setInterval(() => {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);
