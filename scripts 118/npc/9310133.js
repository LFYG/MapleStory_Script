var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getQuestStatus(56203) == 2) { //2022��Ҷ�� - ��ռ��� ��Ҷ��
            cm.sendOk("���Ѿ�����Ҫ�����������ܼ�����");
        } else {
            cm.warp(703000001, 0);
        }
        cm.dispose();
    }
}