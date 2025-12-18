
input = document.getElementById("code");

button = document.getElementById("confirm");

error = document.getElementById("error")

loc = "wheel.html";

codes = ["FB34TR", "2334CC", "M324B0", "88T12B", "M32453", "343G8B", "LL1234", "CAA890","YGD839", "789M23", "21SN23"]

button.addEventListener("click", () => {
    console.log(input.value);

    if(codes.includes(input.value)){
        window.location.assign(`${loc}?code=${encodeURIComponent(input.value)}`);
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }

});