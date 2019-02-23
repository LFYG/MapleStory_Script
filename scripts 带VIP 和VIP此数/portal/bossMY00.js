
var bossName = "�λ����⹫԰";
var mapID = 551030200;

function enter(pi) {
    if (!pi.haveItem(4032246)) {
        pi.playerMessage(5, "��û���λ����⹫԰���ǡ�");
    } else {
        if (pi.getPlayerCount(mapID) <= 0) { // Fant. Map
            var FantMap = pi.getMap(mapID);
            FantMap.resetReactors();//���ù���
            FantMap.killAllMonsters(false);//ɾ�����й���
            jr(pi);
        } else {
            if (pi.getMonsterCount(mapID) <= 0) {
                jr(pi);
            } else {
            	pi.playerMessage(5, "�Կ�BOSS����ս�Ѿ���ʼ�ˣ��㲻�ܽ��뵽���档");
            }
        }
    }
}

//�Ƿ��������
function jr(pi){
	var kjcs = getJRcs(pi);
	var cs = pi.getBossLog(bossName);
	if (kjcs > cs || kjcs == -1){
		cs++;
		pi.setBossLog(bossName);
		pi.playerMessage(5, "�������Ѿ�������" + cs + "�Σ�����֮�ڻ����Խ���" + ((kjcs==-1)?"����":kjcs - cs) + "��.");
		pi.playPortalSE();
		pi.warp(mapID);
	} else {
		pi.playerMessage(5, "�������Ѿ�������" + cs + "�Σ�����֮�ڽ������ٴν���.");
	}
}

//�������Ĵ���
function getJRcs(pi){
	if (pi.getPlayer().isGM()){
		return -1;
	}
	switch (getVIP(pi)){
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
function getVIP(pi){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (pi.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
