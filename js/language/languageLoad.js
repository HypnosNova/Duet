var currentLanguage = "chinese";
var languageMap = chinese;

function changeLanguage(languageName) {
	if (languageName == "chinese") {
		languageMap = chinese;
	} else if (languageName == "english") {
		languageMap = english;
	} else if (languageName == "tradition") {
		languageMap = tradition;
	}
	currentLanguage = languageName;
	reflashLanguage();
}

function reflashLanguage() {
	var switchArray = document.getElementsByClassName("switch");
	for (var i = 0; i < switchArray.length; i++) {
		if ($(switchArray[i]).hasClass("on")) {
			$(switchArray[i]).text(languageMap.open);
		} else {
			$(switchArray[i]).text(languageMap.close);
		}
	}
	$("#blackBackground").text(languageMap.switch);
	$("#changeBackground").text(languageMap.switch);
	$("#optionTitle").text(languageMap.option);
	$("#controllerD").text(languageMap.control);
	$("#reverseText").text(languageMap.reverseControl);
	$("#soundD").text(languageMap.audio);
	$("#backgroundMusicText").text(languageMap.backgroundMusic);
	$("#soundEffectText").text(languageMap.soundEffect);
	$("#imageD").text(languageMap.graphics);
	$("#changeBackgroundText").text(languageMap.switchBackground);
	$("#languageD").text(languageMap.language);
	$("#levelTitle").text(languageMap.level);
	$("#unknow").text(languageMap.unknow);
	$("#story").text(languageMap.story);
	$("#deny").text(languageMap.deny);
	$("#anger").text(languageMap.anger);
	$("#discuss").text(languageMap.discuss);
	$("#blackBackgroundText").text(languageMap.blackBackground);
	prefecttext = new PIXI.Text(languageMap.prefect, {
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
}
