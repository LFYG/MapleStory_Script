/*
Third Eos Rock - Ludibrium : Eos Tower 41st Floor (221021700)
*/

var status = 0;
var map;
var portal;

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
            cm.sendSimple("����������ӵ���һ��ħ��ʯ#b\r\n#L0#�ƶ�����һ��ħ��ʯ (71 ��)#l\r\n#L1#�ƶ�����һ��ħ��ʯ (1 ��)#l");
        } else {
            cm.sendOk("���������Ӹ���ħ��ʯ��ħ���󣬵���û�� ħ��ʯ���Ѿ��� �޷�������");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("������ ħ��ʯ���Ѿ��� �ƶ���71 ���������");
            map = 221022900;
            portal = 3;
        } else {
            cm.sendYesNo("������ ħ��ʯ���Ѿ��� �ƶ���1 ���������");
            map = 221020000;
            portal = 4;
        }
    } else if (status == 2) {
        cm.gainItem(4001020, -1);
        cm.warp(map, portal);
        cm.dispose();
    }
}