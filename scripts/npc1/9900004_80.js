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
            var selStr = "�װ���#r" + cm.getChar().getName() + "#k��ã���ѡ������Ҫ��#b\r\n#L0#�鿴BOSS����\r\n#L1#���BOSS����";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900004,81);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900004,3);
            break;
        }
    }
}