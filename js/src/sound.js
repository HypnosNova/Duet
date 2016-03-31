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


var musicArr=document.getElementsByTagName("audio");

function playMusic(){
	var index=Math.floor(Math.random()*12+1);
	musicArr[0].src="media/bg"+index+".mp3";
	musicArr[0].play();
	console.log(index);
}

for(var i=0;i<musicArr.length;i++){
	musicArr[i].addEventListener('ended', playMusic, false);
}
playMusic()
