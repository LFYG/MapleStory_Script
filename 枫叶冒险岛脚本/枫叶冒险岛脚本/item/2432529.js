//����
function start() {
	if (im.getBossLog("��Ҷð�յ�����") == 0) {
		if (im.getSpace(4) <= 1) {
			im.sendOk("������λ�ò��㣬�޷��򿪸���");
			im.dispose();
		} else {
			im.gainItem(4310014, 15);
			im.getPlayer().dropMessage(1, "�Ӹ�������ȡ��15��ѩ����");
			im.gainItem(2432529, -1);
			im.setBossLog("��Ҷð�յ�����");
			im.dispose();
		}
	} else {
		im.getPlayer().dropMessage(1, "�������Ѿ��򿪹������������ٴδ�");
		im.dispose();
	}
	
}
