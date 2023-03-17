// inside-div

const sketchBox = document.getElementById("sketch-box");
let numberOfSides = 16;
let numberOfDivs = Math.pow(numberOfSides, 2);

for (i = 0; i < numberOfDivs; i++) {
  let insideDiv = document.createElement("div");
  insideDiv.classList.add("inside-div");
  insideDiv.style.width = 100 / numberOfSides + "%";
  insideDiv.style.height = 100 / numberOfSides + "%";

  sketchBox.appendChild(insideDiv);
}
