const getInput = document.querySelector("#name-input");
const getSpan = document.querySelector("#name-output");
const getTitle = document.querySelector("h1");
getInput.addEventListener("input", () => {
	const inputValue = getInput.value.trim();
	getSpan.textContent = inputValue === "" ? "Anonymous" : inputValue;
	
});
getTitle.classList.add("title")
getInput.style.height = "40px";
getInput.style.width = "380px"
getInput.style.padding = "3px 16px";

