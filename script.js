let slider = document.querySelector("#sizeSlider");
let display = document.querySelector("#sliderValue")


slider.addEventListener('input', function () {
    display.textContent = this.value;
  });







function createFlexBox(){

const size = parseint()
const container = document.querySelector(".container");

let containerSize = container.clientWidth;
let cellSize = containerSize/size;



}
    
    let grid = document.createElement("div");
    grid.className="box";
    document.querySelector(".container").appendChild(grid);
