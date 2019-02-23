var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n#b#L0#��ȡ10-89���ȼ�����#l\r\n#L1#��ȡ90-149���ȼ�����#l\r\n#L2#��ȡ150-199���ȼ�����#l\r\n#L3#��ȡ200-249���ȼ�����#l\r\n#L4#��ȡ250���ȼ�����#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
if(cm.getBossLog("10������",1) < 1 && (cm.getPlayer().getLevel() > 9 && cm.getPlayer().getLevel() < 90) && (cm.getSpace(5)>1 && cm.getSpace(1)>9)){
cm.gainMeso(+200000);
cm.gainItem(5072000,1);
cm.setBossLog("10������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ10-89�ȼ�����.");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����9����λ����,������1����λ����).\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        case 1:
if(cm.getBossLog("50������",1) < 1 && (cm.getPlayer().getLevel() > 89 && cm.getPlayer().getLevel() < 150) && cm.getSpace(5)>2){
cm.gainMeso(+1000000);
cm.gainItem(5074000,1);
cm.gainItem(5040005,10);
cm.gainItem(1082540,1);
cm.gainItem(1072853,1);
cm.gainItem(1003946,1);
cm.gainItem(1052647,1);
cm.gainItem(1102612,1);
cm.setBossLog("50������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ90-149�ȼ�����.");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(������3����λ����).\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        case 2:
if(cm.getBossLog("100������",1) < 1 && (cm.getPlayer().getLevel() > 149 && cm.getPlayer().getLevel() < 200) && cm.getSpace(5)>1){
cm.gainItem(5062000,5,7);
cm.gainItem(5074000,1);
cm.gainItem(1113072,1);
cm.gainItem(1032220,1);
cm.gainItem(1122264,1);
cm.gainItem(1132243,1);
cm.setBossLog("100������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ150-199�ȼ�����.");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(������2����λ����).\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        case 3:
if(cm.getBossLog("150������",1) < 1 && (cm.getPlayer().getLevel() > 199 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(5)>2 && cm.getSpace(3)>1)){
cm.gainItem(5062000,10,7);
cm.gainItem(5064000,5,7);
cm.gainItem(3010155,1);
cm.gainItem(5390002,1);
cm.gainItem(1082432,1);
cm.setBossLog("150������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ200-249�ȼ�����.");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(������3����λ����,������1����λ����).\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        case 4:
if(cm.getBossLog("200������",1) < 1 && cm.getPlayer().getLevel() == 250 && cm.getSpace(5)>2){
cm.gainItem(5062002,15,7);
cm.gainItem(5064000,5,7);
cm.gainItem(5390002,10);
cm.setBossLog("200������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ250�ȼ�����.");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(������3����λ����).#b\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        }
    }
}