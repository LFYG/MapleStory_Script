var itemList = Array(
	Array(4310030, 1000),
	Array(4310036, 4000),
	Array(4033356, 50),
	Array(4021012, 30),
	Array(4021011, 30),
	Array(4021010, 30),//ʱ��
	Array(4000082, 300),
	Array(4000124, 40),
	Array(4000630, 10),
	Array(4310015, 3),
	Array(4021019, 3)
);
function start() {
    if (im.getSpace(4) >= 11) {
        im.gainItem(2432341, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ�����150��������������");
        im.worldSpouseMessage(0x15, "����ֵ������:��ϲ " + im.getPlayer().getName() + " �� <150��������> �л��ȫ���������ϣ��볬�������һ����");
	im.dispose();
    } else {
        im.sendOk("�뽫������Ԥ��10����λ���ϣ��ҽ�����������150������ȫ���������ϡ�");
	im.dispose();
    }
}