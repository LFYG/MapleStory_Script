var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//����
var typed = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n";
		selStr += "#d��ӭʹ�ó���NPC���ӣ������Է��ڼ��̿�ݼ�ʹ�ã�#k\r\n";
		selStr += "\r\n#L0#" + z + "#e#b������Npc#l#k#n#L99#" + z + "#e#b�����̳�#l#k#n";
		selStr += "#r#L1#" + z + " ���߽���#l \r\n";
		selStr += "#r#L2#" + z + " ���г�NPC#l \r\n";
		selStr += "#r#L3#" + z + " ��ս����#l \r\n";
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
		im.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
			case 0:
				im.dispose();
				im.openNpc(9900004, 0);
				break;
			case 1:
				im.dispose();
				im.openNpc(9900004, 200);
				break;
			case 3:
				im.dispose();
				im.openNpc(9010022, 0);
				break;
			case 13:
				im.dispose();
				im.openNpc(9310144);
				break;
			case 14:
				if (im.getMeso() >= 100000) {
					im.sendGetText("����10����Ϸ�ң���������Ҫ˵�Ļ���");
					typed = 14;
				} else {
					im.sendOk("��û��10����Ϸ�ң����ܽ������纰����");
					im.dispose();
				}
				break;
			case 15:
				im.dispose();
				im.openNpc(9030000);
				break;
		}
	} else if (status == 2) {
		if (typed == 14) {
			im.worldSpouseMessage(0x07, "[����]" + im.getPlayer().getMedalText() + im.getChar().getName() + " : " + im.getText());
			im.gainMeso(-100000);
			//im.dispose();
		}
		im.dispose();
	}
}