let slider = document.querySelector("#sizeSlider");
let display = document.querySelector("#sliderValue");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent + "clicked")
    })
})

let colorBtn = Array.from(buttons).find(button => button.textContent === "Color");
let rainbowBtn = Array.from(buttons).find(button => button.textContent === "Rainbow");
let eraserBtn = Array.from(buttons).find(button => button.textContent === "Eraser");
let clearBtn = Array.from(buttons).find(button => button.textContent === "Clear");
let clearGrids = document.querySelector("#clrGrids");


let isColorMode = false;
let isRainbow = false;
let isEraser = false;
let gridVisible = true;
let selectedColor = "#000000"; // default color
let colorInput = document.querySelector("#color");


colorBtn.addEventListener('click',()=>{
    isColorMode = !isColorMode;
    colorBtn.classList.toggle("btnClicked");
    selectedColor = colorInput.value; 
    console.log(selectedColor)
})


rainbowBtn.addEventListener('click', ()=>{
    rainbowBtn.classList.toggle("btnClicked");
   // selectedColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    isRainbow = !isRainbow;
})

eraserBtn.addEventListener('click',()=>{
    eraserBtn.classList.toggle("btnClicked")
    isEraser =!isEraser;
})

clearBtn.addEventListener('click', ()=>{
    
    createFlexBox();
    

})

clearGrids.addEventListener('click',()=>{
       const cells = document.querySelectorAll(".gridCells");
       gridVisible = !gridVisible;
       clearGrids.textContent = gridVisible ? "Remove Grids" : "Show Grids"
    
       cells.forEach(cell=>{
          cell.style.border = gridVisible ? "1px solid black" : "none";
       })

})

// container.addEventListener('click', () => {
//     let cells = document.querySelectorAll(".gridCells")

//     cells.forEach(cell => {
//         cell.addEventListener('mouseover', () => {
//             cell.style.backgroundColor = "black";
//         });
//     });
// });


slider.addEventListener('input', function () {
    display.textContent = this.value;
    createFlexBox();
});

createFlexBox();

function createFlexBox() {

    const size = parseInt(slider.value)||16;
    const container = document.querySelector(".container");

    container.innerHTML = "";

    let containerSize = container.clientWidth;
    let cellSize = containerSize / size;

    // Create a document fragment
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "gridCells";
        cell.style.height = `${cellSize}px`
        cell.style.width = `${cellSize}px`
        container.appendChild(cell);
    

        // No need to attach event listener per cell if using delegation.
        fragment.appendChild(cell);

        //deelegeation
        let cells = document.querySelectorAll(".gridCells")
        container.addEventListener('mouseover', (event) => {
            if (event.target && event.target.classList.contains('gridCells')) {
                event.target.style.backgroundColor = "black";
                if(isColorMode){
                    event.target.style.backgroundColor=colorInput.value;
                }
                if(isRainbow){
                    const r = Math.floor(Math.random()*256)                   
                    const g = Math.floor(Math.random()*256)                   
                    const b = Math.floor(Math.random()*256)     
                    selectedColor=`rgb(${r},${g},${b})`              
                    event.target.style.backgroundColor=selectedColor;

                }
                if(isEraser){
                    event.target.style.backgroundColor="white";

                }
            }
        });
    }

    container.appendChild(fragment);



}