var quality=1;

var scale=window.innerHeight/1600;
var btnWidth=window.innerWidth/scale/2/quality;

var marginLeft=(window.innerWidth/scale/quality-900/quality)/2

var sceneX=900/quality;
var sceneY=1600/quality;
var clockwise=0;
var leftDown=false;
var rightDown=false;
var geminiContainerWidth=540/quality;
var circleBackWidth=460/quality;
var ballWidth=80/quality;
var timeFps=180;
//游戏开始时两园的初始位置角度是否为0
var isInitRotation=false;
//圆盘归位时间
var initRotationTime=60;
//
var isOpenSoundEffect=true;

var objInitX=450/quality;
var objInitY=800/quality;
//是否显示菜单的状态，0为稳定状态，1为正在开启，-1为正在关闭
var showMenu=0;
//显示完美通关文字
var showPrefect=false;
//反转是否开启
var isReverse=1;

var isGamePause=false;