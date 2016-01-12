window.onresize = resize;
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

function resize() {
	$("canvas").css("height", window.innerHeight + "px");
	$("canvas").css("width", window.innerHeight / 16 * 9 + "px");
	$("canvas").css("left", window.innerWidth / 2 - window.innerHeight / 32 * 9 + "px");
	$("#backdiv").css("height", window.innerHeight + "px");
	$("#backdiv").css("width", window.innerHeight / 16 * 9 + "px");
	$("#backdiv").css("margin-left", window.innerWidth / 2 - window.innerHeight / 32 * 9 + "px");
	$("#leftContainer").css("width", window.innerHeight / 16 * 9 + "px").css("left", -window.innerHeight / 16 * 9 + "px");
	$("#rightContainer").css("width", window.innerHeight / 16 * 9 + "px").css("right", -window.innerHeight / 16 * 9 + "px");
	$("#optionDiv").css("width", window.innerHeight / 16 * 7 + "px");
	$("#levelDiv").css("width", window.innerHeight / 16 * 7 + "px");
	$("#closeLeftBtn").css("width", window.innerHeight / 16 * 2 + "px");
	$("#closeRightBtn").css("width", window.innerHeight / 16 * 2 + "px");
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
	$(".levelBox").css("width", window.innerHeight / 10 + "px").css("height", window.innerHeight / 10 + "px").css("margin-top", window.innerHeight / 34 + "px").css("line-height", window.innerHeight / 10 + "px").css("font-size", window.innerHeight / 20 + "px");
}
resize();

//var pattern = Trianglify({
//		height: window.innerHeight,
//		width: window.innerWidth,
//		cell_size: 30 + Math.random() * 100
//	})
//	//console.log(pattern.png())
//	// svg
//$("body").css("background-image", "url(" + pattern.png() + ")");

Array.prototype.remove = function(n) {
	if (n < 0) return this;
	return this.slice(0, n).concat(this.slice(n + 1, this.length));
}

$("#rightContainer").hide()