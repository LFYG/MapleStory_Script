
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(30, 60, 120, 180, 240,360,480,600,720,1080);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包30
					Array(1, 4310014, 1),
					Array(2, 4310014, 1),
					Array(3, 4310014, 1),
					Array(4, 4310014, 2),
					Array(5, 4310014, 2),
					Array(6, 4310014, 2),
					Array(7, 4310014, 2),
					Array(8, 4310014, 2),




					Array(1, 5072000, 2),

					Array(1, 2431738, 1),//500抵用券
					Array(1, 2000005, 10),//超级药水

					// 礼包60
					//Array(2, 4034232, 1),
					Array(2, 5072000, 5),
					Array(2, 4001713, 2),
					//Array(2, 2049002, 3),
					Array(2, 2000005, 100),//超级药水
					//Array(2, 5062009, 20),
					//Array(2, 2340000, 2),//祝福卷
					//Array(2, 2430069, 1),
					//Array(2, 2431739, 100),//
					//Array(2, 5062000, 15),//红魔方
					Array(2, 4310030, 5),
					Array(2, 4310036, 5),

					// 礼包120
					Array(3, 2049002, 2),
					//Array(3, 4034232, 1),
					Array(3, 5072000, 5),
					//Array(3, 5062009, 20),
                                       // Array(3, 2431740, 1),
					//Array(3, 5062002, 10),
					//Array(3, 5062000, 15),
					//Array(3, 2430069, 1),
					//Array(3, 2340000, 3),//祝福卷
					//Array(3, 5064000, 2),
					Array(3, 4310030, 10),
					Array(3, 4310036, 25),

                    // 礼包180
					//Array(4, 4001714, 30),
					Array(4, 2049002, 3),
					Array(4, 5072000, 5),
					Array(4, 5062002, 10),
					//Array(4, 5062000, 15),
					Array(4, 5064000, 2),
					//Array(4, 5062009, 20),
					//Array(4, 2049702, 1),
					//Array(4, 2430069, 1),
					//Array(4, 2340000, 5),//祝福卷
					//Array(4, 4310110, 2),//春节
					//Array(4, 2300000, 5),
					//Array(4, 2431741, 1),
					Array(4, 4310030, 20),
					Array(4, 4001839, 30),
					Array(4, 4310036, 30),
					//Array(4, 2049135, 1),
					//Array(4, 4310036, 50),

					// 礼包7 240
					//Array(5, 4001714, 50),
					Array(5, 2049002, 4),
					//Array(5, 3010073, 1),  //卡片
					//Array(5, 2049400, 5),
					//Array(5, 5072000, 2),
					//Array(5, 2431741, 1),
					Array(5, 2049702, 1),
					//Array(5, 2049301, 5),
					//Array(5, 2049122, 5),
					/*Array(5, 5062009, 10),
					Array(5, 5062500, 30),
					Array(4, 5062500, 30),
					Array(3, 5062500, 20),
					Array(2, 5062500, 10),*/
					Array(5, 5062002, 5),
					//Array(5, 5064000, 5),
					//Array(5, 2340000, 5),//祝福卷
					//Array(5, 2430069, 1),
					//Array(5, 4310110, 3), 
					//Array(5, 2300000, 8),
					Array(5, 4310030, 20),
					Array(5, 4310036, 30),//
					Array(5, 4001839, 30),
					//Array(5, 4001832, 10),
					// 礼包8 600
					Array(8, 2049400, 6),
					Array(8, 4001839, 30),//xingxing
					//Array(8, 4310110, 5),//chunjieb
					//Array(8, 2049323, 2),//wusun
					Array(8, 2049122, 2),
					//Array(8, 2049752, 1),
					Array(8, 2049002, 8),//baiyi
					//Array(8, 4001714, 2),//Sqianneng
					//Array(8, 4001714, 5),//dingjujin
					Array(8, 2340000, 2),//祝福卷
					Array(8, 5064000, 2),//fangbao
					Array(8, 5062009, 10),
					Array(8, 5062500, 15),//dashimofang
					Array(8, 5062002, 10),//高级生气魔方 
					//Array(8, 2430069, 1),//组墨绿箱子
					//Array(8, 2431743, 2),//抵用卷
					Array(8, 4001832, 100),
					//Array(8, 4000463, 6),
					//480
                                        Array(7, 2049002, 8),
					//Array(7, 2049400, 6),
					//Array(7, 5072000, 5),
					//Array(7, 2431741, 2),
					Array(7, 2049702, 2),//A
					Array(7, 2049301, 10),
					Array(7, 2049122, 2),
					Array(7, 5062009, 5),
					Array(7, 5062500, 10),
					//Array(7, 5062002, 20),
					Array(7, 5064000, 2),
					Array(7, 2340000, 2),//祝福卷
					//Array(7, 2430069, 1),
					//Array(7, 4310110, 3), 
					//Array(7, 2300000, 8),
					Array(7, 4310030, 30),
					Array(7, 4310036, 30),//
					Array(7, 4001832, 100),
//360
                                        Array(6, 2049002, 5),
					Array(6, 2049400, 5),
					//Array(6, 5072000, 5),
					//Array(6, 2431743, 1),
					Array(6, 2049702, 1),
					Array(6, 2049301, 5),
					//Array(6, 2049122, 5),
					//Array(6, 5062009, 5),
					//Array(6, 5062500, 5),
					Array(6, 5062002, 10),
					Array(6, 5064000, 2),
					Array(6, 2340000, 2),//祝福卷
					//Array(6, 2430069, 1),
					//Array(6, 4310110, 3), 
					//Array(6, 2300000, 8),
					Array(6, 4310030, 20),
					Array(6, 4310036, 30),//
					Array(6, 4001832, 100),
//720
					Array(9, 5062009, 15),
					Array(9, 5062500, 10),
					Array(9, 5062002, 10),
					Array(9, 4001839, 100),
					Array(9, 2340000, 5),//祝福卷
					Array(9, 5064000, 3),//fangbao
                    Array(9, 2049752, 2),
					Array(9, 2049122, 5),
					Array(9, 2049028, 2),//组墨绿箱子
					//Array(9, 2431741, 3),//抵用卷
					Array(9, 2460003, 10),
					Array(9, 4001714, 5),//dingjujin
					Array(9, 4001832, 200),
//1080
					Array(10, 5062009, 20),
					Array(10, 5062500, 20),
					Array(10, 5062002, 20),
					Array(10, 2431046, 1),
					Array(10, 4001832, 300),
                    Array(10, 2460003, 20),
					Array(10, 5062000, 20),//组墨绿箱子

					//Array(10, 2431741, 3),//抵用卷
					Array(1, 4001839, 30),
					Array(2, 4001839, 30),
					Array(3, 4001839, 30),
					
					Array(6, 4001839, 30),
					Array(7, 4001839, 30),
					
					Array(10, 4001839, 100),
					Array(10, 5537000, 20),
					Array(10, 5743003, 20)
					//Array(10, 4001714, 2)    //dingjujin
					);

function start() {
	if (cm.haveItem(4001443,1)){
		var A = 20;
	}else{
		var A = 0;
	}
	if (cm.haveItem(4001440,1)){
		//A = A+1200;
	}
	var time = cm.getOnlineTime()+A;
	if (cm.getDaysPQLog("自动领取",7)!=0){
	for (var i = 0;i<condition.length ;i++ ){
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			//cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}else if (cm.getEventCount("在线礼包" + (condition.length)) > 0) {
				cm.playerMessage(5, "[自动领取提示]:今日在线奖励已经全部领取");
				cm.dispose();
				break;
		}else if (cm.getEventCount("在线礼包" + (i+1)) > 0) {
			//cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			continue;
		}else if (time < condition[i]) {
			//cm.sendOk("在线时间不足，无法领取。");
			cm.dispose();
			break;
		}else{
			var rewardlist = new Array();
			for (var a = 0; a < reward.length; a++) {
				if (reward[a][0] == (i+1)) {
				rewardlist.push(new Array(reward[a][1], reward[a][2]));
				}
			}
			if (!cm.canHoldSlots(rewardlist.length)){
				cm.playerMessage(5, "[自动领取提示]:当前背包空间不足,请每个栏至少保留"+rewardlist.length+"个格子");
				cm.dispose();
				break;
			}else{
				for (var b = 0; b < rewardlist.length; b++) {
					cm.gainItem(rewardlist[b][0], rewardlist[b][1]);
				}
				cm.setEventCount("在线礼包" + (i+1));
				cm.playerMessage(5, "[自动领取提示]:今日在线奖励成功自动领取" + condition[i] + " 分钟奖励。");
				cm.worldSpouseMessage(0x20,"『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 自动领取了在线 " + condition[i] + " 分钟奖励。");
				cm.dispose();
				break;
			}
		}
	}
	}
}
