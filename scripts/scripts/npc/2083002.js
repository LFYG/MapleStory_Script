/*
	Crystal of Roots - Leafre Cave of life
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getMapId() == 240050400) {
            cm.sendYesNo("�����뿪���ﵽ ����������Ѩ��� ��?");
        } else {
            cm.sendYesNo("�����뿪���ﵽ ����������Ѩ��� ��?");
        }
    } else if (status == 1) {
        if (cm.getMapId() == 240050400) {
            cm.warp(240050400, 0);
        } else {
            cm.warp(240050400, 0);
        }
        cm.dispose();
    }
}