var status;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == -1) {
        cm.dispose();
	} else {
        if(mode == 0 && status == 0) {
            cm.dispose();
			return;
		}
		if(mode == 1) status++;
		else {
            cm.dispose();
			return;
		}

		if(status == 0) {
			if(cm.getBossLog("���ֽ���", 1) <= 0) {
				cm.gainItem(2430241, 1);
				cm.gainMeso(100000);
				cm.setBossLog("���ֽ���", 1, 1);
				cm.getPlayer().dropMessage(-1,"�ɹ���ȡ�������");
			}
            if(cm.getMapId() == 910000000) {
				text += head + icon2 + "#b���,��ѡ����Ҫ��������:\r\n";
				text += "#L0#" + icon + "������NPC\r\n";
				text += "#L1#" + icon + "������NPC\r\n";
				cm.sendSimple(text);
			} else {
				cm.dispose();
				cm.openNpc(9010057,701);
			}
		} else {
			if(selection == 0) {
				cm.dispose();
				cm.openNpc(9010057,701);
			} else if (selection == 1) {
				cm.dispose();
				cm.openNpc(9010057,702);
			}
		}
	}
}