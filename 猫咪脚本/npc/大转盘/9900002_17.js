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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#��ѡ����Ҫ���Ƶ�ת�̣���������ͣ�:\r\n\r\n#L1#��Ҫת30��(�ۼƳ�ֵ��30�������ת)#l\r\n#b#L0#��Ҫת300��(�ۼƳ�ֵ��300�������ת)#l\r\n#L2#��Ҫת1500��(�ۼƽ�1500���Ի���2����ת)#l\r\n#L3#��Ҫת3000��(�ۼƽ�3000���Ի���4����ת)#l\r\n#L4#��Ҫת6000��(�ۼƽ�6000���Ի���6����ת)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	cm.dispose();
	cm.openNpc(9900002,18);
            break;
        case 1:
	cm.dispose();
	cm.openNpc(9900002,19);
            break;
        case 2:
	cm.dispose();
	cm.openNpc(9900002,21);
            break;
        case 3:
	cm.dispose();
	cm.openNpc(9900002,22);
            break;
        case 4:
	cm.dispose();
	cm.openNpc(9900002,23);
            break;
        }
    }
}