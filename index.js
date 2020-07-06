var css = document.querySelector("h3");
var firstColor = document.querySelector(".firstcolor");
var secondColor = document.querySelector(".secondcolor");
var body = document.getElementById("gradient");

function changeBackground(){
    body.style.background = 
    "linear-gradient(to right ,"
     + firstColor.value
     +", "
     +secondColor.value
     + ")";

     css.textContent = body.style.background + ";"
}

firstColor.addEventListener("input" ,changeBackground )

secondColor.addEventListener("input" ,changeBackground )

