const classSelector = (e) => document.querySelector(e);

const winnerDeclaration = () => {
    return `You ${roundWinner === 0 ? `won` : `lost`}! You chose ${playerChoice === 0 ? `rock` : playerChoice === 1 ? `paper` : `scissors`} ${roundWinner === 0 ? `and` : `, but`} the comp chose ${computerChoice === 0 ? `rock` : computerChoice === 1 ? `paper` : `scissors`}.`;
};

// DOM variables
const intro = classSelector(`.intro-section`),
    gameStart = classSelector(`.btn-start`),
    gameSec = classSelector(`.game-section`),
    roundResult = classSelector(`.round-result`),
    roundResultText = classSelector(`.round-result-text`),
    gameEnd = classSelector(`.end-result`),
    finaleResult = classSelector(`.final-result`),
    replayBtn = classSelector(`.play-again`),
    humanScoreEl = classSelector(`.human-score`),
    compScoreEl = classSelector(`.computer-score`);

let playScore = 0,
    computerScore = 0,
    playerChoice,
    computerChoice,
    roundPlayed = false,
    roundWinner;

// Function to end a round
const roundEnd = () => {
    setTimeout(() => {
        if (playScore === 5) {
            gameSec.classList.add(`hidden`);
            roundResult.classList.add(`hidden`);
            gameEnd.classList.remove(`hidden`);
            finaleResult.textContent = `Bravo!! You've Won🥳!!!`;
        } else if (computerScore === 5) {
            gameSec.classList.add(`hidden`);
            roundResult.classList.add(`hidden`);
            gameEnd.classList.remove(`hidden`);
            finaleResult.textContent = `Ooops!! You've Lost the Game😥`;
        } else {
            roundPlayed = false;
            roundResult.classList.add(`hidden`);
        }
    }, 2500);
};

// Initializing the game
gameStart.addEventListener(`click`, () => {
    intro.classList.add(`hidden`);
    gameSec.classList.remove(`hidden`);
});

for (let i = 0; i < 3; i++) {
    classSelector(`.btn-${i + 1}`).addEventListener(`click`, function () {
        if (!roundPlayed) {
            roundResult.classList.remove(`hidden`);
            roundPlayed = true;
            playerChoice = i;
            computerChoice = Math.trunc(Math.random() * 3);

            if (
                (playerChoice === 0 && computerChoice === 2) ||
                (playerChoice === 1 && computerChoice === 0) ||
                (playerChoice === 2 && computerChoice === 1)
            ) {
                roundWinner = 0;
                playScore++;
                roundResultText.textContent = winnerDeclaration();
                roundEnd();
            } else if (
                (computerChoice === 0 && playerChoice === 2) ||
                (computerChoice === 1 && playerChoice === 0) ||
                (computerChoice === 2 && playerChoice === 1)
            ) {
                roundWinner = 1;
                computerScore++;
                roundResultText.textContent = winnerDeclaration();
                roundEnd();
            } else if (playerChoice === computerChoice) {
                roundResultText.textContent = `It's a draw! Choose again.`;
                roundPlayed = false;
            }

            humanScoreEl.textContent = playScore;
            compScoreEl.textContent = computerScore;
        }
    });
}

// Reset and replay
replayBtn.addEventListener(`click`, function () {
    playScore = 0;
    computerScore = 0;
    roundPlayed = false;
    humanScore.textContent = 0;
    compScore.textContent = 0;
    gameEnd.classList.add(`hidden`);
    gameSec.classList.remove(`hidden`);
});