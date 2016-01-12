var mapLevel = [];
var currentLevel = 0;
var levelGraphics = [];
var isLevelStart = false;
var isCheckPrefect=false;
var levelDetail = {}

function startlevel(levelNum) {
	stage.addChild(pauseBtn);
	isInitRotation=false;
	isGamePause = false;
	isLevelStart = true;
	mapLevel = clone(level[levelNum]);
	currentLevel = levelNum;
	drawLevel(mapLevel);
	levelDetail = clone(mapLevel[mapLevel.length - 1]);
	prefecttext.isPrefect=true;
}

function drawLevel(levelMap) {
	for (var i = 0; i < levelMap.length - 1; i++) {
		levelMap[i].prototype = defaultProperty;
		var graphic = new PIXI.Graphics();
		if (levelMap[i].shape == "rect") {
			graphic.lineStyle(0, levelMap[i].color || levelMap[i].prototype.color, 1);
			graphic.beginFill(levelMap[i].color || levelMap[i].prototype.color, 1);
			//_______________________绘图位置
			graphic.drawRect(0, 0, levelMap[i].width / quality, levelMap[i].height / quality);
			levelGraphics.push(graphic);
		} else if (levelMap[i].shape == "word") {
			var text = new PIXI.Text(levelMap[i].text, {
				font: 60 / quality + 'px 微软雅黑',
				fill: '#ffffff',
				stroke: '#ffffff',
				strokeThickness: 0,
				align: 'center'
			});
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			text.x = levelMap[i].x;
			text.y = levelMap[i].y;
			text.alpha = 0;
			stage.addChild(text);
			levelGraphics.push(text);
			continue;
		}
		graphic.x = levelMap[i].x / quality || levelMap[i].prototype.x / quality;
		graphic.y = levelMap[i].y / quality || levelMap[i].prototype.y / quality;
		graphic.rotation = levelMap[i].rotation || levelMap[i].prototype.rotation;

		stage.addChild(graphic);
	}
}

function clearLevel() {
	isLevelStart = false;
	mapLevel = [];
	for (var i = 0; i < levelGraphics.length; i++) {
		stage.removeChild(levelGraphics[i]);
		levelGraphics[i].destroy();
	}
	levelGraphics = [];
	showPrefect=false;
	stage.removeChild(prefecttext);
}

function isTouch(graphic) {
	var x = sceneX >> 1;
	var y = obj.position.y;
	var angle = Math.PI - obj.rotation;
	var x1 = x + Math.cos(angle) * (circleBackWidth >> 1);
	var y1 = y - Math.sin(angle) * (circleBackWidth >> 1);
	//console.log(x+"==="+y1);
	if (pixInGraph(x1, y1, graphic)) {
		return true;
	}
	var x2 = x + Math.cos(angle - Math.PI) * (circleBackWidth >> 1);
	var y2 = y - Math.sin(angle - Math.PI) * (circleBackWidth >> 1);
	return pixInGraph(x2, y2, graphic);
}

function pixInGraph(xp, yp, graph) {
	x = graph.x;
	y = graph.y;
	h = graph.height;
	w = graph.width;
	if (xp > x && xp < x + w && yp > y && yp < y + h) {
		return true;
	}
	return false;
}

function restartLevel() {
	clearLevel();
	isGamePause = false;
	isLevelStart = true;
	startlevel(currentLevel);
}

//克隆一个对象，如果直接等号复制，则把关卡本身就修改了
function clone(obj) {
	function Fn() {}
	Fn.prototype = obj;
	var o = new Fn();
	for (var a in o) {
		if (typeof o[a] == "object") {
			o[a] = clone(o[a]);
		}
	}
	return o;
}

//是否完美的检测
function checkPrefect() {
	if (levelDetail.prefect >= 0) {
		showPrefect=true;
		stage.addChild(prefecttext);
		prefecttext.y=levelDetail.y;
	}else{
		showPrefect=false;
	}
}

