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
            var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã������������ʲô��#r\r\n#L0#��Ŀ˵��#b\r\n#L1#�������  #L2#���ѫ��  #L3#���װ��  #L4#����̳�";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
	    cm.dispose();
            cm.sendNext("#b��Ŀ���:#b\r\n1.�ڱ�NPC������Ʒ�����ѡ��\r\n2.�ڱ�NPC���Ĳ���ѫ����Ҫ���ӻ�������\r\n3.�ڱ�NPC����������Ʒȫ����ð�յ���ҹ���\r\n4.�ڱ�NPC���Ĳ�����Ʒȫ������ʱ�����ƣ�����ʱ����Ʒ���Զ���ʧ��");
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