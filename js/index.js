
const box = document.getElementById("container");

let colors = ["orange", "red", "green", "yellow", "purple", "blue", "pink"];

function changeColor() {
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}


function addChild() {
    let element = document.createElement("div");
    element.style.height = "50px"
    element.style.width = "50px";
    element.style.border = "2px solid black";
    // element.style.marginLeft ="2vw";
    box.appendChild(element);
    
}


removeBtn.addEventListener("click", function() { 
    box.removeChild(box.lastChild);
})




