/*
 *Mary
 */
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
        var selStr = "#r���ã���ӭ����MapleWing#l:\r\n\r\n#b#L0#��������#l\r\n#L1#�ʼҷ���#l\r\n#L2#��������������#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 23);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1012117);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1012123);
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1) >= 50000) {
	    	cm.gainNX(- 50000);
		cm.gainItem(5060003,1);
	    cm.sendOk("�ɹ��������� ף����鵽�ö���!");
	    cm.worldMessage(cm.getChar().getName() + "�ڵ���̵깺���˻����� ,������һ��ף����ת���û�ɫ��");
	    cm.dispose();
	} else {
	    cm.sendOk("��û��5W���");
	    cm.dispose();
            break;
		}
        }
    }
}