var status = 0;
var eff = "#fUI/UIWindow.img/Quest/icon8/0#";
var vvv = "#fUI/UIWindow/Quest/icon6/7#";

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
		var selStr = "�װ���#r#h ##k���������ߣ�#r"+cm.getGamePoints()+"#k ����\r\n���Ǻ��̵�С����ר�����޸���ϡ�б����������ۣ�������ʲô�����Լ��İɣ�~\r\n";
        //selStr += "#L0#" + eff + "#b�����߱�(װ����)#l"
        //selStr += "#L1#" + eff + "#b�����߱�(�����)#l"
		selStr += "#L6##d#e������#n#l\r\n"
        selStr += "#L2#" + vvv + "#b�����˹��(����װ��)#l"
        selStr += "#L3#" + vvv + "#b���յ±�(��߼����յ�)#l\r\n"
	    selStr += "#L4#" + eff + "#b�˶����(У��)#l#n"
		//selStr += "#L5#" + eff + "#b�����(������ָ)#l\r\n"
	    selStr += "#L7#" + eff + "#b�˶����(װ���سɾ�)#l#n"
		//selStr += "#L9999#" + eff + "#b�г�ʯ��#l"
        //selStr += "#L1#" + eff + "#b���Ӷһ�#l\r\n"
        //selStr += "#L13#" + eff + "#r�ȼ�����[New]#l"
        //selStr += "#L18#" + eff + "#b���ϵͳ[New]#l"
        //selStr += "#L0#" + eff + "#b#r����ɾ��#l\r\n"
        //selStr += "#L16#" + eff + "#r����ƿ�[New]#l"
        //selStr += "#L19#" + eff + "#r����ת��[New]#l"
		//selStr += "#L42#" + eff + "#bð��֮��#l\r\n"
		cm.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
		case 0:
			cm.dispose();
			cm.openShop(22222);
			break;
	    case 1:
			cm.dispose();
			cm.openShop(2182000);
			break;
		case 2:
			cm.dispose();
			cm.openShop(3000138);
			break;
		case 3:
			cm.dispose();
			cm.openShop(9390121);
			break;
		case 4:
			cm.dispose();
			cm.openShop(9000133);
			break;
		case 5:
			cm.dispose();
			cm.openShop(9010040);
			break;
		case 6:
			cm.dispose();
			cm.openNpc(2182000);
			break;
		case 7:
			cm.dispose();
			cm.openShop(22200);
			break;
		case 8:
			cm.dispose();
			cm.openNpc(9270035, 1);
			break;
		case 9:
			cm.dispose();
			cm.openShop(2060003);
			break;
		case 10:
			cm.dispose();
			cm.openNpc(9900002, 5);
			break;
		case 11:
			cm.dispose();
			cm.openNpc(9900002, 12);
			break;
		case 13:
			cm.dispose();
			cm.openNpc(9900002, 12);
			break;
		case 14:
			cm.dispose();
			cm.openNpc(9040004);
			//cm.sendOk("���������ѯ��");
			break;
		case 15:
			cm.dispose();
			cm.openNpc(9310058);
			break;
		case 16:
			cm.dispose();
			cm.openNpc(9000111);
			break;
		case 17:
			cm.dispose();
			cm.openNpc(9900001,3000);
			break;
		case 18:
			cm.dispose();
			if (cm.getMapId() == 680000000) {
				cm.sendOk("���Ѿ��ڽ���ͼ��.");
			} else {
				cm.warp(680000000);
				cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n��鿴���Ͻ�NPC�������.\r\n�������İ���.���������������!\r\nף���»����!!!");
				break;
			}
		case 19:
			cm.dispose();
			cm.openNpc(9900002, 17);
			break;
		case 20:
			cm.dispose();
			cm.openShop(9000201);
			break;
		case 21:
				cm.dispose();
				cm.openNpc(9900004, 11);
			break;
		case 22:
			cm.dispose();
			cm.openNpc(1105000, 1);
			break;
		case 23:
			cm.dispose();
			cm.openNpc(9900001, 100);
			break;
		case 24:
			cm.dispose();
			cm.openNpc(9900005);
			break;
		case 30:
			cm.dispose();
			cm.openNpc(9900002, 27);
			break;
		case 41:
			cm.dispose();
			cm.sendOk("�������.���ڴ�");
			break;
		case 40:
			cm.dispose();
			cm.sendOk("�������.���ڴ�");
			break;
		case 42:
			cm.dispose();
			cm.openNpc(9900002, 41);
			break;
		}
	}
}