let rgb = false;
let eraser = false;

function main() {
  fillGrid(16);

  const slider = document.querySelector("#slider");
  const rgbBtn = document.querySelector("#rgb-btn");
  const eraserBtn = document.querySelector("#eraser-btn");
  const clearBtn = document.querySelector("#clear-btn");

  // updates grid
  slider.addEventListener("click", () => {
    fillGrid(slider.value);
  });

  // updates slider label
  slider.addEventListener("mousemove", () => {
    updateSliderLabel(slider.value);
  });

  // resets toggles and grid
  clearBtn.addEventListener("click", () => {
    fillGrid(slider.value);
    eraser = false;
    rgb = false;
    toggleBoxShadow(eraserBtn, eraser);
    toggleBoxShadow(rgbBtn, rgb);
  });

  rgbBtn.addEventListener("click", () => {
    rgb = !rgb;
    toggleBoxShadow(rgbBtn, rgb);
    if (eraser) {
      eraser = !eraser;
      toggleBoxShadow(eraserBtn, eraser);
    }
  });

  eraserBtn.addEventListener("click", () => {
    eraser = !eraser;
    toggleBoxShadow(eraserBtn, eraser);
    if (rgb) {
      rgb = !rgb;
      toggleBoxShadow(rgbBtn, rgb);
    }
  });
}

function toggleBoxShadow(button, activated) {
  if (activated) {
    button.style.boxShadow = "0px 0px 20px #FDD369";
  } else [(button.style.boxShadow = "")];
}

function fillGrid(columns) {
  const grid = document.querySelector("#grid-container");
  grid.style.gridTemplateColumns = "repeat(" + columns + ",auto)";
  grid.style.gridTemplateRows = "repeat(" + columns + ",auto)";

  const div = document.createElement("div");
  div.className = "grid-item";

  div.addEventListener("click", () => {
    changeColor(div);
    console.log(this);
  });

  // clears the grid for new elements
  if (grid.childElementCount > 0) {
    grid.innerHTML = "";
  }

  //  add items to grid
  for (let i = 0; i < columns * columns; i++) {
    // repeats the node
    grid.appendChild(div.cloneNode(true));
  }

  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("mouseover", () => {
      changeColor(item);
    });
  });
}

function updateSliderLabel(columns) {
  const sliderLabel = document.querySelector("#slider-value");
  sliderLabel.textContent = `${columns} x ${columns}`;
}

function changeColor(gridItem) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const defaultGridColor = "#FFD369";

  console.log(eraser);

  if (rgb) {
    // changes previous RGB item
    gridItem.style.backgroundColor = "#" + randomColor;
  } else if (eraser) {
    gridItem.style.backgroundColor = "#393e46";
  } else {
    gridItem.style.backgroundColor = defaultGridColor;
  }
}

// no clue why this doesn't work
// works when changing colours but not removing the style
function toggleBorder() {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.style.border = "";
  });
}

main();
