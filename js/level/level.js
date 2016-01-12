var defaultProperty = {
	color: 0xFFFFFF,
	x: 0,
	y: 0,
	speedX: 0,
	speedY: 8,
	speedR: 0,
	rotation: 0
}

var level = [
	//--------------------------------------------------level 1
	[{
		shape: "word",
		text: languageMap.niceToMeetYou,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1060
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 460,
		y: -2060
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -2860
	},{
		shape: "rect",
		width: 80,
		height: 480,
		x: 450,
		y: -4020
	},{
		prefect:2,
		passTime:730,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 2
	[{
		shape: "word",
		text: languageMap.thinkCircle,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1060
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -1660
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2260
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 450,
		y: -2860
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3360
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 140,
		y: -4360
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 760,
		y: -4360
	},{
		prefect:4,
		passTime:805,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 3
	[{
		shape: "word",
		text: languageMap.notDifficult,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1060
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2030
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3015
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3500
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3985
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4470
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4955
	},{
		prefect:1,
		passTime:880,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 4
	[{
		shape: "word",
		text: languageMap.neverGiveUp,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1060
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1530
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2040
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -2610
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3590
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 235,
		y: -4750
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 655,
		y: -5250
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 235,
		y: -5750
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 655,
		y: -6250
	},{
		prefect:2,
		passTime:1000,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 5
	[{
		shape: "word",
		text: languageMap.striveFor,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -1060
	},{
		shape: "rect",
		width: 280,
		height: 80,
		x: 450,
		y: -1510
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1960
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 300,
		y: -2540
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 700,
		y: -3040
	},{
		shape: "rect",
		width: 280,
		height: 80,
		x: 450,
		y: -3490
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3990
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4480
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4970
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -5460
	},{
		prefect:5,
		passTime:930,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 6
	[{
		shape: "word",
		text: languageMap.striveFor,
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -1060,
		speedR:Math.PI/60
	},{
		prefect:5,
		passTime:930,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}]

]