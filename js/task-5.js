function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getBody = document.querySelector("body");
const getButton = getBody.querySelector(".change-color");
const getSpan = getBody.querySelector(".widget span")


getButton.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  getBody.style.backgroundColor = color;
  getSpan.textContent = color;
})

