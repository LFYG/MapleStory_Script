
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
    if (status == 0) {
	var v = getVIP(cm);
	var selStr = "�𾴵�" + ((v==0)?"":"#rVIP"+v+"#k") + "���#r#h ##k����,��ѡ��������Ҫ�Ĺ���\r\nԪ����#r" + cm.getHyPay(1) + " #k��ң�#r" + cm.getMeso() + "\r\n#k���#r" + cm.getPlayer().getCSPoints(1) + " #k���þ�#r" + cm.getPlayer().getCSPoints(2) + "\r\n#L11##d�����г�#L21##g�����̵�#L31##kԪ���һ�#L41##rÿ��ǩ��\r\n#L12##d���紫��#L22##g�����̵�#L32##k���һ�#L42##r��Ա����\r\n#L13##d����תְ#L23##gԪ���̵�#L33##k��Ҷһ�#L43##r��������\r\n#L14##d������ս#L24##g����̵�#L34##k����ת��#L44##r��������\r\n#L15##d����ת��#L25##g�������#L35##k������ս#L45##r�����Ҹ�\r\n#L16##dϴ����ֵ#L26##g�������#L36##k���Թ���#L46##r��ͼ��ID";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	switch (selection){
	case 11:
		if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022)
			cm.sendOk("�㲻�����������г�����ȥ�Ķ���");
		else
			cm.warp(910000000);
		cm.dispose();
		break;
	case 12:
		cm.dispose();
		cm.openNpc(1032101);
		break;
	case 13:
		cm.dispose();
		cm.openNpc(9010019);
		break;
	case 14:
		cm.dispose();
		cm.openNpc(9001100);
		break;
	case 15:
		cm.dispose();
		cm.openNpc(2112003);
		break;
	case 16:
		var apx = 0;
		switch (getFSdj(cm)) {
		case 0:
			apx = 4;
		case 1:
			apx = 5000;
		case 2:
			apx = 10000;
		case 3:
			apx = 15000;
		case 4:
			apx = 20000;
		}
		cm.resetStats(apx,apx,apx,apx);
		cm.sendOk("�Ѿ����������ֵ��ʼ��");
		cm.dispose();
		break;

	case 21:
        	cm.dispose();
        	cm.openShop(1012123);
        	break;
	case 22:
        	cm.dispose();
        	cm.openShop(9201059);
        	break;

	case 31:
        	cm.dispose();
        	cm.openNpc(1203001);
        	break;
	case 32:
	case 33:
	case 41:
        	cm.dispose();
		cm.openNpc(9900004,selection);
        	break;
	case 36:
		for (var i = -1;i <= 6;i++){
			//cm.getPlayer().dropMessage(i, "����" + i);
		}
		cm.dispose();
		break;
	case 46:
		cm.sendOk(cm.getPlayer().getMapId());
		cm.dispose();
		break;
	default:
		cm.sendOk("default");
		cm.dispose();
		break;
	}

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

//�����ȼ�
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}
