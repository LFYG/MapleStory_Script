
var status = 0;

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
	if (cm.getPlayer().getMapId() == 211042300) { //��ͨ���� ���
		var selStr = "ΰ�����ʿ������Ҫ�ҵİ�����\r\n#b#L1#����ȥ�����������";
		cm.sendSimple(selStr);
	} else if (cm.getPlayer().getMapId() == 211042301) { //�������� ���
		var selStr = "ΰ�����ʿ������Ҫ�ҵİ�����\r\n#b#L2#����ȥ��ͨ�������";
		cm.sendSimple(selStr);
	} else {
		cm.sendOk("δ֪�����ݣ�mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2030008");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case 1:
		cm.warp(211042301);
		break;
	case 2:
		cm.warp(211042300);
		break;
	}
	cm.dispose();
    }
}

