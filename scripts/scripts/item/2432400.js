var itemList = Array(
	Array(4310036, 3000),
	Array(4000021, 150),
    Array(4001241, 10),
	Array(4001242, 10),
	Array(4000630, 3),
	Array(4004000, 100),
	Array(4004001, 100),
	Array(4004003, 100),
	Array(4004002, 100)
);
function start() {
    if (im.getSpace(4) >= 10) {
        im.gainItem(2432400, -1);
		for(var key in itemList) {
			im.gainItem(itemList[key][0],itemList[key][1]);
		}
        im.playerMessage(-1, "��ϲ�����140��������������");
        im.worldSpouseMessage(0x15, "����ֵ������ : ��ϲ " + im.getPlayer().getName() + " �� <140��������> �л��ȫ���������ϣ��볬�������һ����");
	im.dispose();
    } else {
        im.sendOk("�뽫������Ԥ��10����λ���ϣ��ҽ�����������140������ȫ���������ϡ�");
	im.dispose();
    }
}