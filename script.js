// Initialize an empty string for codeInnerHTML
let codeInnerHTML = "";

for (let i = 1; i <= 6; i++) {
    codeInnerHTML += `<input class="code code-${i}" maxlength="1" placeHolder="0" onkeydown="move(event, ${i})">`;
}

document.querySelector(".code-container").innerHTML = codeInnerHTML;

function move(event, idx){
	const element = document.querySelector(`.code-${idx}`);

	if (event.key == "Backspace" && element.value.length == 0 && idx > 0){
		document.querySelector(`.code-${idx-1}`).focus();
	}

	if (element.value.length == 1 && idx < 6){
		document.querySelector(`.code-${idx+1}`).focus();
	}
}


