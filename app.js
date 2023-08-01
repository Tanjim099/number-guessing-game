let result = document.getElementById("result");
let input = document.getElementById("input");
let checkBtn = document.getElementById("check");
let resetBtn = document.getElementById("reset");
let option = document.querySelectorAll("option");
let userScore = document.getElementById("userscore");
let computerScore = document.getElementById("computerscore");

let easy = (option[0] = Math.floor(Math.random() * 10));
let medium = (option[0] = Math.floor(Math.random() * 100));
let hard = (option[0] = Math.floor(Math.random() * 1000));

let optionname1;

function changeOption() {
    let select = document.getElementById("select").value;

    console.log('changeOption')
    if (select == "Easy") {
        optionname1 = 10;
    } else if (select == "Medium") {
        optionname1 = 100;
    } else if (select == "Hard") {
        optionname1 = 1000;
    }

    computerguesss();
}

let computerGuess;

function computerguesss() {
    console.log('optionname1', optionname1);
    computerGuess = Math.floor(Math.random() * optionname1);
    console.log(computerGuess);
}
computerguesss();
let userwin = document.getElementById("userwin");
let userwon = 0;
let computerwon = 0;

//   changeOption();

checkBtn.addEventListener("click", () => {
    const userGuess = Number(input.value);
    console.log(userGuess);
    if (computerGuess === userGuess) {
        result.innerText = "You Won Game";
        userScore.innerText = userwon += 1;
    } else {
        result.innerText = "You Lust Game";
        computerScore.innerText = computerwon += 1;
    }
});

resetBtn.addEventListener("click", () => {
    input.value = "";
    computerguesss();
    result.innerText = " ";
});