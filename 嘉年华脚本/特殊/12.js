﻿var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e欢迎使用点卷购买物品，请选择您想要的：#n#k\r\n";
			selStr +="\t#b您当前点卷为：  #r" + cm.getPlayer().getCSPoints(1) + " #b 点#n#k\r\n\r\n";
			selStr +="- #e装备#n\r\n"
			selStr +="#L16##b"+aaa+" 回归戒指(增加经验) #b需要 #r5000#k #b点卷#l#k\r\n";
			selStr +="#L1##b"+aaa+" 购买战士 #r#t1122122##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L2##b"+aaa+" 购买法师 #r#t1122123##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L3##b"+aaa+" 购买弓手 #r#t1122124##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L4##b"+aaa+" 购买飞侠 #r#t1122125##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L5##b"+aaa+" 购买海盗 #r#t1122126##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L6##b"+aaa+" 购买美观 #r#t1142210##k #b需要 #r500000#k #b点卷#l#k\r\n"; 
			selStr +="#L7##b"+aaa+" 购买美观 #r#t1142178##k #b需要 #r300000#k #b点卷#l#k\r\n"; 
			/*selStr +="#L8##b"+aaa+" 购全职 #r#t1132245##k #b需要 #r1500000#k #b点卷#l#k\r\n"; 
			selStr +="#L9##b"+aaa+" 购全职 #r#t1132246##k #b需要 #r3000000#k #b点卷#l#k\r\n";
			selStr +="#L10##b"+aaa+" 购全职 #r#t1122266##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L11##b"+aaa+" 购全职 #r#t1122267##k #b需要 #r1200000#k #b点卷#l#k\r\n";
			selStr +="#L12##b"+aaa+" 购全职 #r#t1032222##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L13##b"+aaa+" 购全职 #r#t1032223##k #b需要 #r1500000#k #b点卷#l#k\r\n";
			selStr +="#L14##b"+aaa+" 购全职 #r#t1113074##k #b需要 #r1000000#k #b点卷#l#k\r\n";
			selStr +="#L15##b"+aaa+" 购全职 #r#t1113075##k #b需要 #r1500000#k #b点卷#l#k\r\n";*/
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("确定购买 #r#t1122122##k 将会使用掉您 #r2000000#k 点卷. 您将获得 #r攻击力50 防御20 魔防 20 #k战士 #t1122122#。");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("确定购买 #r#t1122123##k 将会使用掉您 #r2000000#k 点卷. 您将获得 #r魔法力50 防御20 魔防 20 #k法师 #t1122123#。");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("确定购买 #r#t1122124##k 将会使用掉您 #r2000000#k 点卷. 您将获得 #r攻击力50 防御20 魔防 20 #k弓手 #t1122124#。");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("确定购买 #r#t1122125##k 将会使用掉您 #r2000000#k 点卷. 您将获得 #r攻击力50 防御20 魔防 20 #k飞侠 #t1122125#。");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("确定购买 #r#t1122126##k 将会使用掉您 #r2000000#k 点卷. 您将获得 #r攻击力50 防御20 魔防 20 #k海盗 #t1122126#。");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("确定购买 #r#t1142210##k 将会使用掉您 #r500000#k 点卷. 您将获得 #r全属性+7 防御魔防+8#k 的 #t1142210#。");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("确定购买 #r#t1142178##k 将会使用掉您 #r300000#k 点卷. 您将获得 #r全属性+5 移动+7 跳跃+3#k 的 #t1142178#。");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("确定购买 #r#t1132245##k 将会使用掉您 #r1500000#k 点卷. 您将获得 #r全属性+30 攻击魔攻+20#k 的 #t1132245#。");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("确定购买 #r#t1132246##k 将会使用掉您 #r3000000#k 点卷. 您将获得 #r全属性+60 攻击魔攻+35 防御魔防+100#k 的 #t1132246#。");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("确定购买 #r#t1122266##k 将会使用掉您 #r1000000#k 点卷. 您将获得 #r全属性+20 攻击魔攻+3#k 的 #t1122266#。");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("确定购买 #r#t1122267##k 将会使用掉您 #r1200000#k 点卷. 您将获得 #r全属性+28 攻击魔攻+5#k 的 #t1122267#。");
						} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("确定购买 #r#t1032222##k 将会使用掉您 #r1000000#k 点卷. 您将获得 #r全属性+12 攻击魔攻+5#k 的 #t1032222#。");
						} else if (selection == 13) {
				typed=13;
				cm.sendYesNo("确定购买 #r#t1032223##k 将会使用掉您 #r1500000#k 点卷. 您将获得 #r全属性+15 攻击魔攻+9#k 的 #t1032223#。");
						} else if (selection == 14) {
				typed=14;
				cm.sendYesNo("确定购买 #r#t1113074##k 将会使用掉您 #r1000000#k 点卷. 您将获得 #r全属性+8 攻击魔攻+5#k 的 #t1113074#。");
						} else if (selection == 15) {
				typed=15;
				cm.sendYesNo("确定购买 #r#t1113075##k 将会使用掉您 #r1500000#k 点卷. 您将获得 #r全属性+10 攻击魔攻+8#k 的 #t1113075#。");
						} else if (selection == 16) {
				typed=16;
				cm.sendYesNo("确定购买 回归戒指? 将会使用掉您 #r5000#k 点卷.");
						} else if (selection == 17) {
				typed=17;
				cm.sendYesNo("");
						} else if (selection == 18) {
				typed=18;
				cm.sendYesNo("");
						} else if (selection == 19) {
				typed=19;
				cm.sendYesNo("");
						} else if (selection == 20) {
				typed=20;
				cm.sendYesNo("");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayer().getCSPoints(1) >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-2000000);
			cm.gainItem(1122122, 1);
			cm.sendOk("恭喜您成功购买#t1122122#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买战士土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayer().getCSPoints(1) >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-2000000);
			cm.gainItem(1122123, 1);
			cm.sendOk("恭喜您成功购买#t1122123#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买法师土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayer().getCSPoints(1) >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-2000000);
			cm.gainItem(1122124, 1);
			cm.sendOk("恭喜您成功购买#t1122123#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买弓手土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayer().getCSPoints(1) >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-2000000);
			cm.gainItem(1122125, 1);
			cm.sendOk("恭喜您成功购买#t1122125#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买飞侠土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayer().getCSPoints(1) >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-2000000);
			cm.gainItem(1122126, 1);
			cm.sendOk("恭喜您成功购买#t1122126#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买土豪心一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购海盗土豪心一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayer().getCSPoints(1) >= 500000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-500000);
			cm.gainItem(1142210, 1);
			cm.sendOk("恭喜您成功购买#t1142210#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买王座收藏家一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买王座收藏家一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayer().getCSPoints(1) >= 300000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-300000);
			cm.gainItem(1142178, 1);
			cm.sendOk("恭喜您成功购买#t1142178#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买冒险岛形象大使一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买冒险岛形象大使一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayer().getCSPoints(1) >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1500000);
			cm.gainItem(1132245, 1);
			cm.sendOk("恭喜您成功购买#t1132245#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印腰带一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买高级贝勒德刻印腰带一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayer().getCSPoints(1) >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-3000000);
			cm.gainItem(1132246, 1);
			cm.sendOk("恭喜您成功购买#t1132246#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德刻印腰带一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买最高级贝勒德刻印腰带一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayer().getCSPoints(1) >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1000000);
			cm.gainItem(1122266, 1);
			cm.sendOk("恭喜您成功购买#t1122266#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德刻印吊坠一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买高级贝勒德刻印吊坠一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayer().getCSPoints(1) >= 1200000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1200000);
			cm.gainItem(1122267, 1);
			cm.sendOk("恭喜您成功购买#t1122267#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德刻印吊坠一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买最高级贝勒德刻印吊坠一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==12){
                if (cm.getPlayer().getCSPoints(1) >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1000000);
			cm.gainItem(1032222, 1);
			cm.sendOk("恭喜您成功购买#t1032222#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德耳环一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买高级贝勒德耳环一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==13){
                if (cm.getPlayer().getCSPoints(1) >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1500000);
			cm.gainItem(1032223, 1);
			cm.sendOk("恭喜您成功购买#t1032223#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德耳环一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买最高级贝勒德耳环一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==14){
                if (cm.getPlayer().getCSPoints(1) >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1000000);
			cm.gainItem(1113074, 1);
			cm.sendOk("恭喜您成功购买#t1113074#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买高级贝勒德戒指一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买高级贝勒德戒指一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==15){
                if (cm.getPlayer().getCSPoints(1) >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-1500000);
			cm.gainItem(1113075, 1);
			cm.sendOk("恭喜您成功购买#t1113075#.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买最高级贝勒德戒指一个。", 5120012);
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜 " + cm.getChar().getName() + " 用点卷购买最高级贝勒德戒指一个.");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
			}else if(typed==16){   // WELCOME特效。
                if (cm.getPlayer().getCSPoints(1) >= 5000 && cm.getSpace(1) >= 1) {
			cm.gainNX(-5000);
			cm.gainItem(1112918,1,2);
			cm.sendOk("恭喜您成功购买");
			cm.worldSpouseMessage(0x20, "『土豪商城』 : 恭喜玩家 " + cm.getChar().getName() + " 花了 5000点卷 在土豪商城买了回归戒指X1 2天权");
			cm.dispose();
				} else {
			cm.sendOk("购买失败：\r\n\r\n#r1). 当前点卷未达到条件.\r\n2). 背包装备栏位已满,请清理.");
			cm.dispose();
				}
           }
		}
	  }
	}