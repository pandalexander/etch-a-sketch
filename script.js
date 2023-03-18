const sketchBox = document.getElementById("sketch-box");
let insideDiv;
let insideDivGroup = document.getElementsByClassName("inside-div");

function createSketchBox(numberOfSides) {
  while (insideDivGroup.length > 0) {
    for (i = 0; i < insideDivGroup.length; i++) {
      insideDivGroup[i].remove();
    }
  }
  let numberOfDivs = Math.pow(numberOfSides, 2);
  for (i = 0; i < numberOfDivs; i++) {
    insideDiv = document.createElement("div");
    insideDiv.classList.add("inside-div");
    insideDiv.style.width = 100 / numberOfSides + "%";
    insideDiv.style.height = 100 / numberOfSides + "%";
    sketchBox.appendChild(insideDiv);
  }
}

createSketchBox(16);

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

let chooseNumberButton = document.getElementById("choose-number-button");

chooseNumberButton.addEventListener("click", () => {
  createSketchBox(+prompt("How many blocks would you like on the side?"));
});
