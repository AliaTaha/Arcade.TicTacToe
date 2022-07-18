// create an array to hold boardData in js
// include smaller arrays of individual rules
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// declare and pull CSS selectors from DOM
const cellElements = document.querySelectorAll(".cell");
console.log(cellElements);

// add eventListener to await user action
// index is able to detect which cell is clicked
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    savedData(index);
  });
});

// saving data in each cell
function savedData(index) {
  console.log(index);
}
