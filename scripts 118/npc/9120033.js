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
            var selStr = "#e#r#h ##k#n    ����Ҫ��ʲô��#b\r\n#L0#���� ��մ�ս��Զ�������� �볡��#l\r\n#L1#�����Ի�#l"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		cm.warp(802000610); 
                cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.sendOk("..........");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
	    cm.sendOk("��ʱ�ر�");
            //cm.openNpc(9120033, 1);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9120033, 2);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9120033, 12);
            break;
        }
    }
}
