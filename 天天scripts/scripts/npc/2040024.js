/*
	��һ�������ʯ - Ludibrium : Eos Tower 100th Floor (221024400)
**/

var status = 0;

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
            cm.sendYesNo("���ַ���ħ��ʯ�ϣ���Χ����������Ĺ⡣�����ƶ�����һ��ħ��ʯ��");
        } else {
            cm.sendOk("�������ӵ���һ��ħ��ʯ��ħ���󣬵���û�� ħ��ʯ���Ѿ��� �޷�������");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4001020, -1);
        cm.warp(221022900, 3);
        cm.dispose();
    }
}