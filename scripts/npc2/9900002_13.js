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
        var selStr = "��ѡ������Ҫ�ٻ�������ʦ��#b\r\n#L0#һ������#l\r\n#L1#һ������#l\r\n#L2#�߼�����#l\r\n#L3#�߼�����#l\r\n#L4#�߼�����#l\r\n#r#L5#�ʼ����� -�ɳ�ȡ������������[New]#l\r\n#L6#�ʼҷ��� -�ɳ�ȡ�������淢��[New]#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 0:
            cm.dispose();
            cm.openNpc(1012104);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1052005);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1012103);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012104);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(1012105);
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9201148);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(1012117);
            break;
        }
    }
}