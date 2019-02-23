var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
		if (cm.getBossLogAcc("�ƹ�����")>=0) {
			cm.dispose();
			cm.openNpc(2008, 3);
			return;
		}
		if (cm.getBossLog("���ּݵ�")>=0) {
			var text = head+"#d�ٴλ�ӭ���� #r����ð�յ�#k #d,���ǽ���������\r\n\r\n";
			text+="#v2431719##v2430241##v2431673##v5340000##v2300000##v1112941##v5000054#\r\n";
			text+="#b"+icon+" ����Ϊ�¹ٷ�ģʽ  ����#r30#b��  ���#r10#b��  ����#r5#b��\r\n";
			text+=""+icon+" ���˵���������ť(������@pm),�ṩ���ֱ�ݷ���\r\n";
			text+=""+icon+" ����������Ϸ�̵����ܶ��֣������뿴˵����\r\n";
			text+=""+icon+" ÿ�ո��������Ҹ������������ѩ���ҵ�������\r\n";
			text+=""+icon+" Ϊ��������˳���ɳ�,���ǻ�Ϊ��׼����#r�����¼����#b��\r\n";
			text+=""+icon+" ���ף����Ϸ��죬�������Կ�������� #rëĪ����#k#b��\r\n";
			text+=""+icon+" ������Ĳ���������ǵ���ҽ���Ⱥ��#e#r416157845#n#k";
			cm.sendSimple(text);
		} else {
			cm.dispose();
			cm.openNpc(2008,2);
		}
	} else if (status == 1) {
		cm.dispose();
		cm.setBossLog("���ּݵ�", 0, -2);
		cm.gainItem(2431719, 1);
		cm.gainItem(2430241, 1);
		cm.gainItem(2431673, 1, 60);
		cm.gainMeso(100000);
		cm.warp(50000);
		cm.openNpc(2008, 2);
		cm.worldSpouseMessage(0x15,"�����ּݵ�������ϲ��� "+ cm.getChar().getName() +" �����˻���ð�յ�������ף����(��)�ɡ�");
	}
}