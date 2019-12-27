const imgOption = document.getElementById("image-option");
const pDesc = document.getElementById("option-desc");

function renderPage(optionElem) {
	const optionId = optionElem.getAttribute("data-option-id");
	renderById(optionId);
}

function renderById(optionId) {
	const option = data[optionId];

	imgOption.src = option.image;
	pDesc.innerText = option.desc;

	var element = document.getElementsByTagName("a"), index;

	for (index = element.length - 1; index >= 0; index--) {
	    element[index].parentNode.removeChild(element[index]);
	}

	for (var curOption of option.options) {
		console.log(curOption);
		const addedOption = document.createElement("a");
		addedOption.href = "#";
		addedOption.setAttribute("data-option-id", curOption.dest);
		addedOption.innerText = curOption.desc;
		addedOption.setAttribute("onclick", "renderPage(this)");
		console.log(addedOption);
		document.getElementsByTagName("body")[0].appendChild(addedOption);
	}
}

renderById(1);
