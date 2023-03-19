const sketchBox = document.getElementById("sketch-box");

function createSketchBox(numberOfSides) {
  let insideDiv;
  let insideDivGroup = document.getElementsByClassName("inside-div");
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
}

createSketchBox(16);

let chooseNumberButton = document.getElementById("choose-number-button");
chooseNumberButton.addEventListener("click", () => {
  let userInput = +prompt(
    "How many blocks would you like on the side? Between 16 and 100 please."
  );
  if (userInput == 0) {
    alert("Something went wrong. Try again whenever you want!");
  } else if (isNaN(userInput)) {
    alert("Something went wrong. Please try again with a number please.");
  } else if (userInput > 100) {
    createSketchBox(100);
  } else if (userInput < 16) {
    createSketchBox(16);
  } else {
    createSketchBox(userInput);
  }
});

let clearSketchButton = document.getElementById("clear-button");
clearSketchButton.addEventListener("click", () => {
  createSketchBox(
    Math.sqrt(+document.querySelectorAll("div.inside-div").length)
  );
});
