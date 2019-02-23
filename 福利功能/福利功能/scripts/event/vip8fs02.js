importPackage(org.chinamsaction);
importPackage(org.character);

var exitMap;
var instanceId;
var minPlayers = 1;
var mapId=980000404;
var setupTask;
var item = 
Array(
			
			Array(1402022,400,1), //������
			Array(1402023,300,1), //����ɽ��֮��
			Array(1402024,300,1), //��
			Array(1402025,300,1), //����
			Array(1402026,300,1), //�޼���
			Array(1402027,300,1), //������
			Array(1402028,300,1), //����ɽ��֮��
			Array(1402030,300,1), //��
			Array(1402031,300,1), //����
			Array(1402032,300,1), //�޼���
			Array(1402033,300,1), //������
			Array(1402034,300,1), //����ɽ��֮��
			Array(1402035,300,1), //ն�쵶
			Array(1402036,300,1), //�����޽�
			Array(1402046,100,1), //������ڤ��
			//Array(1402047,100,1), //������ڤ��
			
			Array(1382032,300,1), //ħ��֮��
			Array(1382033,300,1), //���鷨��
			Array(1382034,300,1), //ħ��֮��
			Array(1382035,300,1), //����������
			Array(1382036,300,1), //�ھ�������
			Array(1382037,300,1), //����֮��
			Array(1382039,300,1), //��Ҷ������
			Array(1382040,300,1), //��Ҷ3����
			Array(1382041,300,1), //ҹ�Й���
			Array(1382042,300,1), //��ɫ������ӾȦ
			Array(1382045,300,1), //�����鳤��
			Array(1382046,300,1), //�����鳤��
			Array(1382047,300,1), //�����鳤��
			Array(1382048,300,1), //�����鳤��
			
			Array(1372030,300,1), //��ʹ֮��
			Array(1372031,300,1), //ʥ�Ͷ���
			Array(1372032,300,1), //��̫������
			Array(1372033,300,1), //ʥ�Ͷ���
			Array(1372034,300,1), //��Ҷ�ɼ���
			Array(1372035,300,1), //���������
			Array(1372036,300,1), //���������
			Array(1372037,300,1), //���������
			Array(1372038,300,1), //���������
			Array(1372039,300,1), //����֮��
			Array(1372040,300,1), //�綾֮��
			Array(1372041,300,1), //����֮��
			Array(1372042,300,1), //����֮��
			Array(1372043,300,1), //����ħ��ʦ����
			Array(1372044,100,1), //���������
			Array(1372045,100,1), //����������
			
			Array(1322028,300,1), //��ͷ��
			Array(1322029,300,1), //����
			Array(1322031,300,1), //��������
			Array(1322032,300,1), //��ͷ��
			Array(1322033,300,1), //��ְ�
			Array(1322034,300,1), //����
			Array(1322035,300,1), //��ս����
			Array(1322036,300,1), //���紸
			Array(1322037,300,1), //���ʹ�
			Array(1322038,300,1), //���紸
			Array(1322052,300,1), //�����ش�
			Array(1322054,300,1), //��Ҷ����
			Array(1322055,300,1), //��Ҷ3����
			Array(1322056,300,1), //��ɫ������ӾȦ
			Array(1322060,100,1), //���㾪����
			//Array(1322061,100,1), //����������
			
			Array(1082158,300,1), //��ɫ��������
			Array(1082159,300,1), //��ɫ��������
			Array(1082160,300,1), //��ɫ��������
			Array(1082163,300,1), //����������
			Array(1082164,300,1), //��ɫԪ������
			Array(1082167,300,1), //��ɫ����������
			Array(1082168,300,1), //��������
			Array(1082175,300,1), //���ܶ�����(��)
			Array(1082176,300,1), //���ܶ�����(��)
			Array(1082177,300,1), //���ܶ�����(��
			Array(1082178,300,1), //���ܶ�����(��)
			Array(1082179,300,1), //���ܶ�����(��)
			Array(1082234,100,1), //���㶨������
			Array(1082235,100,1), //������ң����
			Array(1082236,100,1), //�����������
			Array(1082237,100,1), //����̽������
			Array(1082238,100,1), //���㸧������
			Array(1082239,100,1), //������������
			Array(1082240,100,1), //������ң����
			Array(1082241,100,1), //������������
			Array(1082242,100,1), //����̽������
			Array(1082243,100,1), //������������
			
			Array(1002773,100,1), //����ͷ��
			Array(1002776,100,1), //����ھ���
			Array(1002777,100,1), //��������ñ
			Array(1002778,100,1), //��������ñ
			Array(1002779,100,1), //��������ñ
			Array(1002780,100,1), //���㺣����
			Array(1002790,100,1), //�����ھ���
			Array(1002791,100,1), //��������ñ
			Array(1002792,100,1), //��������ñ
			Array(1002793,100,1), //��������ñ
			Array(1002794,100,1), //����������
			
			Array(1462037,300,1), //�ڰ���
			Array(1462039,300,1), //�ƽ������
			Array(1462040,300,1), //��Ҷ������
			Array(1462041,300,1), //��Ҷ3����
			Array(1462050,100,1), //����ڤ����
			Array(1462051,100,1), //����ڤ����
			Array(1472051,300,1), //��ľ����ȭ
			Array(1472052,300,1), //��ˮ����ȭ
			Array(1472053,300,1) //��������ȭ		 
			

);

function init() {
	scheduleNew();
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit>
	var instanceName = "vip8fs02" + instanceId;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (1000 * 60);
	em.schedule("timeOut", eventTime);
	eim.startEventTimer(eventTime);
	em.schedule("monsterstart", 1000);
	em.setProperty("entryPossible", "1");
	
	return eim;
}

function scheduleNew() {
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));
	player.message("[��ս����] ��֪����ļһ�~���а�~~~.");
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var winner = eim.getPlayers().get(0);
		var map = eim.getMapFactory().getMap(mapId);
        var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var chanced = 1 + Math.floor(Math.random() * 2);
		for(var ids = 0 ;ids<chanced.length;ids++){
			var chance = Math.floor(Math.random()*400);
			var finalitem = Array();
				for(var i = 0 ;i<item.length;i++){
					if(item[i][1] >= chance){
						finalitem.push(item[i]);
					}
				}
			if(finalitem.length != 0){
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				if(ii.getInventoryType(itemId).getType() == 1){
					var chancedd = Math.floor(Math.random()*10);
					var toDrop = ii.getEquipById(itemId);
					if(chancedd<=5){
						toDrop = ii.getEquipByIdfs(itemId,1);
					}
					if(chancedd==1){
						toDrop = ii.getEquipByIdfs(itemId,1);
					}
				}else{
					var toDrop = new net.sf.odinms.client.Item(itemId, 0, quantity);
				}
				map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
			}
		}
	}
}

function monsterstart() {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300290);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = 330-Math.floor(Math.random() * 650);
        var hprand = Math.floor(Math.random() * 500000000)+1800000000;
        overrideStats.setHp(hprand); 
        overrideStats.setExp(50000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
	}
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { 
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose();
	}
	else { //boot dead player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() <= minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			}			
			else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose();
	}
	else { //boot d/ced player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() < minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function leftParty(eim, player) {			
	// If only 2 players are left, uncompletable:
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose();
	}
	else
		playerExit(eim, player);
}

function disbandParty(eim) {
	//boot whole party and end
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
}

//for offline players
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) {
	//KPQ does nothing special with winners
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function cancelSchedule() {
}

function timeOut() {
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		if (eim.getPlayerCount() > 0) {
			var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				playerExit(eim, pIter.next());
			}
		}
		eim.dispose();
	}
}
