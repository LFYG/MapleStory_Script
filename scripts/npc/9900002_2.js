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
        var selStr = "���ã���ӭ����MapleWing:\r\n\r\n#b#L0#��Ϸ����#l\r\n#L5#��������#l\r\n#L4#�����װ#l\r\n#L6#��������#l\r\n#L7#ϴ�����#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10);
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