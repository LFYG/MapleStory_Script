function start() {
    if (im.getSpace(4) >= 25) {
        im.gainItem(2431938, -1);
	//im.gainItem(4310030, 5000);
	im.gainItem(4033356, 50);
	im.gainItem(4021012, 30);
	im.gainItem(4021011, 30);
	im.gainItem(4021010, 30);
	im.gainItem(4000082, 400);
	im.gainItem(4000124, 50);
	im.gainItem(4310015, 3);
	im.gainItem(4021019, 1);
        im.playerMessage(-1, "��ϲ����150������������");
        im.worldSpouseMessage(0x20, "��150������������ : ��ϲ " + im.getPlayer().getName() + " �� <150����������> ���ȫ�����ϡ�");
	im.dispose();
    } else {
        im.sendOk("�뽫������Ԥ��25����λ���ϣ��ҽ�����������150����ȫ�����ϡ�");
	im.dispose();
    }
}