function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}else {
		if (mode == 0) {
			cm.sendOk("�����Ҫ�ص�#m801000000#, ������.");
			cm.dispose();
			return;
		} if (mode == 1) {
			status++;
		}
		if (status == 0) {
			cm.sendYesNo("ȷ��?");
		} if (status == 1) {
			cm.warp("801000000");
			cm.dispose();
		}
	}
}