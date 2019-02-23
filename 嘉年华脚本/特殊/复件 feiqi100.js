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
        Array(5062002, 50), //高级神奇魔方
	Array(5062010, 80), //终极魔方
        Array(5062500, 100), //大师附加魔方
	Array(2450081, 100),
	Array(2048300, 100), //银光潜能附加印章
	Array(2048301, 150), //金光
	Array(2048306, 350), //附加潜能古卷
	Array(3010070, 500), //巨无霸品克冰
	Array(1702581, 900), //三色蛋糕串串
        Array(1702561, 900), //叉子上的蛋糕
        Array(1102723, 1000), //光明天使羽翼
        Array(1102724, 1000), //黑暗天使羽翼
	Array(2046913, 1200), // 宿命正义单手武器攻击力卷轴 100% // 为单手武器增加攻击力属性。
	Array(2046914, 1200), // 宿命正义单手武器魔力卷轴 100% // 为单手武器增加魔法攻击力属性。
	Array(2613000, 2500), // 星火单手武器攻击力卷轴 - 为单手武器附加提升攻击力的属性。
	Array(2613001, 2500), // - 星火单手武器魔法力卷轴 - 为单手武器附加提升魔力的属性。
	Array(2431993, 5000) // - 贝勒德饰品箱子 - 包含贝勒德饰品装备
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
				if (i != 0 && (i+1) % 100 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			/*
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "个#b雪花币#k", 0, 0, 999999);*/
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