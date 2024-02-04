const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');



const scoreboard = {
    player: 0,
    computer:0
} 

// Play Game
const play = (e) => {
     // console.log(e.target.id)
     const playChoice = e.target.id
     restart.style.display = 'inline-block'
     const computerChoice = getComputerChoice()
     const winner = getWinner(playChoice,computerChoice)
     showWinner(winner,computerChoice)
    // console.log(playChoice,computerChoice )
}

const getComputerChoice = () => {
    const rand = Math.random ()
    if(rand <= 0.34){
        return'rock'
    }else if (rand <= 0.67){
        return 'paper'
    }else {
        return 'scissors'
    }

}

const getWinner = (p, c) => {
    if(p === c){
        return 'draw'
    }else if (p === 'rock') {
        if(c === 'paper') {
            return 'computer'
        }else{
            return 'player'
        }
    }else if(p === 'paper') {
        if(c === 'scissors') {
            return 'computer'
        }else{
            return 'player'
        }
    }else if (p === 'scissors'){
        if(c === 'rock'){
            return 'computer'
        }else {
            return 'player'
        }
    }
}

const showWinner = (winner, computerChoice) => {
    if(winner === 'player'){
        scoreboard.player++
        result.innerHTML = `
        <h1 class =  "text-win"> YOU WON 🏆></h1>
        <i  class="choice fas fa-hand-rock${computerChoice}paper fa-10x"></i>

        <p>computer chose <strong>${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</strong></p>
        `
    }else if(winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class = 'text-lose'>You Lose 🔴</h1>
        <i  class="choice fas fa-hand-rock${computerChoice}paper fa-10x"></i>

        <p>computer chose <strong>${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</strong></p>
        `;
    }else{
        result.innerHTML=`
        <h1>it's a Draw ❌</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer chose <strong>${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</strong></p>
        `
    }

    // Show Score
    score.innerHTML = `
    <p>player: ${scoreboard.player}</p>
    <p>computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';

}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer= 0;
    score.innerHTML =`
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}

function clearModal(e){
    if(e.target === modal){
        modal.style.display = 'none'
    } 
}



choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame)