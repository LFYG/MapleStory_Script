/* �ҷ�ʱ�г���*/
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
        var selStr = "#r���ã�����������Ժϳ��������ϵ�140װ��#l:\r\n\r\n#b#L0#�鿴˵��#l\r\n#L1#�ϳ�140װ��#l\r\n#L2#�ֽ�140װ��#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.sendOk("#b�ϳ��������¡�����Ҫ��Ʒ��\r\n1��#v4310002#20����������BOSS����\r\n2�����Ӧ��130��װ��������#v1442117#�һ�����#v1442116#.�Դ����ƣ�PS��130װ�����������׺���.PB.Ů��.\r\n3��ð�ձ�5E\r\n4��ֻҪ��������3���������ɺϳ�");
            cm.dispose();
            break;
        case 1://�ϳ�140
            cm.dispose();
            cm.openNpc(9900002,26);
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