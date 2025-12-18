const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

let deg = 0;

spinBtn.addEventListener("click", () => {

    
    // let spin = Math.floor(Math.random() * 1500) + 500;
    switch(code){
        case "FB34TR": spin = 1457; break; // fabio
        case "2334CC": spin = 1300; break; // claudia
        case "M324B0": spin = 2000; break; // michele
        case "88T12B": spin = 900; break; // tania
        case "M32453": spin = 700; break; // matilde
        case "343G8B": spin = 799; break; // giorgia
        case "LL1234": spin = 1345; break; // gabriele
        case "CAA890": spin = 1445; break; // adriana
        case "YGD839": spin = 850; break; // daria
        case "789M23": spin = 680; break;  // marco
        case "21SN23": spin = 600; break; // mi
        default: spin = 2000; break;
    }

    // spin = 500;
    deg += spin;
    console.log("spin " + spin + " deg " + deg)
    wheel.style.transform = `rotate(${deg}deg)`;

    spinBtn.disabled = true;
    spinBtn.style.display = "none";
    

});
