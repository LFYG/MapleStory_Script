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
            var selStr = "#r���װ����#b\r\n#L1#����װ��  #L2#��˵����";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 1:
            cm.dispose();
	    cm.openNpc(9900004,9);
            break;
        case 2:
            cm.dispose();
	    cm.sendOk("�����ڴ���");
            break;
        }
    }
}