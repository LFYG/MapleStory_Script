var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("��Ҫת�Ƶ���ķ��ʱ��Ҫ������һ��ม�");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("Ҫת�Ƶ���ķ����");
    } else if (status == 1) {
        cm.sendNext("���͵���ķ�ǡ�");
    } else if (status == 2) {
        cm.warp(802000101);
        cm.dispose();
    }
}