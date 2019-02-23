﻿var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;

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
        if (mode == 1) status++;
        else status--;
	if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4) {
        if (cm.getMapId() == 540010001) {
        if (status == 0) {
            cm.sendSimple("#e#d[全民飞机大战]#k#n:\r\n\r\n\r\n#b由马来西亚国际航班[MH360]开往吉隆坡起航全程30分钟，飞机上面有一个金蛋，消灭后会机率性掉落140、150装备，以及必掉落大量魔方等等。在飞机上可以输入 #e#r@mob#k#n#b 查看怪物血量，但是如果消灭不了请在最后1分钟下飞机领取安慰奖励。\r\n\r\n#r任务要求：\r\n\r\n1). 组队员等级必须要在" + minLevel + "级以上。\r\n2). 组队员必须要" + minPartySize + "人前往#b\r\n\r\n#L0#[MH360]飞机大作战#l\r\n")
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
				} else if (cm.getParty().getMembers().size() < 1){
					cm.sendOk("对不起，此次挑战必须至少有1名队员,且不能大于1个人."); 
					cm.dispose();
				} else if (cm.getMap(540010101).getCharactersSize() > 0) {
					cm.sendOk("本次航班已经飞走了，请等待下次班机。或者换线尝试..");
					cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                    } else  {
		if (cm.getPQLog("航空") < 1 && cm.getEventCount("航空") < 1){
		if (cm.checkPartyEventCount("航空",1)){
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("ZChaosPQ2");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 198);
                                cm.setPQLog("航空");
				cm.setEventCount("航空");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("[全民飞机大战]飞机上已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } else {
			cm.sendOk("请检查队伍中是否存在已完成次数#b队员#k。");
			cm.dispose();
			}
                } else {
			cm.sendOk("对不起，该帐号每天只能进入1次。");
			cm.dispose();
			}
		} //判断组队
            } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
        }
	} else {
		 var pt = cm.getEventManager("ZChaosPQ2");
		 var times = pt.getInstance("ZChaosPQ2").getTimeLeft();
	  	if(times < (1000 * 60 * 2)){
		cm.warp(540010001);
		cm.gainItem(4310129, 100);
		cm.gainItem(5062009, 2);
		cm.gainItem(5062500, 2);
		cm.gainItem(5064000, 1);
		cm.setEventCount("航空");
		cm.worldSpouseMessage(0x20,"[全民飞机大战] ：恭喜玩家 "+ cm.getChar().getName() +" 下飞机啦,获得豪华礼包一个。");
		} else {
                cm.sendOk("你提前下机,无法得到任何奖励哦!\r\n下飞机后可获得#b#t5062009##kx2、#b#t5062500##kx2、#b#t5064000##kx1、#b#t4310129##kx100。\r\n#r注：副本时间小于2分钟的时候可以点击我完成任务返回地面.");
            }
		cm.dispose();
	}
		 } else {
        		cm.dispose();
        		cm.sendOk("只有在1,2,3,4频道才可以参加[MH360]飞机击蛋任务。");
	}
    }
}