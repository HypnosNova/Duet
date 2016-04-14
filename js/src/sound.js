ion.sound({
	sounds: [{
		name: "touch",
	},{
		name:"prefect"
	},{
		name:"acceptNow"
	},{
		name:"alwaysChange"
	},{
		name:"angryChoose"
	},{
		name:"anyMod"
	},{
		name:"beCareful"
	},{
		name:"believeYourScense"
	},{
		name:"butWelcomeIt"
	},{
		name:"cantGetFish"
	},{
		name:"dontDeny"
	},{
		name:"dontLimit"
	},{
		name:"faceupToFailure"
	},{
		name:"helpShackle"
	},{
		name:"neverGiveUp"
	},{
		name:"niceToMeetYou"
	},{
		name:"notDifficult"
	},{
		name:"resistanceIsNotOnlyChoice"
	},{
		name:"striveFor"
	},{
		name:"thinkCircle"
	},{
		name:"thisAlsoProveYou"
	},{
		name:"thisWillFullOf"
	},{
		name:"youCantAvoid"
	},{
		name:"youKnowSpilledWater"
	}],
	volume: 1,
	path: "media/voice/",
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

