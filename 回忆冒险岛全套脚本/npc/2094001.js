var status = -1;

function action(mode, type, selection) {
	cm.gainPlayerEnergy(20);
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.removeAll(4001260);
	cm.gainItem(5062002, 5);
	cm.gainItem(5065000, 5);
	var zfq = Math.floor(Math.random()*2+1);
	cm.gainItem(2340000, zfq);
	cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" ����ռ��������л�ô���ħ����20�����ֵ��");
	cm.setEventCount("����");
	cm.setPartyEventCount("����1");
	cm.warp(910000000);
	cm.dispose();
}