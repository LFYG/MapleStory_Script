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
			cm.sendSimple("#fEffect/CharacterEff/1112905/0/1#��ã�����������ʲô��?\r\n#b#L0##fEffect/CharacterEff/1112905/0/1#���봴��һ������#l\r\n#L1##fEffect/CharacterEff/1112905/0/1#�����ɢ�ҵļ���#l\r\n#L2##fEffect/CharacterEff/1112905/0/1#�����Ҽ����Ա����������#l#k\r\n#r#L3##fEffect/CharacterEff/1112905/0/1#�ı����Ļ���#l#k\r\n#r#e#L4##fEffect/CharacterEff/1112905/0/1#����Ʊ�������10GP[����Ҫ�峤]#l#k");
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
} else if (!cm.haveItem(4031561)) {
cm.sendOk("��û��#v4031561#�Ҳ��ܸ����GP");
cm.dispose();
} else {
cm.gainGP(10);
cm.gainItem(4031561,-1);
cm.sendOk("�ɹ���");
cm.dispose();
}
			}
			} else if (selection == 5) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("��û�м���!");
cm.dispose();
} else if (!cm.haveItem(4001024)) {
cm.sendOk("��û��#v4001024#�Ҳ��ܸ����GP");
cm.dispose();
} else {
cm.gainGP(10);
cm.gainItem(4031561,-100);
cm.sendOk("�ɹ���");
cm.dispose();
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
