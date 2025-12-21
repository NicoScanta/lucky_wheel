const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const win = document.getElementById("win");
const lose = document.getElementById("lose");

let deg = 0;
let spin = 0;
let bool_lose = true;
let numbers_spin = 0
let no_show_button = false;


TEXT = ["Riprova!", 
        "Hai perso niente regali per quest'anno!", 
        "Aspetta! non ha ancora finito di girare", 
        "Hai vinto il regalo con il simbolo: 🎉", // marco
        "Hai vinto il regalo con il simbolo: 💌", // lele
        "Hai vinto il regalo con il simbolo: 🕊️", // matilde
        "Hai vinto il regalo con il simbolo: 💘", // claudia
        "Hai vinto il regalo con il simbolo: 🥂", // giorgia
        "Hai vinto il regalo con il simbolo: 🔔", // adriana
        "Hai vinto il regalo con il simbolo: 🎁", // daria
        "Hai vinto il regalo con il simbolo: 💕"] // nicolo


function lele(){
    wheel.src = "img/lele_wheel.png";
    win.innerText = TEXT[4];
    bool_lose = false;
    spin = 13100;
}

function bankrupt(){
    // finisce in bancarotta! 
    
    switch(numbers_spin){
        case 0: spin = 1009; lose.innerText = TEXT[0]; numbers_spin++; break; // skip
        case 1: spin = 1982; lose.innerText = TEXT[0];numbers_spin++;break; // skip
        case 2: spin = 3779; lose.innerText = TEXT[0];numbers_spin++;break; //skip
        default: spin = 12149; lose.innerText = TEXT[1];numbers_spin++; no_show_button = true; break; // bankrupt
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function infinite_spin(set) {
    spin = set;
    deg = 0;
    
    no_show_button = true;
    lose.innerText = TEXT[2];

    switch(set){
        case 1210: win.innerText = TEXT[5]; break; // matilde
        case 475: win.innerText = TEXT[3]; break; // marco
    }

    for (let i = 0; i < 5; i++) {
        spin += i;
        deg += spin;

        console.log("spin " + spin + " deg " + deg);
        wheel.style.transform = `rotate(${deg}deg)`;

        if(i != 0)
            await sleep(3999);
    }
    bool_lose = false;    
}

spinBtn.addEventListener("click", () => {

    lose.style.display="none";

    // let spin = Math.floor(Math.random() * 1500) + 500;
    switch(code){ 
        case "fabio": bankrupt(); break; // fabio bancarotta
        case "claudia": spin = 1300; win.innerText = TEXT[6]; bool_lose = false; break; // claudia
        case "michele": bankrupt(); break; // michele
        case "tania": bankrupt(); break; // tania
        case "matilde": infinite_spin(1210); break; // matilde
        case "giorgia": spin = 910; win.innerText = TEXT[7]; bool_lose = false; break; // giorgia
        case "gabriele": lele(); break; // gabriele
        case "adriana": spin = 1445; win.innerText = TEXT[8]; bool_lose = false; break; // adriana 2000
        case "daria": spin = 874; win.innerText = TEXT[9]; bool_lose = false; break; // daria
        case "marco": infinite_spin(475); break;  // marco
        case "nicolo": spin = 1610; win.innerText = TEXT[10]; bool_lose = false; break; // mi
        default: spin = 2000; lose.innerText = "come e' possibile!? non dovresti essere qua"; break;
    }

    // spin = 500;
    deg += spin;
    console.log("spin " + spin + " deg " + deg);
    wheel.style.transform = `rotate(${deg}deg)`;

    //spinBtn.disabled = true;
    spinBtn.style.display = "none";
    

});


wheel.addEventListener("transitionend", () => {
    
    if(bool_lose == false){
     lose.style.display = "none";
     win.style.display = "block";
     launchConfetti(); 
    } else {
        if(!no_show_button)
            spinBtn.style.display = "block";

        lose.style.display="block";
    }
    

});


function launchConfetti(count = 120) {
    const colors = [
        "#00c6ff", "#0072ff", "#ffffff",
        "#ffcc00", "#ff5e00", "#00ff99"
    ];

    for (let i = 0; i < count; i++) {
        const confetto = document.createElement("div");
        confetto.classList.add("confetti");

        confetto.style.left = Math.random() * 100 + "vw";
        confetto.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetto.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetto.style.animationDuration = (Math.random() * 2 + 3) + "s";
        confetto.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(confetto);

        // pulizia DOM
        setTimeout(() => confetto.remove(), 6000);
    }
}


