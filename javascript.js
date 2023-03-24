function createGrid(size){
    size = Math.floor(size)
    for (let i = 0; i<size**2; i++){
        let div = document.createElement("div")
        // div.style.width = "100px";
        // div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.style.opacity = "1";
        div.innerHTML = i+1;
        div.setAttribute("class", "square")
        document.getElementById("main").appendChild(div);

        const squares = document.querySelectorAll(".square");
        squares.forEach(square => square.addEventListener('mouseover', hoverFunc));
    }
}

function getUserInput() {
    let input = document.querySelector("input");
    if (input.value < 1 || input.value > 10){
        alert("please type a number between 0-10");
    }
    else {
        const myNode = document.getElementById("main");
        myNode.innerHTML = '';
        createGrid(input.value);
    }    
    document.querySelector("input").value = "";
}

const button = document.querySelector("button");
button.addEventListener("click", getUserInput);

createGrid(10);


function hoverFunc(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let colour = "#" + randomColor;
    this.style.background=colour;
    this.style.opacity -= '0.2';
}



