function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 680000000) {
		cm.sendOk("���Ѿ��ڻ�����ˡ�");
		cm.dispose();
		return;
	}
	cm.warp(680000000, 0);
	cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n��鿴���Ͻ�NPC�������.\r\n�������İ���.���������������!\r\nף���»����!!!");
	cm.dispose();
}