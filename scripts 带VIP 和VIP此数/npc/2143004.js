
var status = 0;
var bossName = "ϣ��˹";
var mapID = 271040100;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0){
	if (cm.getPlayer().getMapId() == 271040000) { 
		var selStr = "��Ҫ��ϣ��˹mm�������ܽӴ���\r\n#b#L1#�Ƶ��ɰ���ϣ��˹mm\r\n#L2#���˰ɣ�̫а����";
		cm.sendSimple(selStr);
	} else if (cm.getPlayer().getMapId() == mapID) { 
		cm.sendYesNo("�ò����׺�ϣ��˹mm��������ô�õĻ��������Ҫ������");
	} else {
		cm.sendOk("δ֪�����ݣ�mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2143004");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case -1:
		cm.warp(271040000);
		cm.dispose();
		break;
	case 1:
        	if (cm.getPlayerCount(mapID) <= 0) {
            		var BossMap = cm.getMap(mapID);
            		BossMap.resetReactors();//����
            		BossMap.killAllMonsters(false);//ɾ�����й���
			jr(cm);
			cm.spawnMob(8850011,0,0);
		} else {
			if (cm.getMonsterCount(mapID) <= 0) {
				jr(cm);
			} else {
            			cm.sendOk("�Կ�BOSS����ս�Ѿ���ʼ�ˣ��㲻�ܽ��뵽���档");
			}
		}
		cm.dispose();
		break;
	case 2:
		cm.dispose();
		break;
	}
    }
}

//�Ƿ��������
function jr(cm){
	var kjcs = getJRcs(cm);
	var cs = cm.getBossLog(bossName);
	if (kjcs > cs || kjcs == -1){
		cs++;
		cm.setBossLog(bossName);
		cm.playerMessage(5, "�������Ѿ�������" + cs + "�Σ�����֮�ڻ����Խ���" + ((kjcs==-1)?"����":kjcs - cs) + "��.");
		cm.playPortalSE();
		cm.warp(mapID);
		return true;
	} else {
		cm.playerMessage(5, "�������Ѿ�������" + cs + "�Σ�����֮�ڽ������ٴν���.");
	}
}

//�������Ĵ���
function getJRcs(cm){
	if (cm.getPlayer().isGM()){
		return -1;
	}
	switch (getVIP(cm)){
	case 0:
	case 1:
		return 5;
	case 2:
		return 10;
	case 3:
		return 20;
	case 4:
		return 50;
	case 5:
		return 100;
	case 6:
		return 200;
	case 7:
		return -1;
	default:
		return 5;
	}
}

//���VIP�ȼ�
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
