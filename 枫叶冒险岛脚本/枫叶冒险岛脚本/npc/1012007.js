function start() {
	if (cm.getBossLog("��������")<=1)
	{
		cm.gainItem(5064000, 1);
		cm.gainItem(5062002, 3);
		cm.gainItem(5062000, 3);
		cm.setBossLog("��������");
		//cm.gainNX(300);
		cm.dispose();
		cm.warp(100000202, 0);
		cm.sendOk("��ϲ������3���߼�����ħ����3������ħ����1�ŷ�������");
	} else {
		cm.sendOk("������Ѿ���ȡ��������Ŷ~ÿ��ֻ��һ���콱���ᣬ�ɲ�Ҫ̫̰���أ�");
		cm.dispose();
	}
}