var defaultProperty = {
	color: 0xffffff,
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
		x: 450,
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
		x: 130,
		y: -4360
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 770,
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
		text: "languageMap.thisWillFullOf",
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
	}],
	//-----------------------------------------------level 11
	[{
		shape: "word",
		text: "languageMap.butWelcomeIt",
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
		x: 270,
		y: -1000,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -1280,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -1840,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -2360,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -2640,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -3240,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -3520,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -4130,
		speedY:8,
		rotation:-Math.PI/2.7,
		speedR:Math.PI/50
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -4600,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -5100,
		speedY:8,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -5380,
		speedY:8,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -6000,
		speedY:8,
		speedR:-Math.PI/50,
		rotation:-Math.PI/20
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -6450,
		speedY:8,
	},{
		prefect:8,
		passTime:1050,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 12
	[{
		shape: "word",
		text: "languageMap.angryChoose",
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
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -1960,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -1960,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -2920,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3880,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -3880,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	},{
		prefect:4,
		passTime:750,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 13
	[{
		shape: "word",
		text: "languageMap.anyMod",
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
		x: 270,
		y: -1480,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -1480,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -2440,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -2440,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3400,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3400,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -4360,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -4360,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -5320,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -5320,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -6280,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -6280,
	},{
		prefect:5,
		passTime:1010,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 14
	[{
		shape: "word",
		text: "languageMap.dontLimit",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -1480,
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -1480,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -2440,
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -2440,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3400,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -3400,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -4360,
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -4360,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -5320,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -5320,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -6280,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -6280,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -7240,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -7240,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -8000,
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -8200,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		},
	},{
		prefect:6,
		passTime:1220,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 15
	[{
		shape: "word",
		text: "languageMap.helpShackle",
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
		x: 270,
		y: -1480
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -1480,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -2440
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -2440,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -3400,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -3400
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -4360
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -4360,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -5320
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -5320,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -5920
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -6200
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -7160,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -7160
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -8120,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -8120
	}, {
		prefect:9,
		passTime:1240,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 16
	[{
		shape: "word",
		text: "languageMap.cantGetFish",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -1000
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -1480
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -2440,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -2440
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -2985,
		speedR:-Math.PI/50,
		rotation:Math.PI/2
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -4020,
		special:function(){
			if(this.y>000&&this.y<960){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -3820
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -4350
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -4850
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -5400,
		speedR:-Math.PI/50,
		rotation:-Math.PI/2
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -5920
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -6440
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 630,
		y: -7020
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -8000,
		special:function(){
			if(this.y>200&&this.y<1160){
				this.y+=8;
			}
		}
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -8000
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 270,
		y: -8500
	}, {
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -8780
	}, {
		prefect:12,
		passTime:1350,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 17
	[{
		shape: "word",
		text: "languageMap.thisAlsoProveYou",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -880,
		rotation:-Math.PI/2,
		speedY:6,
		speedR:-Math.PI/240
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 80,
		y: -2220,
		rotation:Math.PI/2,
		speedY:6,
		speedR:Math.PI/240
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -3560,
		rotation:-Math.PI/2,
		speedY:6,
		speedR:-Math.PI/240
	}, {
		prefect:3,
		passTime:960,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 18
	[{
		shape: "word",
		text: "languageMap.youKnowSpilledWater",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -880,
		rotation:-Math.PI/2,
		speedY:6,
		speedR:-Math.PI/240
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 480,
		y: -1500,
		rotation:Math.PI/2,
		speedY:6,
		speedR:-Math.PI/60
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2020,
		speedY:6,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2400,
		speedY:6,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 480,
		y: -2820,
		rotation:Math.PI/4,
		speedY:6,
		speedR:-Math.PI/60
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3500,
		speedY:6,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -3880,
		speedY:6,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -4260,
		speedY:6,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 480,
		y: -4660,
		rotation:-Math.PI/4,
		speedY:6,
		speedR:Math.PI/60
	}, {
		prefect:4,
		passTime:1100,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 19
	[{
		shape: "word",
		text: "languageMap.youCantAvoid",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -880,
		speedY:7
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 120,
		y: -1170,
		speedY:7,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -1670,
		speedY:7,
		speedR:Math.PI/60
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -2200,
		speedY:7
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 780,
		y: -2490,
		speedY:7,
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 250,
		y: -3000,
		speedY:7
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 650,
		y: -3500,
		speedY:7
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -3950,
		speedY:7,
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -4400,
		speedY:7
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 780,
		y: -4690,
		speedY:7,
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 80,
		y: -5300,
		rotation:0,
		speedY:7,
		speedR:Math.PI/220
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -5900,
		speedY:7
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -6380,
		speedY:7
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 120,
		y: -6670,
		speedY:7,
	}, {
		prefect:9,
		passTime:1210,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 20
	[{
		shape: "word",
		text: "languageMap.acceptNow",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -1100,
		speedY:9
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 290,
		y: -1100,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<990){
				this.y+=4;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -2050,
		speedY:9
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 610,
		y: -2050,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<1100){
				this.y+=9;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 140,
		y: -2700,
		speedY:9
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 610,
		y: -2700,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<990){
				this.y+=4;
			}
		}
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -3350,
		rotation:Math.Pi/2,
		speedY:9,
		speedR:Math.PI/40
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -3900,
		rotation:0,
		speedY:9,
		speedR:-Math.PI/150
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -5000,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<1120){
				this.y+=9;
			}
		}
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -5000,
		speedY:9
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -5480,
		speedY:9
	}, {
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -5960,
		speedY:9
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -6500,
		speedY:9
	}, {
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -6980,
		speedY:9
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -7570,
		rotation:Math.PI/2,
		speedY:9,
		speedR:-Math.PI/150
	}, {
		prefect:10,
		passTime:1090,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		objSpeedR:Math.PI/50,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 21
	[{
		shape: "word",
		text: "languageMap.faceupToFailure",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -820,
		speedY:9
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -1300,
		speedY:9
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 600,
		y: -2100,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -2100,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<1000){
				this.y+=9;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 450,
		y: -2550,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -3000,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -3480,
		speedY:9
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -4100,
		rotation:0,
		speedY:9,
		speedR:-Math.PI/150
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -4650,
		rotation:0,
		speedY:9,
		speedR:Math.PI/50
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -5190,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -5480,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 630,
		y: -6480,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<1120){
				this.y+=9;
			}
		}
	},{
		shape: "rect",
		width: 240,
		height: 240,
		x: 270,
		y: -6480,
		speedY:9
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -7150,
		speedY:9,
		rotation:Math.PI/1.5,
		speedR:-Math.PI/50
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -7630,
		speedY:9
	},{
		shape: "rect",
		width: 240,
		height: 80,
		x: 760,
		y: -7920,
		speedY:9
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -8900,
		speedY:9,
		special:function(){
			if(this.y>200&&this.y<1120){
				this.y+=9;
			}
		}
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 300,
		y: -8900,
		speedY:9,
	}, {
		prefect:10,
		passTime:1220,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		objSpeedR:Math.PI/50,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}],
	//--------------------------------------------------level 23
	[{
		shape: "word",
		text: "languageMap.resistanceIsNotOnlyChoice",
		speedY:1,
		x:sceneX/2,
		y:sceneY/4,
		timeStart:40,
		timeShow:50,
		timeHold:200,
		timeHide:100
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -820,
		rotation:-Math.PI/3,
		speedR:-Math.PI/125,
		speedY:10
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -1470,
		rotation:Math.PI/2,
		speedR:Math.PI/50,
		speedY:10
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -2050,
		rotation:Math.PI/2,
		speedR:-Math.PI/50,
		speedY:10
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -2630,
		rotation:Math.PI/1.5,
		speedR:-Math.PI/50,
		speedY:10
	},{
		shape: "rect",
		width: 840,
		height: 80,
		x: 820,
		y: -3330,
		rotation:-Math.PI/3,
		speedR:-Math.PI/125,
		speedY:10
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -3980,
		rotation:Math.PI/1.5,
		speedR:Math.PI/50,
		speedY:10
	},{
		shape: "rect",
		width: 480,
		height: 80,
		x: 450,
		y: -4560,
		rotation:Math.PI/1.5,
		speedR:-Math.PI/50,
		speedY:10
	}, {
		prefect:4,
		passTime:660,
		speedY:1,
		x:sceneX/2,
		y:sceneY/12*5,
		rptation:Math.PI/3,
		objSpeedR:Math.PI/50,
		timeShow:50,
		timeHold:150,
		timeHide:100
	}]
]
