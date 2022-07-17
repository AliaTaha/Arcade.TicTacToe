// storing board information in an array
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// return all cell elements from DOM
const cellElements = document.querySelectorAll(".cell");
console.log(cellElements);

// add eventListener awaiting user action
// able to detect which cell is clicked
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  });
});

// placing markers in each cell clicked
function placeMarker(index) {
  console.log(index);
}
