const getList = document.querySelector("#categories");
const getSubList = getList.querySelectorAll(".item");
const categoryCount = getSubList.length
console.log(`Number of categories: ${categoryCount}`);

getSubList.forEach(elem => {
	const category = elem.querySelector("h2").textContent;
	console.log(`Category: ${category}`);
	const subItems = elem.querySelectorAll("ul li");
	const subItemsCount = subItems.length;
	console.log(`Elements: ${subItemsCount}`);

}); 

document.querySelectorAll(".item li").forEach(li => li.classList.add('category-item'));
document.querySelectorAll("#categories ul").forEach(ul => ul.classList.add("category-list"))


