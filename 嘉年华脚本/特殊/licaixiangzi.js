/*
	金利奇
	祖母绿抽奖宝箱购买NPC
*/

var status = -1;
var cost = 3000;
function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("瞧一瞧看一看，老夫从海外带回来的珍宝，一个只要#r"+cost+"点卷#k，能够获得#b强化卷、蓝调、必成卷、风暴套装、150级武器.稀有椅子等高级物品#v3010519##v3010520##v3012011##v3010621##r各种图腾#k，打开宝箱就送你#r5个#k#b运动会币#k，运动会币能兑换#b必成卷轴#k和#b运动会装备#k哦！！！买个玩玩吧，小兄弟！ \r\n#L0##b买1个宝箱玩玩吧#k#l\r\n#L1##b买10个宝箱玩玩吧#k#l\r\n#L2##r老板，我要100个！#k#l");
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayer().getCSPoints(1)>=cost) {
				cm.gainItem(2430070,1);
				cm.gainItem(4310030,5);
				cm.gainNX(1, -cost);
				cm.sendOk("宝贝已经到手，快打开看看有什么吧！")
			} else {
				cm.sendOk('喂喂，小兄弟，你好像没有这么多点卷噢！');
			}
		} else if (selection == 1) {
			if (cm.getPlayer().getCSPoints(1)>=cost*10) {
				cm.gainItem(2430070,10);
				cm.gainItem(4310030,50);
				cm.gainNX(1, -cost*10);
				cm.sendOk("嘿，拿10个去试试手气吧，祝你好运！")
			} else {
				cm.sendOk('喂喂，小兄弟，你好像没有这么多点卷噢！');
			}
		} else if (selection == 2) {
			if (cm.getPlayer().getCSPoints(1)>=cost*100) {
				cm.gainItem(2430070,100);
				cm.gainItem(4310030,500);
				cm.gainNX(1, -cost*100);
				cm.sendOk("好嘞，给你100个宝箱，祝你好运，小兄弟！！")
			} else {
				cm.sendOk('喂喂，小兄弟，你好像没有这么多点卷噢！');
			}
		}
       // cm.sendOk("送你10个金蛋,到包裹里看看吧!");
        cm.dispose();
    }
}