var mapLevel = [];
var currentLevel = 0;
var levelGraphics = [];
var isLevelStart = false;
var isCheckPrefect = false;
var levelDetail = {}

function startlevel(levelNum) {

	stage.addChild(pauseBtn);
	isInitRotation = false;
	isGamePause = false;
	isLevelStart = true;
	mapLevel = clone(level[levelNum]);
	currentLevel = levelNum;
	drawLevel(mapLevel);
	levelDetail = clone(mapLevel[mapLevel.length - 1]);
	prefecttext.isPrefect = true;
	stage.addChild(perfectContainer);
	drawPerfectNumText(levelDetail.prefect);
	objSpeedR = levelDetail.objSpeedR || Math.PI / 60;
	if (!mapLevel[0].mode) {
		obj.texture = PIXI.Texture.fromImage('img/duet' + quality + '.png');
	} else if (mapLevel[0].mode == "trio") {
		obj.texture = PIXI.Texture.fromImage('img/trio' + quality + '.png');
	} else {
		obj.texture = PIXI.Texture.fromImage('img/duet' + quality + '.png');
	}
	if (isOpenSoundEffect) {
		ion.sound.play(mapLevel[0].text.split(".")[1]);
	}
}

function drawLevel(levelMap) {
	for (var i = 0; i < levelMap.length - 1; i++) {
		levelMap[i].prototype = defaultProperty;
		var graphic = new PIXI.Graphics();
		if (levelMap[i].shape == "rect") {
			graphic.lineStyle(0, levelMap[i].color || levelMap[i].prototype.color, 1);
			graphic.beginFill(levelMap[i].color || levelMap[i].prototype.color, 1);
			//_______________________绘图位置
			graphic.drawRect(-levelMap[i].width / quality / 2, -levelMap[i].height / quality / 2, levelMap[i].width / quality, levelMap[i].height / quality);
			//添加特殊动作
			if (levelMap[i].special) {
				graphic.special = levelMap[i].special;
			}

			levelGraphics.push(graphic);
		} else if (levelMap[i].shape == "word") {
			var text = new PIXI.Text(eval(levelMap[i].text), {
				font: 60 / quality + 'px 微软雅黑',
				fill: '#ffffff',
				stroke: '#ffffff',
				strokeThickness: 0,
				align: 'center'
			});
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			text.x = levelMap[i].x + marginLeft;
			text.y = levelMap[i].y;
			text.alpha = 0;
			stage.addChild(text);
			levelGraphics.push(text);
			continue;
		}
		graphic.x = levelMap[i].x + marginLeft / quality || levelMap[i].prototype.x / quality;
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
	showPrefect = false;
	stage.removeChild(prefecttext);
	stage.removeChild(perfectContainer);
}

function isTouch(graphic) {
	var x = objInitX + marginLeft;
	var y = obj.position.y;
	var angle = Math.PI - obj.rotation;
	if (!mapLevel[0].mode) {
		var x1 = x + Math.cos(angle) * (circleBackWidth >> 1);
		var y1 = y - Math.sin(angle) * (circleBackWidth >> 1);
		var x2 = x + Math.cos(angle - Math.PI) * (circleBackWidth >> 1);
		var y2 = y - Math.sin(angle - Math.PI) * (circleBackWidth >> 1);
		return pixInGraph(x1, y1, graphic)||pixInGraph(x2, y2, graphic);
	} else if (mapLevel[0].mode == "trio") {
		var x1 = x + Math.cos(angle-Math.PI/2) * (circleBackWidth >> 1);
		var y1 = y - Math.sin(angle-Math.PI/2) * (circleBackWidth >> 1);
		var x2 = x + Math.cos(angle - Math.PI*7/6) * (circleBackWidth >> 1);
		var y2 = y - Math.sin(angle - Math.PI*7/6) * (circleBackWidth >> 1);
		var x3 = x + Math.cos(angle + Math.PI/6) * (circleBackWidth >> 1);
		var y3 = y - Math.sin(angle + Math.PI/6) * (circleBackWidth >> 1);
		return pixInGraph(x1, y1, graphic)||pixInGraph(x2, y2, graphic)||pixInGraph(x3, y3, graphic);
	} else {
		var x1 = x + Math.cos(angle) * (circleBackWidth >> 1);
		var y1 = y - Math.sin(angle) * (circleBackWidth >> 1);
		var x2 = x + Math.cos(angle - Math.PI) * (circleBackWidth >> 1);
		var y2 = y - Math.sin(angle - Math.PI) * (circleBackWidth >> 1);
		return pixInGraph(x1, y1, graphic)||pixInGraph(x2, y2, graphic);
	}
	
}

function pixInGraph(xp, yp, graph) {
	if (graph.rotation == 0) {
		x = graph.x - (graph.width / 2);
		y = graph.y - (graph.height / 2);
		h = graph.height;
		w = graph.width;
		if (xp > x && xp < x + w && yp > y && yp < y + h) {
			return true;
		}
		return false;
	}else{
		var x = objInitX + marginLeft;
		var y = obj.position.y;
		var angle = Math.PI - obj.rotation;
		var arr = getFourPoint(graph);
		var x1 = x + Math.cos(angle) * (circleBackWidth >> 1);
		var y1 = y - Math.sin(angle) * (circleBackWidth >> 1);
		//console.log(arr)
		var side1 = getDistance({
			x: x1,
			y: y1
		}, arr[0]);
		var side2 = getDistance({
			x: x1,
			y: y1
		}, arr[1]);
		var side3 = getDistance({
			x: x1,
			y: y1
		}, arr[2]);
		var side4 = getDistance({
			x: x1,
			y: y1
		}, arr[3]);
		u1 = (side1 + side2 + graph.height / quality) / 2;
		u2 = (side2 + side3 + graph.width / quality) / 2;
		u3 = (side3 + side4 + graph.height / quality) / 2;
		u4 = (side1 + side4 + graph.width / quality) / 2;
		area1 = Math.sqrt(u1 * (u1 - side1) * (u1 - side2) * (u1 - graph.height / quality));
		area2 = Math.sqrt(u2 * (u2 - side2) * (u2 - side3) * (u2 - graph.width / quality));
		area3 = Math.sqrt(u3 * (u3 - side3) * (u3 - side4) * (u3 - graph.height / quality));
		area4 = Math.sqrt(u4 * (u4 - side4) * (u4 - side1) * (u4 - graph.width / quality));
		if (area1 + area2 + area3 + area4 - graph.height * graph.width / quality / quality < 0.01) {
			return true;
		}else{
			return false;
		}
	}

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
		showPrefect = true;
		stage.addChild(prefecttext);
		prefecttext.alpha=0;
		prefecttext.y = levelDetail.y;
		levelStatus[currentLevel] = PASS_PREFECT;
	} else {
		showPrefect = false;
		if (levelStatus[currentLevel] != PASS_PREFECT) {
			levelStatus[currentLevel] = PASS;
		}

	}
	setPassAndPerfect(levelStatus);
}

function getFourPoint(rect) {
	var x1, x2, x3, x4, y1, y2, y3, y4;
	var xx1, xx2, yy1, yy2;
	var angle = Math.PI - rect.rotation;
	xx1 = rect.x + (rect.width >> 1) * Math.cos(angle);
	xx2 = rect.x - (rect.width >> 1) * Math.cos(angle);
	yy1 = rect.y - (rect.width >> 1) * Math.sin(angle);
	yy2 = rect.y + (rect.width >> 1) * Math.sin(angle);
	x1 = xx1 + (rect.height >> 1) * Math.cos(angle + Math.PI / 2);
	x2 = xx1 + (rect.height >> 1) * Math.cos(angle - Math.PI / 2);
	x3 = xx2 + (rect.height >> 1) * Math.cos(angle - Math.PI / 2);
	x4 = xx2 + (rect.height >> 1) * Math.cos(angle + Math.PI / 2);
	y1 = yy1 - (rect.height >> 1) * Math.sin(angle + Math.PI / 2);
	y2 = yy1 - (rect.height >> 1) * Math.sin(angle - Math.PI / 2);
	y3 = yy2 - (rect.height >> 1) * Math.sin(angle - Math.PI / 2);
	y4 = yy2 - (rect.height >> 1) * Math.sin(angle + Math.PI / 2);
	//console.log(getDistance({x:x1,y:y1},{x:x4,y:y4}))
	return [{
		x: x1,
		y: y1
	}, {
		x: x2,
		y: y2
	}, {
		x: x3,
		y: y3
	}, {
		x: x4,
		y: y4
	}, {
		x: xx1,
		y: yy1
	}, {
		x: xx2,
		y: yy2
	}];
}

function getDistance(p1, p2) {
	return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
}