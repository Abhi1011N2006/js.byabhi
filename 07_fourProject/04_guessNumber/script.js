const RandomNum = Math.floor(Math.random() * 100 + 1);
let InNum = document.querySelector('#num');
console.log(RandomNum);
let arr = [];
let guesses = document.getElementById('guesses');
let remaining = document.getElementById('remaining');
let result = document.getElementById('result');
remaining.innerText = 10
InNum.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {

        let num = Number(InNum.value);
        if (InNum == "" ||  InNum.value > 100 || InNum.value < 0) {
            alert("Enter valid number");
            return;
        }
        else {
            if (num == RandomNum) {
                result.innerText = `consgrats ,you win in ${10 - Number(remaining.innerText)} Guesses`;
                InNum.disabled = true;
                 document.querySelector('.a').style.backgroundColor = '#1cc0225e'
            }
            else {
                if (num > RandomNum) {
                    result.innerText = "Guess Smaller Number";
                    arr.push(num);
                    guesses.innerText = arr;
                    remaining.innerText -= 1;
                    InNum.value = "";
                }
                else {
                    result.innerText = "Guess Bigger Number";
                    arr.push(num);
                    guesses.innerText = arr;
                    remaining.innerText -= 1;
                    InNum.value = "";
                }
                document.querySelector('.a').style.backgroundColor = '#f59494'

            } 
            if (remaining.innerText == 0) {
                result.innerText = "You Lost! , try again";
                InNum.disabled = true;
                return;
            }
        }
    }
})

