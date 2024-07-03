const container = document.querySelector(".boxes-container")
const button = document.querySelector("button")

function drawGrid(rowItems = 16) {
  const squareSidePercentage = (100 / rowItems)
  console.log(squareSidePercentage)
  for (let i = 0; i < rowItems * rowItems; i++) {
    const box = document.createElement("div")

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "gray"
    })
    box.classList.add("box")
    // box.textContent = i + 1
    // box.style.width = squareSide
    // box.style.height = squareSide
    box.style.flex = `1 1 calc(${squareSidePercentage}% - 2px)`
    container.appendChild(box)
  }
}

// button.addEventListener("click", (e) => {
//   const input = +prompt("How many squares per side? (limit 100)")
//   console.log(input)

//   container.remove(".boxes-container")

//   const container = document.createElement("div.boxes-container")
//   for (let i = 0; i < input; i++) {
//     const box = document.createElement("div")

//     box.addEventListener("mouseover", (e) => {
//       box.style.backgroundColor = "gray"
//     })

//     box.classList.add("box")


//     container.appendChild(box)
//   }
// })

drawGrid(100)




