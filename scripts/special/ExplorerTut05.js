var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("��û׼������?.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("��ϲ��,��������ֵ���������,������������һ������,׼��������");
	} else if (status == 1) {
        cm.warp(104000000, 0);
        cm.dispose();
    }
}