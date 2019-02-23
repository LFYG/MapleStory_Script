var superMob = new Array(9300216, 9100000, 9100008, 9300692);

function enter(pi) {
    if (!checkMob(pi)) {
        pi.playerMessage("����ʣ�µĹ��");
    } else {
        //pi.dojoAgent_NextMap(true, false);
		
		var eim = pi.getPlayer().getEventInstance();
		var maps = eim.getObjectProperty("maps");
		if (maps == null) {
			java.lang.System.out.println("maps��ȡʧ��");
			eim.dispose();
			return;
		}

		var hasnext = false;
		for (var i = 1; i < maps.length; i++) {
			if (maps[i][0] == pi.getPlayer().getMapId() + 100) {
				pi.getPlayer().changeMap(maps[i][1], maps[i][1].getPortal(0));
				hasnext = true;
				break;
			}
		}

		if (!hasnext) {
			pi.warp(925020003, 1);
			pi.getPlayer().dropMessage(1, "��ϲ���Ѿ������Ŀǰ��߲�����");
			pi.finishActivity(120105);
			pi.showEffect("Yut/goal");
			pi.worldMessageYellow("[ϵͳ����] : " + "̫�����ˣ�[" + pi.getPlayer().getName() + "]�ɹ�ͨ�����꣡");
		}
    }
}

function checkMob(pi) {
	var monsters = pi.getMap().getAllMonster();
	if (monsters.size() == 0) {
		return true;
	}
	var it = monsters.iterator();
	while (it.hasNext()) {
		var monster = it.next();
		var isIn = false;
		for (var i = 0; i < superMob.length; i++) {
			if (monster.getId() == superMob[i]) {
				return true;
			}
		}
		if (!isIn) {
			break;
		}
	}
	return false;
}