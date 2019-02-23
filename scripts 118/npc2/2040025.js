/*
	Second Eos Rock - Ludibrium : Eos Tower 71st Floor (221022900)
*/

var status = 0;
var map;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4001020)) {
            cm.sendSimple("����������ӵ���һ��ħ��ʯ#b\r\n#L0#ʹ�� ħ��ʯ���Ѿ��� (100 ��)#l\r\n#L1#ʹ�� ħ��ʯ���Ѿ��� (41 ��)#l");
        } else {
            cm.sendOk("���������Ӹ���ħ��ʯ��ħ���󣬵���û�� ħ��ʯ���Ѿ��� �޷�������");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("������ ħ��ʯ���Ѿ��� �ƶ���100���������");
            map = 221024400;
        } else {
            cm.sendYesNo("������ ħ��ʯ���Ѿ��� �ƶ���41���������");
            map = 221021700;
        }
    } else if (status == 2) {
        cm.gainItem(4001020, -1);
        cm.warp(map, 0);
        cm.dispose();
    }
}