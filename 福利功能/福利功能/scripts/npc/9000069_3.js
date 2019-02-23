var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("龙的传人为自动转职职业，您也可以手动点击转职\r\n#b#L0#我要转职为龙的传人（一转）#l  \r\n#L1#我要转职为龙的传人（二转）#l \r\n#L2#我要转职为龙的传人（三转）#l \r\n#L3#我要转职为龙的传人（四转）#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(508);
		cm.sendOk("系统已经为您转职为龙的传人.\r\n以后的转职都为自动转职.");
            } else {
                cm.sendOk("你不是新手职业 或你的等级没有达到10级.");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 508 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(570);
		cm.sendOk("系统已经为您转职为龙的传人（二转）.\r\n以后的转职都为自动转职.");
            } else {
                cm.sendOk("你不是龙的传人（一转） 或你的等级没有达到30级.");
            }
            cm.dispose();
            break;
        case 2:
            if (cm.getJob() == 570 && cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(571);
		cm.sendOk("系统已经为您转职为龙的传人（三转）.\r\n以后的转职都为自动转职.");
            } else {
                cm.sendOk("你不是龙的传人（二转） 或你的等级没有达到70级.");
            }
            cm.dispose();
            break;
        case 3:
            if (cm.getJob() == 571 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(572);
		cm.sendOk("系统已经为您转职为龙的传人（四转）.\r\n恭喜您已完成龙的传人全部转职.");
            } else {
                cm.sendOk("你不是龙的传人（三转） 或你的等级没有达到120级.");
            }
            cm.dispose();
            break;

         } 
    }
}