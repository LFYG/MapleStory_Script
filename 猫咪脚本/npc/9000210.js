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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���һ�ʲô:\r\n#b#L0##v4000004#��Һ��x100 �һ� #v5062000##l\r\n#L1##v4000273#�����Ϲ�ͷx100 �һ� #v5062000##l\r\n#L10##v2431893#��ħ����Ƭx100 �һ�10�� #v5062009##l\r\n#L2##v4009121#��ȴ֮ͷ��x100 �һ� #v5062000##l\r\n#L3##v4000004#��Һ��x300 �һ� #v5062002##l\r\n#L4##v4000273#�����Ϲ�ͷx300 �һ� #v5062002##l\r\n#L5##v4009121#��ȴ֮ͷ��x300 �һ� #v5062002##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000004,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000004, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һ���Һ��x100,�Ҳ�������һ�");
            }
            break;
        case 1:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000273,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000273, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һͳ����Ϲ�ͷx100,�Ҳ�������һ�");
            }
            break;
        case 10:
            if (cm.getMeso() >= 500 && cm.haveItem(2431893,100)) {
                //cm.gainMeso( - 500000);
		cm.gainItem(2431893, -100);
                cm.gainItem(5062009,10);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��ħ����Ƭx100,�Ҳ�������һ�");
            }
            break;
        case 2:
            if (cm.getMeso() >= 500000 && cm.haveItem(4009121,100)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4009121, -100);
                cm.gainItem(5062000,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һ���ȴ֮ͷ��x100,�Ҳ�������һ�");
            }
            break;
        case 3:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000004,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000004, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һ���Һ��x300,�Ҳ�������һ�");
            }
            break;
        case 4:
            if (cm.getMeso() >= 500000 && cm.haveItem(4000273,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4000273, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һͳ����Ϲ�ͷx300,�Ҳ�������һ�");
            }
            break;
        case 5:
            if (cm.getMeso() >= 500000 && cm.haveItem(4009121,300)) {
                cm.gainMeso( - 500000);
		cm.gainItem(4009121, -300);
                cm.gainItem(5062002,1);
                cm.sendOk("�һ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��50W��Һ���ȴ֮ͷ��x300,�Ҳ�������һ�");
            }
            break;
        }
        cm.dispose();
    }
}