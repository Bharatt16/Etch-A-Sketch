let slider = document.querySelector("#sizeSlider");
let display = document.querySelector("#sliderValue")


slider.addEventListener('input', function() {
    display.textContent = this.value;
    createFlexBox();
  });







function createFlexBox(){

const size = parseInt(slider.value)
const container = document.querySelector(".container");

container.innerHTML="";

let containerSize = container.clientWidth;
let cellSize = containerSize/size;

for(let i = 0 ; i< size*size ; i++){
    let cell = document.createElement("div");
    cell.className="gridCells";
    cell.style.height = `${cellSize}px`
    cell.style.width = `${cellSize}px`
    container.appendChild(cell);

}

}
    
