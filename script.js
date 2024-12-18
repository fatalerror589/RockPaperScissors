console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


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

function playRound(input) {
    const humanSelection = input;
    const computerselection = getComputerChoice();
    // console.log("Spieler wählt: " + humanSelection)
    // console.log("Computer wählt: " + computerselection)
    const wahltext = document.getElementById("wahltext");
    wahltext.textContent = `Spieler wählt ${humanSelection} und Computer wählt ${computerselection}`;
    

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


const btns = document.querySelectorAll("button");

btns.forEach((button) => {
    button.addEventListener("click", ()  => {
        // clearOldRound();
        let sieger = playRound(button.id);
        const gametext = document.getElementById("winner");
        gametext.textContent = sieger;
        switch(sieger) {
            case "Spieler gewinnt!":
                humanScore ++;
                break;

            case "PC Gewinnt!":
                computerScore ++;
                break;
        }
        const scores = document.querySelector("h1");
scores.textContent = `Score: Spieler ${humanScore} PC ${computerScore}`
    });
    if(humanScore === 5) {
        siegtext = document.createElement("h1");
        siegtext.textContent = "Spieler gewinnt"
        scores
    }
    else if (computerScore === 5){
        siegtext = document.createElement("h1");
        siegtext.textContent = "Spieler gewinnt"
    }
});

function(spielEnde) {

}




// playGame()

