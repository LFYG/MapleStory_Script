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
        cm.sendYesNo("��ʱֻ�����;ö�������.\r\n���޸��;ö�ô?");
    } else if (status == 1) {
        cm.sendRepairWindow();
        cm.dispose();
    }
}