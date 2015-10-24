window.addEventListener('load',startEvents,false);
function changeColor() {
    document.getElementsByClassName("caja")[0].style.borderColor = "blue";
}

function startEvents(){
    document.getElementsByClassName("caja")[0].addEventListener("mouseover", changeBackgroundOver, true);
    document.getElementsByClassName("caja")[0].addEventListener("mouseout", changeBackgroundOut, true);
}


function changeBackgroundOver(){
    document.getElementsByClassName("caja")[0].style.borderColor = "yellow";
}

function changeBackgroundOut(){
    document.getElementsByClassName("caja")[0].style.backgroundColor = "#fff";
}




