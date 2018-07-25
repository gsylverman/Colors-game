const square = document.getElementsByClassName("square");
const ChangeColors = document.getElementById("ChangeColors");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const rgb = document.getElementById("rgb");
const rez = document.getElementById("rez");
const h1 = document.getElementsByTagName("h1")[0];
let rg;
let colors = [];
let measy = 3;
let mhard = 6;
let nrCulori = 6;
const scor = document.getElementById("scor");
let scorV = 0;
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    scorV = 0;
    scor.textContent = scorV;
    change();
});

easy.addEventListener("click", usor);

function usor() {
    nrCulori = measy;
    for (let i = 3; i < 6; i++) {
        square[i].style.display = "none";
    }
    colors = [];
    adaugareCuloriArray(nrCulori);
    for (let i = 0; i < nrCulori; i++) {
        square[i].style.background = colors[i];
    }
    rg = culoareAleatoare(0, nrCulori);
    rgb.textContent = colors[rg];
    easy.classList.add("easy");
    hard.classList.remove("hard");
    rez.textContent = "Guess the rgb Color!";
    rez.style.fontSize = "1em";
    rez.style.color = "black";
}
usor();

hard.addEventListener("click", function () {
    nrCulori = mhard;
    for (let i = 3; i < 6; i++) {
        square[i].style.display = "block";
    }
    rg = culoareAleatoare(0, nrCulori);
    rgb.textContent = colors[rg];
    hard.classList.add("hard");
    easy.classList.remove("easy");
    rez.textContent = "Guess the rgb Color!";
    rez.style.fontSize = "1em";
    rez.style.color = "black";
    change();

});

//generare culori random
function randomColors() {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}

//Generare numar random intre 0 si 250
function randomNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

//adaugare culori in array
function adaugareCuloriArray(nrCulori) {
    for (let i = 0; i < nrCulori; i++) {
        colors.push(randomColors());
    }
}

for (let i = 0; i < nrCulori; i++) {
    square[i].style.background = colors[i];
}

ChangeColors.addEventListener("click", change);

function change() {
    colors = [];
    adaugareCuloriArray(nrCulori);
    for (let i = 0; i < nrCulori; i++) {
        square[i].style.background = colors[i];
    }

    rg = culoareAleatoare(0, nrCulori);
    rgb.textContent = colors[rg];
    h1.style.background = "silver";
    rez.textContent = "Guess the rgb Color!";
    rez.style.fontSize = "1em";
    rez.style.color = "black";
}

for (let i = 0; i < square.length; i++) {
    select = square[i];
    select.addEventListener("click", function () {
        let selected = this.style.background;
        if (colors[rg] === selected) {
            for (let i = 0; i < square.length; i++) {
                square[i].style.background = this.style.background;
                rez.style.fontSize = "2em";
                rez.style.color = "green";
                rez.textContent = "YOU GUESSED!";
                rez.style.fontWeight = "bold";
                h1.style.background = colors[rg];
            }
            scorV += 100;
            scor.textContent = scorV;
            setTimeout(change(), 5000);

        } else {
            this.style.background = "#232323";
            scorV -= 100;
            scor.textContent = scorV;
        }
        if (scorV < 0) {
            scor.style.color = "red";
        } else {
            scor.style.color = "white";

        }
    });
}

function culoareAleatoare(min, max) {
    return Math.floor(Math.random() * (max - 1 - min + 1)) + min;
}



