var status = 0;

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
		if (status == 0) {
			var mapId = cm.getPlayer().getMapId();
			if (mapId == 103000890) {
				cm.removeAll(4001007);
				cm.removeAll(4001008);
				
				cm.warp(103000000);
				
				cm.dispose();
			} else {
				var outText;
				if (mapId == 103000805) {
					outText = "�������뿪�õ�ͼ��׼������?";
				} else {
					outText = "һ�����뿪�õ�ͼ,���е���ս�������¿�ʼ. �����ȷ��Ҫ�뿪�õ�ͼ��?";
				}
				cm.sendYesNo(outText);
			}
		} else if (status == 1) {
			var eim = cm.getPlayer().getEventInstance(); 
			if (eim == null) {
				cm.warp(910000000); 
			} else if (cm.isLeader()) {
				eim.disbandParty();
				var em = cm.getEventManager("KerningPQ");
				em.setProperty("entryPossible", "true");
			} else {
				eim.leftParty(cm.getPlayer());
			}
			cm.dispose();
		}
	}
}