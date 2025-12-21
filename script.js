
input = document.getElementById("code");

button = document.getElementById("confirm");

error = document.getElementById("error")

loc = "wheel.html";

codes = ["fabio", "claudia", "adriana", "gabriele", "daria", "michele", "nicolo", "tania","matilde", "giorgia", "marco"]

button.addEventListener("click", () => {

    const value = input.value
    .toLowerCase()        
    .replace(/\s+/g, ""); // rimuove TUTTI gli spazi

    if(codes.includes(value)){
        window.location.assign(`${loc}?code=${encodeURIComponent(value)}`);
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }

});