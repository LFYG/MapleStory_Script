
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                qm.dispose();
                return;
            } else if (status == 1) {
                qm.sendOk("���û���������������ء���");
                qm.dispose();
            }
            status--;
        }
        if (status == 0) {
            qm.sendNext("��ð�, ����Ϊ��K��. #b#h0##k, ��Ը������һ����");
        } else if (status == 1) {
            qm.warp(814000000, 0);
			qm.dispose();
        } 
    }
}

function end(mode, type, selection) {
    qm.dispose();
}