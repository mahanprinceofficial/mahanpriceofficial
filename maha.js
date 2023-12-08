//create new game
const initGame = () =>
{
    const startGame = confirm("are you intrest playing game");
    startGame ? playGame():alert("ok no problem ");
}

//game play functions

const playGame = () =>
{
    while(true)
    {
        let playerChoice = getPlayerChoice();
        console.log(getPlayerChoice() ?? "player not type");
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === "")
        {
            invalidChoice();
            continue;
        }
        if(!playerChoice)
        {
            decideNotToPlay();
            console.log(decideNotToPlay() ?? "Player Mindset Change");
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice)
        {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = calculation(playerChoice,computerChoice);
        displayResult(result);
        if(askToPlayAgain())
        {
            continue;
        }
        else
        {
            return thanksForPlaying()
            break;
        }
    }
}
const getPlayerChoice = () =>
{
    return prompt ("select any one rock,paper,sccisor");
};
const formatPlayerChoice = (playerChoice) =>
{
    if(playerChoice || playerChoice === "")
    {
        return playerChoice.trim().toLowerCase();
    }
    else
    {
        return false;
    }
}
const invalidChoice = () =>
{
    return alert("sorry you cannot type any letters");
};
const decideNotToPlay = () =>
{
    return alert("ok your mindset or changed no problem")
};
const evaluatePlayerChoice = (playerChoice) =>
{
    if(playerChoice === "rock"||
    playerChoice === "paper"||
    playerChoice === "sccisor")
    {
        return playerChoice;
    }
    else
    {
        return false;
    }
};
const getComputerChoice = () =>
{
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray = ["rock","paper","sccisor"];
    return rpsArray[randomNumber];
};
const calculation = (player,computer) => 
{
    const winner = 
    computer === player ?  "match tie" :
    computer === "rock" && player === "sccisor" ? `Player : ${player}\n Computer : ${computer}\n result : ComputerWins! `:
    computer === "paper" && player === "rock" ? `Player : ${player}\n Computer : ${computer}\n result : ComputerWins! `:
    computer === "sccisor" && player === "paper" ? `Player : ${player}\n Computer : ${computer}\n result : ComputerWins! `:
    `Player : ${player}\n Computer : ${computer}\n result : Playerwins!`;

    return winner;
};
const displayResult = (result) =>
{
    alert(result);
    print(result);
    printDisplay(result)
};
const askToPlayAgain = () =>
{
    return confirm("play Again!");
};
const thanksForPlaying = () =>
{
    return alert("thanks for playing");
};
initGame();
