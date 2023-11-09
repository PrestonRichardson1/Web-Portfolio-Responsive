document.getElementById("hover").addEventListener("mouseOver", mouseOver);
document.getElementById("hover").addEventListener("mouseOut", mouseOut);

function mouseOver() {
    document.getElementById("hover").style.opacity = "50%" ;

}

function mouseOut(){
document.getElementById("hover").style.opacity = "100%";

}