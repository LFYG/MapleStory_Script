function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 910001000) {
		cm.sendOk("���Ѿ���רҵ����<���˴�>�ˡ�");
		cm.dispose();
		return;
	}
	cm.warp(910001000, 0);
	cm.dispose();
}