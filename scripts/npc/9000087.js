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
            cm.sendYesNo("�����ƶ������Ժ�������ҽ��׵�#b<�����г�>#kȥ��");
        } else if (status == 1) {
            cm.saveReturnLocation("FREE_MARKET");
            cm.warp(910000000, "st00");
            cm.dispose();
        }
    }
}