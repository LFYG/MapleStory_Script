//�޴󸣴�
function start() {
	if (im.getBossLog("У԰�޴󸣴�") == 0) {
		if (im.getSpace(4) <= 1) {
			im.sendOk("������λ�ò��㣬�޷��򿪸���");
			im.dispose();
		} else {
			im.gainItem(4310014, 25);
			im.getPlayer().dropMessage(1, "�Ӿ޴󸣴�����ȡ��25��ѩ����");
			im.gainItem(2431481, -1);
			im.setBossLog("У԰�޴󸣴�");
			im.dispose();
		}
	} else {
		im.getPlayer().dropMessage(1, "�������Ѿ��򿪹��޴󸣴��������ٴδ�");
		im.dispose();
	}
	
}
