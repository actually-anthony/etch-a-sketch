let rgb = false;
let eraser = false;

function main() {
  fillGrid(16);

  const slider = document.querySelector("#slider");
  const borderBtn = document.querySelector("#border");

  // updates grid
  slider.addEventListener("click", () => {
    fillGrid(slider.value);
  });

  // updates slider label
  slider.addEventListener("mousemove", () => {
    updateSliderLabel(slider.value);
  });

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", () => {
    fillGrid(slider.value);
  });

  const rgbBtn = document.querySelector("#rgb-btn");
  rgbBtn.addEventListener("click", () => {
    rgb = !rgb;
    toggleBoxShadow(rgbBtn, rgb);
  });

  const eraserBtn = document.querySelector("#eraser-btn");
  eraserBtn.addEventListener("click", () => {
    eraser = !eraser;
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

  //   // remove anything within grid
  if (grid.childElementCount > 0) {
    grid.innerHTML = "";
  }

  //   // add items to grid
  for (let i = 0; i < columns * columns; i++) {
    // repeats the node
    grid.appendChild(div.cloneNode(true));
  }
  console.log(grid.childElementCount);

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
    rgb = !rgb;
  } else {
    gridItem.style.backgroundColor = defaultGridColor;
  }
}

// no clue why this doesn't work
function toggleBorder() {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.style.border = "";
  });
}

main();
