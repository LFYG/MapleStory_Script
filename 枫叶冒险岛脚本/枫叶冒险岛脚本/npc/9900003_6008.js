var status = -1;
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		cm.setTodayOnlineTime(500);
		var text = "#L1#"+ttt6+"���߻���\t\t\t\t[����ȯ-����-��װ-������Ʒ]#l\r\n";
		text += "#L2#"+ttt6+"����ʱ��\t\t\t\t[��-��-��]�һ�����������ʱ��#l\r\n";
		text += "#L3#"+ttt6+"����ʱ��\t\t\t\t[����ȯ-����-��װ-������Ʒ]#l\r\n";
		cm.sendSimple(text);
	}
}