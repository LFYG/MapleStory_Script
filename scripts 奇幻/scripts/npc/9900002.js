var status = 0;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fEffect/CharacterEff/1082565/2/0#";

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
		var selStr = "��" + vvv + "�װ���#r#h ##k�������ߣ�#r"+cm.getGamePoints()+"#k ����\r\n";
        selStr += "#L4#" + eff + "#b�ٱ��齱#l"
        //selStr +="#L14#" + eff + "#b��Ϸ����#l"
        selStr += "#L6#" + eff + "#b�ֿ����#l"
        //selStr += "#L7#" + eff + "#b����н�#l\r\n"
	    //selStr += "#L22#" + eff + "#b�ռ�ð�ռ�#l#n"
		selStr += "#L188#" + eff + "#b������#l"
		selStr += "#L9999#" + eff + "#b�г�ʯ��#l\r\n"
        //selStr += "#L1#" + eff + "#b���Ӷһ�#l\r\n"
        //selStr += "#L13#" + eff + "#r�ȼ�����#k[#rNew#k]#l"
        selStr += "#L18#" + eff + "#b���ϵͳ#k[#rNew#k]#l"
        selStr += "#L0#" + eff + "#b#r����ɾ��#l\r\n"
        selStr += "#L16#" + eff + "#r����ƿ�#k[#rNew#k]#l"
        //selStr += "#L19#" + eff + "#r����ת��#k[#rNew#k]#l"
		//selStr += "#L2#" + eff + "#d��Ʒ�̵�#k[#rNew#k]#l"
		//selStr += "#L42#" + eff + "#bð��֮��#l\r\n"
		cm.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
		case 0:
			cm.dispose();
			cm.openNpc(9900002, 27);
			break;
	    case 188:
			cm.dispose();
			cm.openNpc(2040030);
			break;
		case 9999:
			cm.dispose();
			cm.openNpc(2135017);
			break;
		case 1:
			cm.dispose();
			cm.openShop(9310113);
			break;
		case 2014:
			cm.dispose();
			cm.openNpc(9900002, 2);
			break;
		case 2015:
			cm.dispose();
			cm.openNpc(9073025);
			break;
		case 56:
			cm.dispose();
			cm.openNpc(9900001, 200);
			break;
		case 2:
			cm.dispose();
			cm.openNpc(9310074);
			break;
		case 2026:
			cm.dispose();
			cm.openNpc(9900005, 2014);
			break;
		case 3:
			cm.dispose();
			cm.openNpc(1012121);
			break;
		case 4:
			cm.dispose();
			cm.warp(749050400);
			break;
		case 5:
			cm.dispose();
			cm.openNpc(9900002, 2);
			break;
		case 6:
			cm.dispose();
			cm.openNpc(9030100);
			break;
		case 7:
			cm.dispose();
			cm.openNpc(9900002, 8);
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
			cm.openNpc(9040008);
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
			cm.sendOk("�޸���..");
			//cm.openNpc(1105000, 1);
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