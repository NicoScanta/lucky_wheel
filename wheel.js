const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let deg = 0;

spinBtn.addEventListener("click", () => {
    // genera un angolo casuale tra 500 e 2000 gradi
    let spin = Math.floor(Math.random() * 1500) + 500;
    deg += spin;
    wheel.style.transform = `rotate(${deg}deg)`;
});
