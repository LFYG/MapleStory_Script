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
            var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã��ҿ���ÿ���������#r\r\n#L0#����˵��#b\r\n#L1#ð�ձҹ�������\r\n#L2#ð�ձҹ���ѫ��\r\n#L3#ð�ձҹ���װ��\r\n#L4#ð�ձҹ����̳�װ��";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
	    cm.dispose();
            cm.sendNext("#b�������:#b\r\n1.�����Ƿ����������Ϸ����ݸ�����\r\n2.�ڱ�NPC��ȡ������ȫ���.ֻҪ�����߾��ܵõ�\r\n3.ϣ�����ܶ��֧������ð�յ�.��������Ϸ.����ȱ�ٿ���");
            break;
        case 1:
            cm.dispose();
	    cm.openNpc(9900004,5);
            break;
        case 2:
            cm.dispose();
	    cm.openNpc(9900004,6);
            break;
        case 3:
            cm.dispose();
	    cm.openNpc(9900004,7);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(9900004,8);
            break;
        }
    }
}