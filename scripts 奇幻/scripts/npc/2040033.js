function start() {
	if (cm.getBossLog("�������")<=0)
	{
		cm.gainItem(4310066, 2);
		cm.gainNX(500);
		cm.sendOk("��ϲ����������#v4310066##b#t4310066##k�Լ�#r500#k���");
		cm.setBossLog("�������");
		cm.dispose();
	} else {
		cm.sendOk("������Ѿ���ȡ��������Ŷ~ÿ��ֻ��һ���콱���ᣬ�ɲ�Ҫ̫̰���أ�");
		cm.dispose();
	}
}