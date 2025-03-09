function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getBody = document.querySelector("body");
const getButton = getBody.querySelector(".change-color");
const getSpan = getBody.querySelector(".widget span")


getButton.addEventListener("click", (event) => {
  getBody.style.backgroundColor = getRandomHexColor();
  getBody.querySelector("span");
  getSpan.textContent = getRandomHexColor();
})
