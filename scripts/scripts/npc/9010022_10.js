function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 200000301) {
		cm.sendOk("���Ѿ��ڼ��������ˡ�");
		cm.dispose();
		return;
	}
	cm.warp(200000301, 0);
	cm.dispose();
}