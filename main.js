const container = document.querySelector(".boxes-container")

for (let i = 1; i <= 256; i++) {
  const box = document.createElement("div")


  box.textContent = i
  box.classList.add("box")

  container.appendChild(box)
}

