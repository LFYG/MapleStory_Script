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
        var selStr = "��ѡ����Ҫ���Ƶ�ת�̣���������ͣ�:\r\n\r\n#b#L0#��Ҫת300��(�ۼƳ�ֵ��300����ת)#l\r\n#L1#��Ҫת30��(�ۼƳ�ֵ��30����ת)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	cm.dispose();
	cm.openNpc(9900002,18);
            break;
        case 1:
	cm.dispose();
	cm.openNpc(9900002,19);
            break;
        }
    }
}
