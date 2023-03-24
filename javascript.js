function createGrid(){

    const myNode = document.getElementById("main");
    myNode.innerHTML = '';

    const sliderValue = document.querySelector(".slider").value;

    const main = document.querySelector("#main");
    const col = "1fr ";
    main.style.gridTemplateColumns = `${col.repeat(sliderValue)}`;
    

    for (let i = 0; i<sliderValue**2; i++){
        let div = document.createElement("div")
        div.style.background = "white";
        div.style.color = "white";
        div.style.opacity = "1";
        div.setAttribute("class", "square")
        document.getElementById("main").appendChild(div);

        const squares = document.querySelectorAll(".square");
        squares.forEach(square => square.addEventListener('mouseover', hoverFunc));
    }
}


function hoverFunc(){
    if (!eraserButtonPressed) {
        if (rainbowButtonPressed){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            let colour = "#" + randomColor;
            this.style.background=colour;
        }
        else {
            this.style.background=colourWheel.value;
        }
    } else{
        let colour = "#ededed";
        this.style.background="white";
    }
}


const slider = document.querySelector(".slider");
slider.addEventListener("mouseup", createGrid);
createGrid(slider.value);


function updateSliderText(){
    const sliderValue = slider.value;
    const gridSizeText = document.querySelector(".grid-size");
    let grid = `${sliderValue} x ${sliderValue}`;
    gridSizeText.textContent = grid; 
}

slider.addEventListener("input", updateSliderText)
updateSliderText();


const clear = document.querySelector(".clear");
clear.addEventListener("click", createGrid);



function rainbowSwitch(){
    if (rainbowButtonPressed==false){
        rainbow.classList.add("rainbow-bg");
        rainbowButtonPressed=true;
    }else{
        rainbow.classList.remove("rainbow-bg");
        rainbowButtonPressed=false;
    }
}

let rainbowButtonPressed = false;
const rainbow = document.querySelector(".rainbow-button");
rainbow.addEventListener("click", rainbowSwitch);



function eraserSwitch(){
    if (eraserButtonPressed==false){
        eraserButtonPressed=true;
        eraser.classList.add("button-clicked")
    }else{
        eraserButtonPressed=false;
        eraser.classList.remove("button-clicked")
    }
}
let eraserButtonPressed = false;
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", eraserSwitch);



function changeColour(){
    console.log(colourWheel.value);
}
let colourWheel = document.querySelector(".colour-wheel");
colourWheel.value='#00000';
colourWheel.addEventListener('click', changeColour);
