function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("���������𣿺õģ���������ȥ��������ʱ�����ҡ�");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("���������𣿺õģ���������ȥ��������ʱ�����ҡ�");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("����ش���ȥ�𣿺õģ��ҿ��԰����ͻ�ԭ���Ĵ�ׯ��");
        } else if (status == 1) {
            cm.sendNext("�ҵ��ˡ������ϰ����ͻ�ȥ��");
        } else if (status == 2) {
            var returnMap = cm.getSavedLocation("PVP");
            cm.clearSavedLocation("PVP");
            if (returnMap < 0) {
                returnMap = 100000000;
            }
            cm.warp(returnMap);
            cm.dispose();
        }
    }
}