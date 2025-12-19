const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const win = document.getElementById("win");
const lose = document.getElementById("lose");

let deg = 0;


TEXT = ["Bancarotta! non è cambiato nulla alla fine!", 
        " ", 
        "Hai già troppi orologi ", 
        " ",
        "Vengono rilasciati solo in buoni tigotà",
        "Non sarà una macchina da cucire industriale ma nulla di niente",
        " ",
        "HAI VINTO! 2000 EURO SI VA IN VACANZA!",
        " ",
        " ",
        " "]


spinBtn.addEventListener("click", () => {

    let spin = 0;
    
    // let spin = Math.floor(Math.random() * 1500) + 500;
    switch(code){ 
        case "FB34TR": spin = 1457; lose.innerText = TEXT[0]; break; // fabio bancarotta
        case "2334CC": spin = 1300; lose.innerText = TEXT[1]; break; // claudia
        case "M324B0": spin = 2000; lose.innerText = TEXT[2]; break; // michele
        case "88T12B": spin = 900; lose.innerText = TEXT[3]; break; // tania
        case "M32453": spin = 700; lose.innerText = TEXT[4]; break; // matilde
        case "343G8B": spin = 799; lose.innerText = TEXT[5]; break; // giorgia
        case "LL1234": spin = 1345; lose.innerText = TEXT[6]; break; // gabriele
        case "CAA890": spin = 1445; win.innertext = TEXT[7]; break; // adriana 2000
        case "YGD839": spin = 850; lose.innerText = TEXT[8]; break; // daria
        case "789M23": spin = 680; lose.innerText = TEXT[9];break;  // marco
        case "21SN23": spin = 600; lose.innerText = TEXT[10]; break; // mi
        default: spin = 2000; lose.innerText = "come e' possibile!? non dovresti essere qua"; break;
    }

    // spin = 500;
    deg += spin;
    console.log("spin " + spin + " deg " + deg);
    wheel.style.transform = `rotate(${deg}deg)`;

    spinBtn.disabled = true;
    spinBtn.style.display = "none";
    

});


wheel.addEventListener("transitionend", () => {
    if(win.innerText != ""){
     win.style.display = "block";
     launchConfetti(); 
    } else {
        lose.style.display="block";
    }

}, { once: true });


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


