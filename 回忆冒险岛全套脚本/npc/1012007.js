var q = 300;
function start() {
	if (cm.getLevel() < 180) {
		cm.sendOk("���������������ѽ������ﵽ180���Ϳ�����ȡ�����ˡ�");
		cm.dispose();
		return;
	}
	if (cm.getBossLogAcc("����"+cm.getPlayer().getMapId())<1)
	{
		cm.setBossLogAcc("����"+cm.getPlayer().getMapId());
		cm.dispose();
		cm.warp(910000000);
		cm.gainNX(1,q);
		cm.sendOk("��ϲ������"+q+"��ȯ");
		
		
	} else {
		cm.sendOk("������Ѿ���ȡ��������Ŷ~ÿ��ֻ��һ���콱���ᣬ�ɲ�Ҫ̫̰���أ�");
		cm.dispose();
	}
}

