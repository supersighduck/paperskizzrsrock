document.querySelector('#weaponButton').addEventListener('click', checkIfWin)
let mainBody = document.querySelector('body')

function rockPaperScissors(){
    let randomNumbers = Math.floor((Math.random()* 3) + 1)
    if(randomNumbers <=1){
        return 'rock'
    } else if (randomNumbers <=2){
        return "paper"
    } else {
        return "scissors"
    }
}

function RPS (){
    let random = Math.random()
    if(random < .33){
        return 'rock'
    } else if (random < .66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

function checkIfWin(){
    let choice = document.querySelector('#weaponSelector').value
    let botChoice = rockPaperScissors()
    if ((choice === "rock" && botChoice === "scissors") || (choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")) {
        document.querySelector('#weaponDisplay').innerText = "You Win!"
        mainBody.style.background = 'url(images/victory1.gif) no-repeat 50% 350px fixed'
        mainBody.style.backgroundSize = '220px';
    } else if(choice === botChoice){
        document.querySelector('#weaponDisplay').innerText = "Draw"
        mainBody.style.background = 'url(images/bbt_draw.gif) no-repeat 50% 350px fixed'
        mainBody.style.backgroundSize = '260px';
    } else {
        document.querySelector('#weaponDisplay').innerText = "You Lose... Try again!"
        mainBody.style.background = 'url(images/loser1.gif) no-repeat 50% 350px fixed'
        mainBody.style.backgroundSize = '260px';
    }
    
}
