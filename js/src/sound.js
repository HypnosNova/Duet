ion.sound({
	sounds: [{
		name: "touch",
	},{
		name:"prefect"
	}],
	volume: 1,
	path: "media/",
	preload: true,
});


var backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.src="media/bg"+(Math.floor(Math.random()*12)+1)+".mp3";
backgroundMusic.addEventListener('ended', function() {
	backgroundMusic.src="media/bg"+(Math.floor(Math.random()*12)+1)+".mp3"
}, false);
