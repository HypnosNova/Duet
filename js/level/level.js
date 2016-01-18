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
		text: "languageMap.niceToMeetYou",
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
		text: "languageMap.thinkCircle",
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
		text: "languageMap.notDifficult",
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
		y: -1000
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1960
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2920
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3400
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -3880
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4360
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4840
	},{
		prefect:1,
		passTime:860,
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
		text: "languageMap.neverGiveUp",
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
		text: "languageMap.striveFor",
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
		text: "languageMap.striveFor",
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
		y: -880,
		speedY:6,
		speedR:Math.PI/60
	},{
		prefect:1,
		passTime:470,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 7
	[{
		shape: "word",
		text: "languageMap.beCareful",
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
		x: 280,
		y: -930,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -1220,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 620,
		y: -2250,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -2540,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3350,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 280,
		y: -3850,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -4140,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 280,
		y: -4950,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 280,
		y: -5430,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -5720,
		speedY:8,
	},{
		prefect:5,
		passTime:950,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 8
	[{
		shape: "word",
		text: "languageMap.believeYourScense",
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
		y: -880,
		speedY:6,
		speedR:-Math.PI/60
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -1620,
		speedY:6,
		speedR:Math.PI/60
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -2360,
		speedY:6,
		speedR:-Math.PI/60
	},{
		prefect:3,
		passTime:720,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 9
	[{
		shape: "word",
		text: "languageMap.alwaysChange",
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
		x: 630,
		y: -1000,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -1480,
		speedY:8,
	}, {
		shape: "rect",
		width: 230,
		height: 230,
		x: 275,
		y: -1980,
		speedY:8,
	}, {
		shape: "rect",
		width: 230,
		height: 230,
		x: 625,
		y: -2500,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3000,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3480,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3960,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -4440,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -4730,
		speedY:8,
	},{
		prefect:4,
		passTime:820,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//-----------------------------------------------level 10
	[{
		shape: "word",
		text: "languageMap.dontDeny",
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
		x: 630,
		y: -1000,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -1280,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -1850,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -2130,
		speedY:8,
	}, {
		shape: "rect",
		width: 230,
		height: 230,
		x: 625,
		y: -2680,
		speedY:8,
	}, {
		shape: "rect",
		width: 230,
		height: 230,
		x: 275,
		y: -3200,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -3750,
		rotation:-Math.PI/2,
		speedY:8,
		speedR:Math.PI/50
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -4250,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -4530,
		speedY:8,
	},{
		prefect:5,
		passTime:810,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}]

]