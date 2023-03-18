// inside-div

const sketchBox = document.getElementById("sketch-box");
let numberOfSides = 16;
let numberOfDivs = Math.pow(numberOfSides, 2);

let insideDiv;
let insideDivGroup = document.getElementsByClassName("inside-div");

for (i = 0; i < numberOfDivs; i++) {
  insideDiv = document.createElement("div");
  insideDiv.classList.add("inside-div");
  insideDiv.style.width = 100 / numberOfSides + "%";
  insideDiv.style.height = 100 / numberOfSides + "%";

  sketchBox.appendChild(insideDiv);
}
let isMouseDown = false;
window.addEventListener("mousedown", () => {
  isMouseDown = true;
});

window.addEventListener("mouseup", () => {
  isMouseDown = false;
});

for (let i = 0; i < insideDivGroup.length; i++) {
  insideDivGroup[i].addEventListener("click", () => {
    insideDivGroup[i].classList.add("inside-div-clicked");
  });
  insideDivGroup[i].addEventListener("mouseover", () => {
    if (isMouseDown) {
      insideDivGroup[i].classList.add("inside-div-clicked");
    }
  });
}
