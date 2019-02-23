var status = -1;
var em=null;
var typed = 0;
var currentMap = 0;
var currentMapId = 0;
var currentChannel = 0;
function start() {
	if (em==null)
		em = cm.getEventManager("NewEvent45");
	currentMapId = cm.getPlayer().getMapId();
	currentChannel = cm.getPlayer().getClient().getChannel();
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "��ѡ�����߷��ŵĽ�����\r\n";
		text+="#b#L1#���ŵ��#l\r\n";
		text+="#b#L2#���ŵ���ȯ#l\r\n";
		text+="#b#L3#����ѩ����#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		var text = "��ѡ�����߷��ŵ����ͣ�\r\n";
		text+="#b#L0#ָ�����Ÿ���ǰ��ͼ�����#l\r\n";
		text+="#b#L1#ȫƵ������#l\r\n";
		cm.sendSimple(text);
	} else if (status == 2) {
		currentMap = selection;
		//cm.sendSimple(text);
		
		cm.sendGetNumber("�����뷢�ŵ���ֵ��\r\n",0,1,999999); 
	} else if (status == 3) {
		giftByGM(typed, selection, currentMap);
		cm.sendOk("���ųɹ�");
		cm.dispose();
	}
}
function giftByGM(type, points, currentMap) {
	var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
	allPlayers = allPlayers.iterator();
	while (allPlayers.hasNext()) {//ѭ��ÿһ�����
		var player = allPlayers.next();
		if (currentMap == 0) {
			if (player.getClient().getChannel() != currentChannel)
				continue;
			if (player.getMapId() != currentMapId)
				continue;
		}
		if (type <= 2) {
			player.modifyCSPoints(type, points);
		} else {
			em.addById(player.getClient(), 4310014, points, "GM���߷���");
		}
		var typeName = "";
		switch(type) {
			case 1:
				typeName = "���";
				break;
			case 2:
				typeName = "����ȯ";
				break;
			case 3:
				typeName = "ѩ����";
				break;
		}
		var text = "�����˹���Ա�ͳ���"+points+typeName;
		player.dropMessage(1,text);	
	}
}