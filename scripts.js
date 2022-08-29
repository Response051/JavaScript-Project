   
   
    let game1 = 'Rock';
    let game2 = 'Paper';
    let game3 = 'Scissors';
    let loser1 = "You Lose! Paper beats Rock";
    let winner1 = "You win! Rock wins paper";
    let loser2 = "You Lose! Paper beats Scissors";
    let winner2 = "You win! Scissors wins paper";
    let loser3 = "You Lose! Scissors beats Rock";
    let winner3 = "You win! Rock wins Scissors";

function getComputerChioce(game) {
    if (game === game1) {
        return loser1;
    } else 
    if (game === game2) {
        return loser2 ;
    } else 
    if (game === game3) {
        return loser3;
    } else {
        return "a tier";
    }
}

console.log(getComputerChioce(game3))

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == game1) {
        return winner1;
    }else 
    if (playerSelection == game2){
        return winner2;
    } else 
    if (playerSelection == game3){
        return winner3;
    } else 
    return "A tier"

}

console.log ((singleRound(game3)));

const computerSelection = getComputerChioce() ;
const singleRound = "Rock" ;

