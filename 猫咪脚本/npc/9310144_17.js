var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
			//cm.sendOk("#d通知：随身服务将在15号涨价，由原先的3/天、80/月、500/年改为10/天、240/月、1200/年。\r\n功能改动：每日消费购买点卷改为领取点卷，将会增加专属打抵用卷副本。每日领取专署武器祝福油x100，防具祝福油x100. 每日抽奖包x5. 更有神装租借等等会逐步开放。");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			//rmb = cm.getPlayer().updateRMB();
                        var selStr = "#b请选择购买天数：#n#k\r\n";
                        selStr +="\r\n  - #e#r您当前赞助充值金额为 #d" + cm.getPlayer().getRMB() + "#k#r #e元#n#k\r\n";
                        selStr +="       #d您当前的点卷为：#r" + cm.getPlayer().getCSPoints(1) + " #d点#k\r\n\r\n\r\n";
			selStr +="#L2##b"+aaa+" 超级实惠理财服务30万点卷/100/月[详情点击查看]#l#k\r\n\r\n";
			selStr +="#L1##b"+aaa+" 超级实惠理财服务9万点卷/30块/周[详情点击查看]#l#k\r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #e#d超级实惠理财服务一周权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 90000点卷/1周#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您9万点卷，并且分7天返还9万点卷30天内每天享有三倍经验以及双倍爆率，并且7天内会返还您70个高级神奇魔方、大师级神奇魔方、防暴卷轴、祝福卷轴。另可享有快速洗血。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #e#d超级实惠理财服务一月权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 300000点卷/1月#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您30万点卷，并且分30天返还30万点卷30天内每天享有三倍经验以及双倍爆率，并且30天内会返还您300个高级神奇魔方、大师级神奇魔方、防暴卷轴、祝福卷轴。另可享有快速洗血。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #e#d超级实惠理财服务三月权：#n#k\r\n\r\n- #e#r提示:#k#n  #r理财神秘盒子 780000点卷/1月#k\r\n\r\n- #e#d服务特权：#n#k\r\n\t\t#b拥有全服上线提示、独特聊天颜色。\r\n- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您78万点卷，并且分90天返还90万点卷30天内每天享有三倍经验以及双倍爆率，并且30天内会返还您300个高级神奇魔方、大师级神奇魔方、防暴卷轴、祝福卷轴。另可享有快速洗血。还可以领取每日金币\r\n\r\n- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("");	
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 90000) {
			cm.gainItem(2430865,1,7);
			cm.gainNX(1, -90000);
			cm.sendOk("恭喜您成功购买一周随身服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务一周权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一周理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
			cm.dispose();
				}
			} else if(typed==2){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 300000) {
			cm.gainItem(2430865,1,30);
			cm.gainNX(1, -300000);
			cm.sendOk("恭喜您成功购买一个月理财服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务一个月权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买一月理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的理财服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
			cm.dispose();
				}
			} else if(typed==3){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getPlayer().getCSPoints(1) >= 780000) {
			cm.gainItem(2430865,1,90);
			cm.gainNX(1, -780000);
			cm.sendOk("恭喜您成功购买三个月理财服务.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功购买理财服务三个月权。", 5120012);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜 " + cm.getChar().getName() + " 成功购买三个月理财服务.");
			cm.dispose();
                } else {
			cm.sendOk("失败：\r\n\r\n#r1). 您的随身服务未到期,无法重复办理.\r\n2). 充值金额未达到条件.\r\n3). 背包里消耗栏位已满,请清理.");
			cm.dispose();
				}
           }
      }
   }
}