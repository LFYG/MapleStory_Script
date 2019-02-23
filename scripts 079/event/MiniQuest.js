// ��֮�� ��о����
// ����汾糺�Ҫ��
//���������ϵQQ��1239776509 

importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.client);

var exitMap;
var instanceId;
var monster;
monster = new Array(
	9400589, // ��������
	9400590, // ��֮ħŮ
	9400591, // Ѫ�潫��
	9400592, // ��ħ��
	9400593 // ��Ӱɱ��
); 


function init() {
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup(partyid) {
	exitMap = em.getChannelServer().getMapFactory().getMap(803000505);
	var instanceName = "MiniQuest" + partyid;

	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	var map = mf.getMap(803001200);//wutt
	map.toggleDrops();

	eim.setProperty("points", 0);
	eim.setProperty("monster_number", 0);

	eim.schedule("beginQuest", 5000);
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(803001200);
	player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) { 
	player.setHp(player.getMaxHp());
	playerExit(eim, player);
	return false;
}

function playerDisconnected(eim, player) {
	removePlayer(eim, player);
}

function leftParty(eim, player) {			
	playerExit(eim, player);
}

function disbandParty(eim) {
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
}

function playerExit(eim, player) {
	var party = eim.getPlayers();
	var dispose = false;
	if (party.size() == 1) {
		dispose = true;
	}
	eim.saveBossQuestPoints(parseInt(eim.getProperty("points")), player);
	player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[糺�Ҫ��] ����δ֪���������㱻�ͳ���糺�Ҫ������"));
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
	if (dispose) {
		eim.dispose();
	}
}

function removePlayer(eim, player) {
	var party = eim.getPlayers();
	var dispose = false;
	if (party.size() == 1) {
		dispose = true;
	}
	eim.saveBossQuestPoints(parseInt(eim.getProperty("points")), player);
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
	if (dispose) {
		eim.dispose();
	}
}

function clearPQ(eim) {
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
}

function allMonstersDead(eim) {
	var monster_number = parseInt(eim.getProperty("monster_number"));
	var points = parseInt(eim.getProperty("points"));
	
	var monster_end = java.lang.System.currentTimeMillis();
	var monster_time = Math.round((monster_end - parseInt(eim.getProperty("monster_start"))) / 1000);

	if (1200 - monster_time <= 0) points += monster_number * 20000;
	else points += (monster_number * 20000) + ((1200 - monster_time) * (monster_number + 1));
	
	monster_number++;

	if (monster_number > 20) {
		points += 7500000;
	}
	
	eim.setProperty("points", points);
	eim.setProperty("monster_number", monster_number);
	
	var map = eim.getMapInstance(803001200);

	if (monster_number > 20) {
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			party.get(i).finishAchievement(2);
		}
		map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[糺�Ҫ��] ��ϲ�㣡�����Ѿ�����������糺�BOSS������"));
		disbandParty();
	}
	else {
		map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[糺�Ҫ��] ��ϲ�㣡�������˵�ǰ�����һ���������10����ٻ���"));
		map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.getClock(10));
		eim.schedule("monsterSpawn", 10000);
	}
}

function monsterSpawn(eim) {
	var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);
	var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats();

	if (parseInt(eim.getProperty("monster_number")) > 17) overrideStats.setHp(mob.getHp() * 1.5);
	else overrideStats.setHp(mob.getHp() * 2);

	overrideStats.setExp(mob.getExp());
	overrideStats.setMp(mob.getMaxMp());
	mob.setOverrideStats(overrideStats);

	if (parseInt(eim.getProperty("monster_number")) > 17) mob.setHp(Math.floor(mob.getHp() * 1.5));
	else mob.setHp(mob.getHp() * 2);

	eim.registerMonster(mob);

	var map = eim.getMapInstance(803001200);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(75, 1));
	eim.setProperty("monster_start", java.lang.System.currentTimeMillis());
}

function beginQuest(eim) {
	var map = eim.getMapInstance(803001200);
	map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[糺�Ҫ��] 糺���޻���30����ٻ�����������������ȫ��׼��������"));
	eim.schedule("monsterSpawn", 30000);
	map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.getClock(30));
}

function cancelSchedule() {
}