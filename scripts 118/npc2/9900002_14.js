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
        var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã����Ǿ۱��裡#r\r\n#L0#��Ҷһ�\r\n#L1#��������\r\n#L2#װ������\r\n#L3#Boss��������";
 cm.sendSimple(selStr);
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 0:
            cm.dispose();
	    cm.sendOk("�����ڴ���");
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002,15);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,16);
            break;
        case 3:
            cm.dispose();
	    cm.sendOk("�����ڴ���");
            break;
        }
    }
}