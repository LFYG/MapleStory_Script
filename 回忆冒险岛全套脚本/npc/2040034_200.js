var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "�㼯����#v4009053##v4009054##v4009055##v4009056##v4009057##v4009058##v4009059#���Ƿ���һ�һ��δ�������ˣ�";
		cm.sendYesNo(text);
	} else if (status == 1) {
		if (cm.haveItem(4009053) && cm.haveItem(4009054) && cm.haveItem(4009055) && cm.haveItem(4009056) && cm.haveItem(4009057) && cm.haveItem(4009058) && cm.haveItem(4009059)) {
			cm.sendSimple("��ѡ��#b\r\n#L1662033#����δ�������ˣ��У�#l\r\n#L1662034#����δ�������ˣ�Ů��#l\r\n");
		} else {
			cm.sendOk("��û�м���δ�������˵�������޷����������ˡ�");
			cm.dispose();
		}
	} else if (status == 2) {
		var itemid = selection;
		cm.gainItem(4009053, -1);
		cm.gainItem(4009054, -1);
		cm.gainItem(4009055, -1);
		cm.gainItem(4009056, -1);
		cm.gainItem(4009057, -1);
		cm.gainItem(4009058, -1);
		cm.gainItem(4009059, -1);
		cm.gainItem(itemid, 1);
		cm.sendOk("��ϲ�㣬�ɹ�������һ��#b#v"+itemid+"##t"+itemid+"##k��");
		cm.dispose();
	}
}