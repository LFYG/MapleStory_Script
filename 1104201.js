var status = -1;

function start() {
    cm.askAcceptDecline("����ħ��ʦ�ڻ����ң����뿴���������\r\n����!�����ɶ����ð�");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.removeNpc(cm.getMapId(), 1104201);
	cm.spawnMob(8850005, 0, -181);
	cm.spawnMob(8850006, 0, -181);
	cm.spawnMob(8850007, 0, -181);
	cm.spawnMob(8850008, 0, -181);
	cm.spawnMob(8850009, 0, -181);
	cm.spawnMob(8850011, 0, -181);

	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}