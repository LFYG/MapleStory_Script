/*
�ҷ�ʱ�г��� 118����
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
  if (status == 0) {
        var selStr = "��һ��!����Ҫ�ƶ����Ǹ������ļ�̳��?\r\n";
        selStr += "#L0##b��ͨ����#l\r\n";
        selStr += "#L1##b��������#l";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if (cm.getPlayer().haveItem(4001017) >= 1) {
			cm.warp(211042400);
			} else {
			cm.sendOk("������ �������Ƿ���#z4001017##v4001017#.û�еĻ����ǲ��������ȥ��");
			}
			cm.dispose();
            break;
        case 1:
		if (cm.getPlayer().haveItem(4001017) >= 1) {
			cm.warp(211042401);
			} else {
			cm.sendOk("������ �������Ƿ���#z4001017##v4001017#.û�еĻ����ǲ��������ȥ��");
			}
			cm.dispose();
            break;
		}
    }
}