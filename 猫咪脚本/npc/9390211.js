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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���һ�ʲô:\r\n#b#L0##v4022000#ī��������x15 �һ� #v4022021#3��#l\r\n#L1##v4022000#ī��������x15 �һ� #v4022018#3��#l\r\n#L2##v4022000#ī��������x15 �һ� #v4022020#3��#l\r\n#L3##v4022002#޹�²�����x15 �һ� #v4022019#3��#l\r\n#L4##v4022002#޹�²�����x15 �һ� #v4022017#3��#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.haveItem(4022000,15)) {
		cm.gainItem(4022000, -15);
                cm.gainItem(4022021,3);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("�㲻���϶һ�Ҫ��,�Ҳ�������һ�");
            }
            break;
        case 1:
            if (cm.haveItem(4022000,15)) {
		cm.gainItem(4022000, -15);
                cm.gainItem(4022018,3);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("�㲻���϶һ�Ҫ��,�Ҳ�������һ�");
            }
            break;
        case 2:
            if (cm.haveItem(4022000,15)) {
		cm.gainItem(4022000, -15);
                cm.gainItem(4022020,3);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("�㲻���϶һ�Ҫ��,�Ҳ�������һ�");
            }
            break;
           case 3:
            if (cm.haveItem(4022002,15)) {
		cm.gainItem(4022002, -15);
                cm.gainItem(4022019,3);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("�㲻���϶һ�Ҫ��,�Ҳ�������һ�");
            }
            break;      
			case 4:
            if (cm.haveItem(4022002,15)) {
		cm.gainItem(4022002, -15);
                cm.gainItem(4022017,3);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("�㲻���϶һ�Ҫ��,�Ҳ�������һ�");
            }
            break;
        }
        cm.dispose();
    }
}