var status = 0;
var eff = "#fEffect/CharacterEff/1082565/4/0#";
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
		var selStr = "��" + vvv + "#r#e    Chinað�յ�ɾ���ڲ���\r\n        5��16�գ���������20��00��ʽ����\r\n        ���⵱������66Ԫ��������\r\n        QQȺ��464435912\r\n        ���ȼ�Ⱥ��������࣡\r\n";
        //selStr +="#L2014#" + eff + "#e#b�Զ��ۻ���#l"
        //selStr +="#L2015#" + eff + "С�������#l"
        //selStr +="#L21#" + eff + "#b����н�#l#n\r\n\r\n"
        //selStr += "#L16#" + eff + "#e#r��ȯϴѪ#k#l#n"
        //selStr += " #L13#" + eff + "#e#r��������#e#r(NEW)#l#n"
        //selStr += "#L90#" + eff + "#r#e���BOSS����#n#l\r\n";
        selStr += "#L19#" + eff + "#r[New]#l"
		//selStr += "#L1#" + eff + "#bð��֮��#l\r\n"
		cm.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
		case 0:
			cm.dispose();
			cm.openNpc(9900002, 27);
			break;
		case 1:
			cm.dispose();
			cm.openNpc(2041016);
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
			cm.warp(100000104);
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
			cm.openNpc(9900002, 1);
			break;
		case 14:
			cm.dispose();
			cm.sendOk("���������ѯ��");
			break;
		case 15:
			cm.dispose();
			cm.openNpc(9310058);
			break;
		case 16:
			cm.dispose();
			cm.openNpc(9900004, 333);
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
				cm
						.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n��鿴���Ͻ�NPC�������.\r\n�������İ���.���������������!\r\nף���»����!!!");
				break;
			}
		case 19:
			cm.dispose();
			cm.openNpc(9000178);
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
        case 90:
            cm.dispose();
	    cm.openNpc(9900004,3);
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
