console.log("Hello World");

function getComputerChoice() {
    
    switch(Math.floor(Math.random()*3)) {
        case 0:
            //console.log("Rock!");
            return("Rock!");
            break;
        case 1:
            //console.log("Paper!");
            return("Paper!");
            break;
        case 2:
            //console.log("Scissors!");
            return("Scissors!");
            break;
    }

}

function getHumanChoice() {
    let guteWahl = false;
while (guteWahl == false){
    let choice = prompt("Deine Wahl?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        guteWahl = true;
        return(choice[0].toUpperCase() + choice.slice(1) + "!"  )
        
    }
    else {
        alert("ungültige Wahl! es gilt nur ROCK PAPER oder SCISSORS")
    }
}
}

function playRound() {
    const humanSelection = getHumanChoice();
    const computerselection = getComputerChoice();
    console.log("Spieler wählt: " + humanSelection)
    console.log("Computer wählt: " + computerselection)

    switch(humanSelection) {
        case "Rock!":
            if (computerselection === "Rock!"){
                return("unentschieden");
                break;
            }
            else if (computerselection === "Paper!"){
                return("PC Gewinnt!");
                break;
            }
            else {
                return("Spieler gewinnt!");
                break;
            }

            case "Paper!":
                if (computerselection === "Paper!"){
                    return("unentschieden");
                    break;
                }
                else if (computerselection === "Scissors!"){
                    return("PC Gewinnt!");
                    break;
                }
                else {
                    return("Spieler gewinnt!");
                    break;
                }

                case "Scissors!":
                    if (computerselection === "Scissors!"){
                        return("unentschieden");
                        break;
                    }
                    else if (computerselection === "Rock!"){
                        return("PC Gewinnt!");
                        break;
                    }
                    else {
                        return("Spieler gewinnt!");
                        break;
                    }
    }

    
}



function playGame() {

    let playerScore = 0;
    let pcScore = 0;
    let gameon = "das sollte hier nicht stehen";    

    while( playerScore < 5 && pcScore < 5) {
        let gameon = playRound();
        console.log(gameon);
        if (gameon == "Spieler gewinnt!") {
            playerScore++;
            console.log("Neuer Score: Spieler: " + playerScore + " PC: " + pcScore);
        }
        else if (gameon == "unentschieden") {
            console.log("Unentschieden! Score bleibt gleich: Spieler: " + playerScore + " PC: " + pcScore);
        }
        
        
        else{
            pcScore++;          
            console.log("Neuer Score: Spieler: " + playerScore + " PC: " + pcScore);
        }

    }

    if (playerScore === 5) {
        alert("Spieler Gewinnt!");
    }
    else if (pcScore === 5) {
        alert("PC Gewinnt!");
    }
    else {
        alert("Dies sollte nicht vorkommen!")
    }


}

playGame()

