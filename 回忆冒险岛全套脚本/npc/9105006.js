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
            if(cm.getMapId() == 910000000) {
				text += head +"�ҵ�Ȼ���Ǵ���������#b��˵�е�����ʦ#k�ˣ��ڵ����̳ǹ���#b��ҫ�ʼ���ȯ#k��#b���������ȯ#k�Ϳ�������Ϊ������ˣ�\r\n#b";
				text += "#L0#" + icon + " ��������\r\n";
				text += "#L1#" + icon + " ����Ⱦ��\r\n";
				text += "#L2#" + icon + " ��������\r\n";
				cm.sendSimple(text);
			} else {
				cm.dispose();
				cm.sendOk("�������г������Ұɣ�");
			}
		} else {
			if(selection == 0) {
				cm.dispose();
				cm.openNpc(9105006, 1);
			} else if (selection == 1) {
				cm.dispose();
				cm.openNpc(1012103);
			} else if (selection == 2)
			{
				cm.dispose();
				cm.openNpc(9105006, 2);
			}
		}
	}
}