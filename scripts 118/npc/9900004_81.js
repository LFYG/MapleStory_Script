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
            var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã�������Բ�ѯ�������BOSS����#b\r\n#L0#����\r\n#L1#����\r\n#L2#��������\r\n#L3#���׺���\r\n#L4#ʨ���������װ�\r\n#L5#�������Ʒ����\r\n#L6#��ʿ�š�ϣ��˹Ů��\r\n#L7#����\r\n#L8#������/�İ�ʨ��";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
             cm.sendOk("һ����Դ�#r4#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("��ͨ����")+"#k#b��");
             cm.dispose();
             break;
        case 1:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("��ͨ����")+"#k#b��");
             cm.dispose();
             break;
        case 2:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("��������")+"#k#b��");
             cm.dispose();
             break;
        case 3:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("���׺���")+"#k#b��");
             cm.dispose();
             break;
        case 4:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("ʨ����")+"#k#b��");
             cm.dispose();
             break;
        case 5:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("Ʒ����")+"#k#b��");
             cm.dispose();
             break;
        case 6:
             cm.sendOk("һ����Դ�#r2#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("ϣ��˹")+"#k#b��");
             cm.dispose();
             break;
        case 7:
             cm.sendOk("һ����Դ�#r4#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("����")+"#k#b��");
             cm.dispose();
             break;
        case 8:
             cm.sendOk("һ����Դ�#r4#k��\r\n#b���Ѿ�����#r"+cm.getBossLog("������")+"#k#b��");
             cm.dispose();
             break;
        }
    }
}