const data = {
	1 : {
		image : "img/one.jpg",
		desc : "One paragraph for the first page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare, nisi sed feugiat congue, leo tortor consequat diam, finibus semper orci metus eu risus. Suspendisse fermentum ut libero sit amet mollis. Nullam hendrerit velit nec sapien egestas laoreet. Proin sollicitudin sodales nisi sed malesuada. Maecenas id egestas mauris. Mauris placerat orci et ligula mollis, ut lobortis mi venenatis. Sed vulputate dui vel velit tempus auctor. Integer ultrices leo ut justo tristique scelerisque. Donec fermentum est purus, in molestie nunc blandit nec.",
		options: [
			{
				dest : 2,
				desc : "Go to second page"
			},
			{
				dest : 3,
				desc : "Go to third page"
			},
			{
				dest : 4,
				desc : "Go to last page"
			}
		]
	},
	2 : {
		image : "img/two.jpg",
		desc : "Another paragraph for the second page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin sodales nisi sed malesuada. Maecenas id egestas mauris. Mauris placerat orci et ligula mollis, ut lobortis mi venenatis. Sed vulputate dui vel velit tempus auctor. Integer ultrices leo ut justo tristique scelerisque. Donec fermentum est purus, in molestie nunc blandit nec.",
		options: [
			{
				dest : 1,
				desc : "Back to beginning"
			},
			{
				dest : 3,
				desc : "Go to third page"
			}
		]
	},
	3 : {
		image : "img/three.jpg",
		desc : "An additional paragraph for the third page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare, nisi sed feugiat congue, leo tortor consequat diam, finibus semper orci metus eu risus. Suspendisse fermentum ut libero sit amet mollis. Nullam hendrerit velit nec sapien egestas laoreet. ",
		options: [
			{
				dest : 1,
				desc : "Back to beginning"
			},
			{
				dest : 4,
				desc : "Go to last page"
			}
		]
	},
	4 : {
		image : "img/four.jpg",
		desc : "A final paragraph for the third page. Maecenas id egestas mauris. Mauris placerat orci et ligula mollis, ut lobortis mi venenatis. Sed vulputate dui vel velit tempus auctor. Integer ultrices leo ut justo tristique scelerisque. Donec fermentum est purus, in molestie nunc blandit nec.",
		options : [
			{
				dest : 1,
				desc : "Go to first page"
			},
			{
				dest : 2,
				desc : "Go to second page"
			}
		]
	}
}

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
