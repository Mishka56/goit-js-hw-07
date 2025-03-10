const form = document.querySelector(".login-form");
const getInput = form.querySelectorAll("input")
const button = document.querySelector("button");
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const getEmail = form.elements['email'].value.trim();
	const getPass = form.elements['password'].value.trim();
	if (getEmail === "" || getPass === "") {
		alert(`All form fields must be filled in`);
		return
	}
		console.log(
		{ Email: getEmail, Password: getPass }
	);
	form.reset();
	});

getInput.forEach(input => input.classList.add("input-class"));

const getFirstInput = form.querySelector("input");
getFirstInput.addEventListener("click", () => getFirstInput.setAttribute("placeholder", "Type area"));

document.addEventListener("click", (event) => {
if (event.target !== getFirstInput) {
	getFirstInput.removeAttribute("placeholder");
}
})

