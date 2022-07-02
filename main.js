const $ = document.querySelector.bind(document),
	$$ = document.querySelectorAll.bind(document);

const goodInput = $("#good"),
	cheapInput = $("#cheap"),
	fastInput = $("#fast"),
	okButton = $("#okBtn"),
	showInfo = $("#showInfo"),
	info = $("#info"),
	closeResult = $("#closeResult");

goodInput.onchange = () => {
	if (cheapInput.checked && fastInput.checked && goodInput.checked) {
		fastInput.checked = false;
	}
};
cheapInput.onchange = () => {
	if (cheapInput.checked && fastInput.checked && goodInput.checked) {
		goodInput.checked = false;
	}
};
fastInput.onchange = () => {
	if (cheapInput.checked && fastInput.checked && goodInput.checked) {
		cheapInput.checked = false;
	}
};
closeResult.onclick = () => {
	$("#result").classList.remove("show");
	info.classList.remove("show");
};
showInfo.onclick = () => {
	info.classList.toggle("show");
};
okButton.onclick = () => {
	showResult();
};
const showResult = () => {
	let result;
	let checkedInput = $$("input[type=checkbox]:checked");
	let uncheckedInput = $$("input[type=checkbox]:not(:checked)");
	if (checkedInput.length == 0) {
		result = `!${goodInput.value}<mc>,</mc> !${cheapInput.value} <mc>&</mc> !${fastInput.value}`;
	} else if (checkedInput.length == 1) {
		result = `${checkedInput[0].value}
        <mc>but won't be</mc>
        ${uncheckedInput[0].value}
        <mc>&</mc>
         ${uncheckedInput[1].value}`;
	} else if (checkedInput.length == 2) {
		result = `${checkedInput[0].value} <mc>&</mc> ${checkedInput[1].value} <mc>but won't be</mc> ${uncheckedInput[0].value}`;
	}
	$("#resultText").innerHTML = result;
	$("#result").classList.add("show");
};
document.onclick = (e) => {
	if (
		e.target != $("#info") &&
		e.target.closest("#showInfo") != $("#showInfo")
	) {
		$("#info").classList.remove("show");
	}
};
