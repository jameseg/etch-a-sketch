const container = document.querySelector(".boxes-container")
const button = document.querySelector("button")

function drawGrid(parent, rowItems = 16) {
  if (rowItems > 100) {
    rowItems = 100
  }
  const squareSidePercentage = (100 / rowItems)

  for (let i = 0; i < rowItems * rowItems; i++) {
    const box = document.createElement("div")

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "gray"
    })

    box.classList.add("box")
    box.style.flex = `1 1 calc(${squareSidePercentage}% - 2px)`

    parent.appendChild(box)
  }
}

function removeGrid() {
  const parentContainer = document.querySelector(".boxes-container")
  parentContainer.remove(".boxes-container")
}

function createNewContainer(input) {
  const newContainer = document.createElement("div")
  newContainer.classList.add("boxes-container")
  newContainer.style.display = 'flex';
  newContainer.style.justifyContent = 'center';
  newContainer.style.flexWrap = 'wrap';
  newContainer.style.margin = 'auto';
  newContainer.style.width = '960px'
  newContainer.style.height = '960px'
  newContainer.style.flex = 1;

  const body = document.querySelector("body")
  body.appendChild(newContainer)
  console.log(newContainer)

  drawGrid(newContainer, input)
}

button.addEventListener("click", () => {
  const input = +prompt("How many squares per side? (limit 100)")
  const parentContainer = document.querySelector(".boxes-container")
  parentContainer.remove(".boxes-container")

  createNewContainer(input)
})

// start the program
drawGrid(container)







