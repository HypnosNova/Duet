var isMouseDown = false;
var isDoubleDown = false;
var clockwise = 0;

var renderer = PIXI.autoDetectRenderer(window.innerWidth/scale/quality, sceneY, {
	transparent: true
});
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

var pattern = Trianglify({
	height: 1600/quality,
	width: window.innerWidth/scale/quality,
	cell_size: 30 + Math.random() * 100
})
var background = PIXI.Sprite.fromImage(pattern.png());
stage.addChild(background)
//	//console.log(pattern.png())



var leftbtn = PIXI.Sprite.fromImage('');
var rightbtn = PIXI.Sprite.fromImage('');

leftbtn.position.x = 0;
leftbtn.position.y = 0;
leftbtn.width = btnWidth;
leftbtn.height = sceneY;
leftbtn.interactive = true;
leftbtn.on('mousedown', onLeftDown);
leftbtn.on('touchstart', onLeftDown);
leftbtn.on('mouseup', onLeftUp);
leftbtn.on('touchend', onLeftUp);

rightbtn.position.x = btnWidth;
rightbtn.position.y = 0;
rightbtn.width = btnWidth;
rightbtn.height = sceneY;
rightbtn.interactive = true;
rightbtn.on('mousedown', onRightDown);
rightbtn.on('touchstart', onRightDown);
rightbtn.on('mouseup', onRightUp);
rightbtn.on('touchend', onRightUp);

stage.addChild(leftbtn);
stage.addChild(rightbtn);

var geminiContainer = new PIXI.Container();
//geminiContainer.anchor(0.5)
geminiContainer.x = (sceneX - geminiContainerWidth) / 2 +marginLeft;
geminiContainer.y = (sceneY - sceneX) + (sceneX - geminiContainerWidth) / 2;
geminiContainer.width = geminiContainerWidth;
geminiContainer.height = geminiContainerWidth;

//var circleBack = new PIXI.Graphics();
//circleBack.lineStyle(4, 0xFFFFFF, 1);
//circleBack.beginFill(0x000000, 1);
//circleBack.drawCircle(geminiContainerWidth / 2, geminiContainerWidth / 2, circleBackWidth / 2);
//circleBack.endFill();
//
//circleBack.lineStyle(0, 0xFFFFFF, 1);
//circleBack.beginFill(0xff0000, 1);
//circleBack.drawCircle(ballWidth / 2 + 2, geminiContainerWidth / 2, ballWidth / 2);
//circleBack.endFill();
//
//circleBack.lineStyle(0, 0xFFFFFF, 1);
//circleBack.beginFill(0x0000ff, 1);
//circleBack.drawCircle(geminiContainerWidth - ballWidth / 2 - 2, geminiContainerWidth / 2, ballWidth / 2);
//circleBack.endFill();
//
////stage.addChild(geminiContainer);
//geminiContainer.addChild(circleBack);
var obj = PIXI.Sprite.fromImage('img/c' + quality + '.png'); //("img/icon.png")//
obj.anchor.x = 0.5;
obj.anchor.y = 0.5;
obj.position.x = objInitX+marginLeft;
obj.position.y = objInitY; //(sceneY - sceneX) + (sceneX) / 2;

stage.addChild(obj);


var logoText = new PIXI.Text("DUET", {
	font: 350 / quality + 'px gulim',
	fill: '#ffffff',
	stroke: '#ffffff',
	strokeThickness: 0,
	align: 'center'
});
logoText.anchor.x = 0.5;
logoText.anchor.y = 0.5;
logoText.x = objInitX+marginLeft;
logoText.y = 190 / quality;
stage.addChild(logoText);

var optionBtn = PIXI.Sprite.fromImage('img/option' + quality + '.png');
optionBtn.anchor.x = 0.5;
optionBtn.anchor.y = 0.5;
optionBtn.x = 150 / quality+marginLeft;
optionBtn.y = 1400 / quality;
optionBtn.timeChange = 40;
optionBtn.interactive = true;
optionBtn.on('click', showOption);//mousedown
optionBtn.on('touch', showOption);
stage.addChild(optionBtn);

var startBtn = PIXI.Sprite.fromImage('img/start' + quality + '.png');
startBtn.anchor.x = 0.5;
startBtn.anchor.y = 0.5;
startBtn.x = 750 / quality+marginLeft;
startBtn.y = 1400 / quality;
startBtn.timeChange = 40;
startBtn.interactive = true;
startBtn.on('click', showLevel);
startBtn.on('touch', showLevel);
stage.addChild(startBtn);

var pauseBtn = PIXI.Sprite.fromImage('img/pause' + quality + '.png');
pauseBtn.anchor.x = 0.5;
pauseBtn.anchor.y = 0.5;
pauseBtn.x = 820 / quality+marginLeft;
pauseBtn.y = 80 / quality;
pauseBtn.timeChange = 40;
pauseBtn.interactive = true;
pauseBtn.on('click', pauseGame);
pauseBtn.on('touch', pauseGame);


var exitBtn = PIXI.Sprite.fromImage('img/exitBtn' + quality + '.png');
exitBtn.anchor.x = 0.5;
exitBtn.anchor.y = 0.5;
exitBtn.x = 150 / quality+marginLeft;
exitBtn.y = 1400 / quality;
exitBtn.timeChange = 40;
exitBtn.interactive = true;
exitBtn.on('click', exitGame);
exitBtn.on('touch', exitGame);
//stage.addChild(pauseBtn);

var continueBtn = PIXI.Sprite.fromImage('img/start' + quality + '.png');
continueBtn.anchor.x = 0.5;
continueBtn.anchor.y = 0.5;
continueBtn.x = 750 / quality+marginLeft;
continueBtn.y = 1400 / quality;
continueBtn.timeChange = 40;
continueBtn.interactive = true;
continueBtn.on('click', continueGame);
continueBtn.on('touch', continueGame);

var versionText = new PIXI.Text("Ver 0.1", {
	font: 100 / quality + 'px gulim',
	fill: '#ffffff',
	stroke: '#ffffff',
	strokeThickness: 0,
	align: 'center'
});
versionText.anchor.x = 0.5;
versionText.anchor.y = 0.5;
versionText.x = objInitX+marginLeft;
versionText.y = 1400 / quality;
stage.addChild(versionText);

var prefecttext = new PIXI.Text(languageMap.prefect, {
	font: 100 / quality + 'px 微软雅黑',
	fill: '#ffffff',
	stroke: '#ffffff',
	strokeThickness: 0,
	align: 'center'
});
prefecttext.anchor.x = 0.5;
prefecttext.anchor.y = 0.5;
prefecttext.x = objInitX+marginLeft;
prefecttext.y = objInitX / 3;
prefecttext.alpha = 0;

function onLeftDown(eventData) {
	if (leftDown) {
		return;
	}
	if (!isMouseDown) {
		t1 = new Date().getTime();
		isMouseDown = true;
		leftDown = true;
		clockwise = -1;
		if (isLevelStart && !isGamePause) {
			levelDetail.prefect--;
		}
	} else {
		doubleClick(true);
	}
}

function onLeftUp(eventData) {
	//console.log("left up-----" + isDoubleDown);
	if (!rightDown && !isDoubleDown) {
		clockwise = 0;
		t2 = new Date().getTime();
		leftDown = false;
		isMouseDown = false;
		setTwoBallPosition(false)
	} else if (isDoubleDown) {
		cancelOneClick(true);
	}
}

function onRightDown(eventData) {
	if (rightDown) {
		return;
	}
	if (!isMouseDown) {
		t1 = new Date().getTime();
		isMouseDown = true;
		rightDown = true;
		clockwise = 1;
		if (isLevelStart && !isGamePause) {
			levelDetail.prefect--;
		}
	} else {
		doubleClick(false);
	}
}

function onRightUp(eventData) {
	if (!leftDown && !isDoubleDown) {
		t2 = new Date().getTime();
		clockwise = 0;
		rightDown = false;
		isMouseDown = false;
		setTwoBallPosition(true)
	} else if (isDoubleDown) {
		cancelOneClick(false);
	}
}

function setTwoBallPosition(isClockwise) {
	if (!leftDown)
		clockwise--;
	if (!rightDown)
		clockwise++;
}

//之前是不是顺时针转
function doubleClick(isClockwise) {
	//console.log("doubleClick:" + leftDown + "-----" + rightDown);
	isDoubleDown = true;
	if (isClockwise) {
		clockwise = 1;
	} else {
		clockwise = -1;
	}
}

//移除之后是不是顺时针转
function cancelOneClick(isClockwise) {
	isDoubleDown = false;
	isMouseDown = true;
	if (!isClockwise) {
		rightDown = false;
		leftDown = true;
		clockwise = -1;
	} else {
		leftDown = false;
		rightDown = true;
		clockwise = 1;
	}
}

function showOption(eventData) {
	if(optionBtn.alpha<0.99){
		return;
	}
	showMenu = 1;
	optionBtn.alpha = 1;
	startBtn.alpha = 1;
	optionBtn.timeChange = 40;
	startBtn.timeChange = 40;
	$("#leftContainer").css("display", "block");
	setTimeout(function() {
		$("#leftContainer").css("left", "0");
	}, 100);
}

function showLevel(eventData) {
	if(startBtn.alpha<0.99){
		return;
	}
	showMenu = 1;
	optionBtn.alpha = 1;
	startBtn.alpha = 1;
	optionBtn.timeChange = 40;
	startBtn.timeChange = 40;
	$("#rightContainer").css("display", "block");
	setTimeout(function() {
		$("#rightContainer").css("right", "0");
	}, 100);
}

function closeOption() {
	showMenu = -1;
	optionBtn.alpha = 0;
	startBtn.alpha = 0;
	optionBtn.timeChange = 40;
	startBtn.timeChange = 40;
	$("#leftContainer").css("left", -window.innerHeight / 16 * 9 + "px");
	setTimeout(function() {
		$("#leftContainer").css("display", "none");
	}, 500);
}

function closeLevel() {
	showMenu = -1;
	optionBtn.alpha = 0;
	startBtn.alpha = 0;
	optionBtn.timeChange = 40;
	startBtn.timeChange = 40;
	$("#rightContainer").css("right", -window.innerHeight / 16 * 9 + "px");
	setTimeout(function() {
		$("#rightContainer").css("display", "none");
	}, 500);
}

function pauseGame() {
	stage.removeChild(pauseBtn);
	isGamePause = true;
	stage.addChild(exitBtn);
	stage.addChild(continueBtn);
}

function continueGame() {
	stage.addChild(pauseBtn);
	isGamePause = false;
	stage.removeChild(exitBtn);
	stage.removeChild(continueBtn);
}

function exitGame() {
	isGamePause = false;
	stage.removeChild(exitBtn);
	stage.removeChild(continueBtn);
	stage.addChild(optionBtn);
	stage.addChild(startBtn);
	clearLevel();
	closeLevel();
	stage.addChild(logoText);
	stage.addChild(versionText);
	obj.position.x = objInitX+marginLeft;
	obj.position.y = objInitY;
}

$("#closeLeftBtn").bind("click", closeOption);
$("#closeRightBtn").bind("click", closeLevel);
