// inside-div

const sketchBox = document.getElementById("sketch-box");
let numberOfDivs = 256;

for (i = 0; i < numberOfDivs; i++) {
  let insideDiv = document.createElement("div");
  insideDiv.classList.add("inside-div");
  sketchBox.appendChild(insideDiv);
}
