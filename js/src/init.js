window.onresize = resize;

function resize() {
	$("canvas").css("height", window.innerHeight + "px");
	$("canvas").css("width", window.innerWidth + "px");
	$("canvas").css("left", 0 + "px");
	//$("canvas").css("width", window.innerHeight / 16 * 9 + "px");
	//$("canvas").css("left", window.innerWidth / 2 - window.innerHeight / 32 * 9 + "px");
	$("#backdiv").css("height", window.innerHeight + "px");
	$("#backdiv").css("width", window.innerHeight / 16 * 9 + "px");
	$("#backdiv").css("margin-left", window.innerWidth / 2 - window.innerHeight / 32 * 9 + "px");
	$("#leftContainer").css("width", window.innerWidth + "px").css("left", -window.innerHeight / 16 * 9 + "px");
	$("#rightContainer").css("width", window.innerWidth + "px").css("right", -window.innerHeight / 16 * 9 + "px");
	$("#optionDiv").css("width", window.innerHeight / 16 * 7 + "px");
	$("#levelDiv").css("width", window.innerHeight / 16 * 7 + "px");
	$("#closeLeftBtn").css("width", window.innerWidth - window.innerHeight / 16 * 7 + "px");
	$("#closeRightBtn").css("width", window.innerWidth - window.innerHeight / 16 * 7 + "px");
	$("#optionTitle").css("font-size", window.innerHeight / 85 * 7 + "px");
	$("#controllerD").css("font-size", window.innerHeight / 170 * 7 + "px");
	$(".line").css("font-size", window.innerHeight / 30 + "px");
	$("#soundD").css("font-size", window.innerHeight / 170 * 7 + "px");
	$("#imageD").css("font-size", window.innerHeight / 170 * 7 + "px");
	$("#languageD").css("font-size", window.innerHeight / 170 * 7 + "px");
	$("#levelTitle").css("font-size", window.innerHeight / 85 * 7 + "px").css("margin-left", "4%");
	$(".levelName").css("font-size", window.innerHeight / 170 * 7 + "px");
	$("#levelframe").css("width", window.innerHeight / 16 * 7 + "px").css("height", window.innerHeight / 85 * 75 + "px");


	$("h1").css("font-size", window.innerHeight / 160 * 7 + "px").css("height", window.innerHeight / 160 * 7 + "px");
	$("h2").css("font-size", window.innerHeight / 160 * 5 + "px").css("height", window.innerHeight / 160 * 5 + "px");
	$(".swiper-pagination-bullet").css("width", window.innerHeight / 16 + "px").css("height", window.innerHeight / 120 + "px");
	$("#pagination").css("top", 0 + "px").css("height", window.innerHeight / 60 + "px");
	$(".swiper-wrapper").css("margin-top", window.innerHeight / 24 + "px").css("height",window.innerHeight *20/ 24 + "px");
	$(".levelBox").css("width", (window.innerHeight / 10-4) + "px").css("height", (window.innerHeight / 10-4) + "px").css("margin-top", window.innerHeight / 34 + "px").css("margin-right", window.innerHeight / 34 + "px").css("line-height", window.innerHeight / 10 + "px").css("font-size", window.innerHeight / 20 + "px");
}
resize();
Array.prototype.remove = function(n) {
	if (n < 0) return this;
	return this.slice(0, n).concat(this.slice(n + 1, this.length));
}
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 1,
	paginationClickable: true,
	coverflow: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false
	},
	spaceBetween: 5,
	loop: true
});

$("#rightContainer").hide()

document.onkeydown = keyDown;  
function keyDown(event) {  
	if (event.keyCode == 39||event.keyCode ==68) 
		onRightDown();
	if (event.keyCode == 37||event.keyCode ==65) 
		onLeftDown();
	
} 
document.onkeyup = keyUp;  
function keyUp(event) {  
	if (event.keyCode == 39||event.keyCode ==68) 
		onRightUp();
	if (event.keyCode == 37||event.keyCode ==65) 
		onLeftUp();
} 

