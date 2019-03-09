var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const menssage_p = document.getElementById('action-message');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randonNumber = Math.floor(Math.random() * 3);
    return choices[randonNumber];
}
function convertToResult(resultado) {
    if (resultado === "r") return "Piedra";
    if (resultado === "p") { return "Papel"; } else { return "Tijera"; }
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToResult(userChoice) + " Supera " + convertToResult(computerChoice) + ". tu ganas!";
    menssage_p.innerHTML = "Me has ganado. Jugemos de nuevo!";
    glow(UserChoice(userChoice), 'green-glow');
    glow(ComputerChoice(computerChoice), 'red-glow');
    Sound('wind');
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToResult(userChoice) + " Es Superado " + convertToResult(computerChoice) + ". tu pierde...";
    menssage_p.innerHTML = "jaja has perdido. Te rindes?";
    glow(UserChoice(userChoice), 'red-glow');
    glow(ComputerChoice(computerChoice), 'green-glow');
    Sound('lose');
}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToResult(userChoice) + " es igual " + convertToResult(computerChoice) + ". empataste...";
    menssage_p.innerHTML = "Hemos empatado!";
    glow(UserChoice(userChoice), 'gray-glow');
    glow(ComputerChoice(computerChoice), 'gray-glow');
    Sound('draw');
}
function glow(choice, glow, time = 1500) {
    choice.classList.add(glow);
    setTimeout(() => choice.classList.remove(glow), time);
}
function Sound(state) {
    document.querySelector('.sound > #' + state).play();
}
function UserChoice(choice) {
    return document.querySelector('.choices > #' + choice);
}
function ComputerChoice(choice) {
    return document.querySelector('.computerChoices > #' + choice);
}
function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();