function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("�����ƶ������˵Ĵ�ׯ���˽�����#b<���˽�>#k����ѧϰ#b��ҩ���ɿ�װ����������Ʒ��������������#k5��רҵ������");
        } else if (status == 1) {
            cm.saveReturnLocation("ARDENTMILL");
            cm.warp(910001000, "st00");
            cm.dispose();
        }
    }
}