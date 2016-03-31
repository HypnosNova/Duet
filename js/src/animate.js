function animate() {
	requestAnimationFrame(animate);
	if (!isGamePause) {
		if (clockwise != 0 && isLevelStart && isInitRotation) {
			obj.rotation += Math.PI / 60 * clockwise * isReverse;
		}
		//游戏开始
		if (isLevelStart) {
			perfectContainer.rotation+=0.03;
			perfectNumText.rotation-=0.03;
			//如果游戏一开始没有将圆盘归位，则先归位
			if(!isInitRotation){
				var numCircle=parseInt(obj.rotation/Math.PI/2);//获取圆周数
				var absRotation=obj.rotation-(numCircle*Math.PI*2);//转动的绝对角度
				if(absRotation<0){
					absRotation+=Math.PI*2;
				}
				if(Math.abs(absRotation)<=Math.PI / (initRotationTime>>2)){
					obj.rotation=0;
					isInitRotation=true;
				}else if(Math.abs(absRotation-Math.PI)<=Math.PI / (initRotationTime>>2)){
					obj.rotation=Math.PI;
					isInitRotation=true;
				}else if((absRotation<=(Math.PI/2)&&absRotation>=0)||(absRotation>=Math.PI&&absRotation<=Math.PI*1.5)){
					obj.rotation-=Math.PI / initRotationTime;
				}else if((absRotation>=(Math.PI/2)&&absRotation<=Math.PI)||(absRotation<=Math.PI*2&&absRotation>=Math.PI*1.5)){
					obj.rotation+=Math.PI / initRotationTime;
				}else if((absRotation>=(-Math.PI/2)&&absRotation<=0)||(absRotation<=-Math.PI&&absRotation>=-Math.PI*1.5)){
					obj.rotation+=Math.PI / initRotationTime;
				}else if((absRotation<=(-Math.PI/2)&&absRotation>=-Math.PI)||(absRotation>=-2*Math.PI&&absRotation<=-Math.PI*1.5)){
					obj.rotation-=Math.PI / initRotationTime;
				}else{
					isInitRotation=true;
				}
			}
			//检查是否已经通关，如果还没有通关
			if (!isCheckPrefect) {
				levelDetail.passTime--;
				//检查是否通关
				if (levelDetail.passTime <= 0 && !showPrefect) {
					checkPrefect();
					if(!showPrefect){
						clearLevel();
						startGameLevel(++currentLevel);
					}else{
						ion.sound.play("prefect");
					}
				}
				for (var i = 0; i < mapLevel.length - 1; i++) {
					//3个不同速度
					levelGraphics[i].x += mapLevel[i].speedX / quality || mapLevel[i].prototype.speedX / quality;
					levelGraphics[i].y += mapLevel[i].speedY / quality || mapLevel[i].prototype.speedY / quality;
					levelGraphics[i].rotation += mapLevel[i].speedR || mapLevel[i].prototype.speedR;
					//是否存在特殊动作
					if(levelGraphics[i].special){
						levelGraphics[i].special();
					}
					
					if (levelGraphics[i].y > sceneY / 3 && mapLevel[i].shape != "word") {
						if (isTouch(levelGraphics[i])) {
							if(isOpenSoundEffect)ion.sound.play("touch");
							restartLevel();
							break;
						}
					}
					if (mapLevel[i].shape == "word") {
						//console.log(levelGraphics[i].alpha);
						if (mapLevel[i].timeStart > 0) {
							mapLevel[i].timeStart--;
						} else {
							if (mapLevel[i].timeShow > 0) {
								mapLevel[i].timeShow--;
								levelGraphics[i].alpha += 0.02;
							} else {
								if (mapLevel[i].timeHold > 0) {
									mapLevel[i].timeHold--;
								} else {
									if (mapLevel[i].timeHide > 0) {
										mapLevel[i].timeHide--;
										levelGraphics[i].alpha -= 0.01;
									}
								}
							}

						}
					}
				}
			} else {
				if (levelDetail.timeShow > 0) {
					levelDetail.timeShow--;
					prefecttext.alpha += 0.02;
				} else {
					if (levelDetail.timeHold > 0) {
						levelDetail.timeHold--;
					} else {
						if (levelDetail.timeHide > 0) {
							levelDetail.timeHide--;
							prefecttext.alpha -= 0.01;
						}
					}
				}
			}
		} else {
			obj.rotation += Math.PI / 60 * isReverse;
			if (showMenu == 1) {
				optionBtn.alpha -= 0.025;
				optionBtn.timeChange--;
				if (optionBtn.timeChange == 0) {
					showMenu = 0;
					optionBtn.timeChange = 40;
				}
				startBtn.alpha -= 0.025;
				startBtn.timeChange--;
				if (startBtn.timeChange == 0) {
					showMenu = 0;
					startBtn.timeChange = 40;
				}
			}
			if (showMenu == -1) {
				optionBtn.alpha += 0.025;
				optionBtn.timeChange--;
				if (optionBtn.timeChange == 0) {
					showMenu = 0;
					optionBtn.timeChange = 40;
				}
				startBtn.alpha += 0.025;
				startBtn.timeChange--;
				if (startBtn.timeChange == 0) {
					showMenu = 0;
					startBtn.timeChange = 40;
				}
			}
		}
		if (showPrefect) {
			if (levelDetail.timeShow > 0) {
				levelDetail.timeShow--;
				prefecttext.alpha += 0.02;
			} else {
				if (levelDetail.timeHold > 0) {
					levelDetail.timeHold--;
				} else {
					if (levelDetail.timeHide > 0) {
						levelDetail.timeHide--;
						prefecttext.alpha -= 0.01;
					}else{
						clearLevel();
						startGameLevel(++currentLevel);
					}
				}
			}
		}
	}
	renderer.render(stage);
}
animate();
///startlevel(0);
