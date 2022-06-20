function main() {
  createGridItems(100);
}

function createGridItems(columns) {
  const grid = document.querySelector("#grid-container");
  grid.style.gridTemplateColumns = "repeat(" + columns + ",auto)";
  grid.style.gridTemplateRows = "repeat(" + columns + ",auto)";

  const div = document.createElement("div");
  div.className = "grid-item";

  for (let i = 0; i < columns * columns; i++) {
    // repeats the node
    grid.appendChild(div.cloneNode(true));
  }
}

main();
