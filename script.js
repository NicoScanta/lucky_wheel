
input = document.getElementById("code");

button = document.getElementById("confirm");

loc = "wheel.html";

button.addEventListener("click", () => {
    console.log(input.value);

    if(input.value === "123456"){
        window.location.assign(loc);
    } else {
        // errore
    }

});