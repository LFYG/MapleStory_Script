var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("��û׼������?");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("������û���,�����������\r\n�����㽨�Ĳ���ð�ռ�ְҵ,�������������뽨ð�ռ�ְҵ,\r\n���ǽ���������������...");
	} else if (status == 1) {
		cm.warp(10000, 0);
        cm.dispose();
    }
}