var status = 0;
var sel;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0)


			cm.sendSimple("#h #.�����ܹ��ṩ�������.\r\n#L0#���������봴��һ�����壨��Ҫ2500��#l\r\n#L1#�����������ɢ�ҵļ��壨����ʹ��Ŷ��#l\r\n#L2#�����������Ҽ����Ա���������ޣ���Ҫ500��#l#k\r\n#r#L3#��������Ҫ�ı����Ļ��£���Ҫ3000��#l#k\r\n#r#L4#��������Ҫʹ��#b����ţ��Ʊ#k#r�������10GP#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildId() > 0)
				{
					cm.sendOk("���Ѿ�ӵ�м����ˣ����ܴ���.");
					cm.dispose();
				}
				else
					cm.sendYesNo("����һ���µļ�����Ҫ #b" + cm.getChar().guildCost() + " ���#k, ��ȷ����������?");
			}
			else if (selection == 1)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("�㲻���峤������㲻�ܽ�ɢ�ü���.");
					cm.dispose();
				}
				else
					cm.sendYesNo("��ȷ�����Ҫ��ɢ��ļ���? �����ɢ���㽫���ָܻ����м�����������Լ�GP����ֵ.");
			}
			else if (selection == 2)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("�㲻���峤������㽫��������������Ա����������.");
					cm.dispose();
				}
				else
					cm.sendYesNo("����������Ա������������Ҫ" + cm.getChar().capacityCost() + " ���#k, ��ȷ��Ҫ������?");
			}
			else if (selection == 3)
			{
cm.openNpc(2010008);
			} else if (selection == 4) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("��û�м���!");
cm.dispose();
} else if (!cm.haveItem(4002001)) {
cm.sendOk("��û��#v4002001#�Ҳ��ܸ����GP");
cm.dispose();
} else {
cm.gainGP(10);
cm.gainItem(4002001,-1);
cm.sendOk("�ɹ���.");
cm.dispose();
}
} else if (selection == 5) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("��û�м���!");
cm.dispose();
} else if (cm.getChar().getRw15() >= 100) {
cm.gainGP(50);
cm.gainrw15(-100);
cm.sendOk("�ɹ���");
cm.dispose();
} else {
cm.sendOk("��Ǹ����û�㹻�������㣡.");
cm.dispose();
}

} else if (selection == 6) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("��û�м���!");
cm.dispose();
} else if(cm.getChar().getnld() >= 100) {
cm.gainGP(50);
cm.getPlayer().setnld(cm.getPlayer().getnld() -100);
cm.sendOk("�ɹ���");
cm.dispose();
} else {
cm.sendOk("��Ǹ����û�㹻����������.");
cm.dispose();
}

} else if (selection == 7) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("��û�м���!");
cm.dispose();
} else  if (cm.getzb() >= 10) {
cm.gainGP(500);
cm.setzb(-10);
cm.sendOk("�ɹ���");
cm.dispose();
} else {
cm.sendOk("��Ǹ����û�㹻��Ԫ����.");
cm.dispose();
}
}
		} else if (status == 2)
		{
			if (sel == 0 && cm.getChar().getGuildId() <= 0)
			{
				cm.getChar().genericGuildMessage(1);
				cm.dispose();
			}
			else if (sel == 1 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().disbandGuild();
				cm.dispose();
			}
			else if (sel == 2 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().increaseGuildCapacity();
				cm.dispose();
			}
		}
	}
}
