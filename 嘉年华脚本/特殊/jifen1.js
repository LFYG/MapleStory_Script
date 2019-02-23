﻿var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
	Array(2432392, 5),
	Array(4310088, 5),
	Array(4310030, 15),
	Array(2049135, 30),
	Array(2049300, 50),
	Array(2614007, 50), //突破十万 30%
	Array(2049136, 100),
	Array(5062010, 100), //终极魔方
	Array(2450081, 100),
	Array(2048300, 100), //银光潜能附加印章
	Array(2048301, 150), //金光
	Array(2048306, 350),  //附加潜能古卷
	Array(2431739, 200),  //抵用券1000
	Array(2046913, 800), // 宿命正义单手武器攻击力卷轴 100% // 为单手武器增加攻击力属性。
	Array(2046914, 800), // 宿命正义单手武器魔力卷轴 100% // 为单手武器增加魔法攻击力属性。
	Array(2046173, 800), // 宿命正义双手武器攻击力卷轴 100% // 为双手武器增加攻击力属性。
	Array(2046577, 800), // 宿命正义防具力量卷轴 100% // 为防具增加力量属性。
	Array(2046578, 800), // 宿命正义防具智力卷轴 100% // 为防具增加智力属性。
	Array(2046579, 800), // 宿命正义防具敏捷卷轴 100% // 为防具增加敏捷属性。
	Array(2046580, 800), // 宿命正义防具运气卷轴 100% // 为防具增加运气属性。
	Array(2046763, 800), // 宿命正义饰品力量卷轴 100% // 为饰品增加力量属性。
	Array(2046764, 800), // 宿命正义饰品智力卷轴 100% // 为饰品增加智力属性。
	Array(2046765, 800), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
	Array(2046766, 1000), // 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。
	Array(2613000, 1500), // 星火单手武器攻击力卷轴 - 为单手武器附加提升攻击力的属性。
	Array(2613001, 1500), // - 星火单手武器魔法力卷轴 - 为单手武器附加提升魔力的属性。
	Array(2612010, 1500) // - 星火双手武器攻击力卷轴 - 为双手武器附加提升攻击力的属性。
	//Array(2431993, 2000, "贝勒德饰品箱子"),
	//Array(2431988, 5000, "150级防具箱子#d[限时]#b")
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
		cm.sendOk("好吧，等你考虑清楚了再来找我。");
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#，你当前的积分为：#r"+cm.getPlayerPoints()+"#k点\r\n请选择你想要兑换的物品：\r\n\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				var extraName = "";
				if (itemlist[i][2]!=null) {
					extraName="("+itemlist[i][2]+")";
				}
				text += "#L" + i + "##i" + itemlist[i][0] + ":##t" + itemlist[i][0] + "#"+extraName+" - #r"+itemlist[i][1]+"#b 积分  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			/*
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b积分#k", 0, 0, 999999);*/
        } else if (a == 1) {
            selects = selection;
			buynum = 1;
            cm.sendYesNo("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "积分。");
        } else if (a == 2) {
			var itemid = itemlist[selects][0];
			var itemType = Math.floor(itemid/1000000);
			
			var costPoints = buynum * itemlist[selects][1];
            if (cm.getPlayerPoints()>=costPoints) {
				if (cm.getSpace(itemType)<1) {
					cm.sendOk("兑换失败，包裹空间不足！");
					cm.dispose();
					return;
				}
                cm.gainPlayerPoints(-costPoints);
				cm.gainItem(itemlist[selects][0], buynum);
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的积分。");
                cm.dispose();
            }
        }
    }//mode
}//f