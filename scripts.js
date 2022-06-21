function main() {
  fillGrid(16);

  const slider = document.querySelector("#slider");

  // updates grid
  slider.addEventListener("click", () => {
    fillGrid(slider.value);
  });

  // updates slider label
  slider.addEventListener("mousemove", () => {
    updateSliderLabel(slider.value);
  });
}

function fillGrid(columns) {
  const grid = document.querySelector("#grid-container");
  grid.style.gridTemplateColumns = "repeat(" + columns + ",auto)";
  grid.style.gridTemplateRows = "repeat(" + columns + ",auto)";

  //   const test = document.createElement("div");
  //   test.className = "test-item";

  //   test.addEventListener("mousemove", () => {
  //     changeColor(test);
  //     console.log(test);
  //   });

  //   console.log(test);

  //   grid.appendChild(test);
  //   grid.appendChild(test.cloneNode(true));

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
    item.addEventListener("mousemove", () => {
      changeColor(item);
    });
  });
}

function updateSliderLabel(columns) {
  const sliderLabel = document.querySelector("#slider-value");
  sliderLabel.textContent = `${columns} x ${columns}`;
}

function changeColor(gridItem) {
  gridItem.style.backgroundColor = "black";
}

main();
