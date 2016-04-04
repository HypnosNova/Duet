const NOT_PASS = "0";
const PASS = "1";
const PASS_PREFECT = "2";
var levelStatus = [];
for (var i = 0; i < 100; i++) {
	levelStatus.push(NOT_PASS);
}

if (localStorage.levelStatus) {
	levelStatus = localStorage.levelStatus.split(",");
	console.log("111");
} else {
	localStorage.levelStatus = levelStatus;
	console.log("222");
}
console.log(levelStatus);

function setPassAndPerfect(levelStatus) {
	var arr = document.getElementsByClassName("levelBox");
	for (var i = 0; i < arr.length; i++) {
		if (levelStatus[i] == PASS) {
			$(arr[i]).addClass("passLevel");
		} else if (levelStatus[i] == PASS_PREFECT) {
			$(arr[i]).addClass("prefectLevel");
		}
	}
	localStorage.levelStatus = levelStatus;
}

setPassAndPerfect(levelStatus);