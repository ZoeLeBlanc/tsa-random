// function mouseClick (event) {
//Get DOM Elements
var rightArrow = document.getElementById("right");
var leftArrow = document.getElementById("left");

//Determine Where Click Event Occurred
function mouseClick (event) {
	var clickWindow = window.innerWidth;
	var clickWindow = clickWindow /2;
	if (event.clientX < clickWindow) {
		showArrow(leftArrow);
		console.log("left");
		setTimeout(function() {
			hideArrow(leftArrow);
		}, 1000);
	}
	if (event.clientX > clickWindow) {
		showArrow(rightArrow);
		console.log("right");
		setTimeout(function() {
			hideArrow(rightArrow);
		}, 1000);
	}
}

window.addEventListener("click", mouseClick);
//Determine which image to show
function showArrow(img) {
	img.classList.remove("hidden");
	img.classList.add("show");
}
function hideArrow(img) {
	img.classList.remove("show");
	img.classList.add("hidden");
}
