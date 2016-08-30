// function mouseClick (event) {
//Get DOM Elements
var rightArrow = document.getElementById("right");
var leftArrow = document.getElementById("left");

//Determine Where Click Event Occurred
function mouseClick (event) {
	var clickWindow = window.innerWidth;
	var clickWindow = clickWindow /2;
	if (event.clientX < clickWindow) {
		leftShow();
		console.log("left");
		setTimeout(leftHide, 1000);
	}
	if (event.clientX > clickWindow) {
		rightShow();
		console.log("right");
		setTimeout(rightHide, 1000);
	}
}

window.addEventListener("click", mouseClick);
//Determine which image to show
function leftShow() {
	leftArrow.classList.remove("hidden");
	leftArrow.classList.add("show");
}
function leftHide() {
	leftArrow.classList.remove("show");
	leftArrow.classList.add("hidden");
}
function rightShow() {
	rightArrow.classList.remove("hidden");
	rightArrow.classList.add("show");
}
function rightHide() {
	rightArrow.classList.remove("show");
	rightArrow.classList.add("hidden");
}