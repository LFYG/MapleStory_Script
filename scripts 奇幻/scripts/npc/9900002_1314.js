var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fUI/UIWindow4.img/PQRank/rank/gold";
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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } else if (status == 0) {
        var selStr = "������           "      + eff + "#b��ֵΪ�Զ�����" + eff + "\r\n������������#k���� 1 - 49 Ԫ\r\n���������������� 50 - 99 Ԫ#r  ��#g׷�� 5%#k#r��\r\n������������#r���� 100 - 199 Ԫ��#g׷��15%#k#r��\r\n������������#b���� 200 - 499 Ԫ#r��#g׷��20%#k#r��\r\n������������#b���� 500Ԫ����   #r��#g׷��25%#k#r��\r\n\r\n��������#b��ֵ����1��1������+��ֵ��ʽ������\r\n";
        selStr += "�� ��   #L6##r������У԰��#l";
	selStr += "  #L14##r����ϲת�̡�#l\r\n";
        selStr += "����    #L5##b�����һ�1��3000--#r�����һ�#b��#l\r\n";
        selStr +="��#L13##r�������-#k�������������-#b�����������#k��#l\r\n";
        selStr += "��       �� #L2024##b����ƿ�-����ˬ���᡻#l\r\n"
        selStr += "����        #L0##b�����һ��н��#v4000463#��#l\r\n";
        selStr += "����     #L2025##r���Զ��ۻ�����#r�ɹ��������Ʒ#l"
	//selStr += "#L14#" + eff + "#b����BOSS����#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 1:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 2:
	if(cm.getPlayer().getLevel() <= 10){
	cm.gainExp( + 50000);
	cm.worldMessage("��ϲ�����"+ cm.getChar().getName() +"������NPC����ȡ5W����");
	cm.sendOk("��ϲ����ȡ�ɹ�,10���¶�������������ȡ����");
}else{
	cm.sendOk("��ĵȼ�����10");
}
		cm.dispose();
            break;
        case 3://���ﱩ��Ʒ����
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;
        case 4://�����Ӷ�̵�
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 2014://�ճ�����
            cm.dispose();
	    cm.openNpc(9900001, 2);
            break;
        case 2015://��¥�
            cm.dispose();
	    cm.openNpc(9201116);
            break;
        case 2016://���ֳɳ�
            cm.dispose();
	    cm.openNpc(9900005);
            break;
		case 2017:
			cm.dispose();
			cm.openNpc(9270035, 1);
			break;
		case 2018:
			cm.dispose();
			cm.openNpc(9270035);
			break;
		case 2019:
			cm.dispose();
			cm.openNpc(9900002, 1);
			break;
		case 2020:
			cm.dispose();
			cm.openNpc(9300011);
			break;
		case 2021:
			cm.dispose();
			cm.openNpc(9900002, 5);
			break;
		case 2022:
			cm.dispose();
			cm.warp(100000104);
			break;
		case 2023:
			cm.dispose();
			cm.openNpc(9310058);
			break;
		case 2024:
			cm.dispose();
			cm.openNpc(9000111);
			break;
		case 2025:
			cm.dispose();
			cm.openNpc(9900002, 2);
			break;
		case 2026:
			cm.dispose();
			cm.openNpc(2470020);
			break;
        case 5://�ۻ���ֵ
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 6://��ֵ��վ
            cm.dispose();
            cm.openWeb("http://www.libaopay.com/buy/?wid=52185");
	    cm.sendOk("�Ѿ�Ϊ����������վ��У԰ף����Ϸ���Ŷ~");
            break;
        case 7://����ʱ�任
            cm.dispose();
	    cm.openNpc(9000030,1);
            break;
        case 9:
            cm.dispose();
	    cm.openNpc(9900005,2000);
            break;
		 case 10:
		if (cm.getPlayer().getLevel() > 100 ) {
			cm.warp(701000210);
			cm.sendOk("����֮��Ϊ���սPK.����֮��Ϊ���PKս.����֮��Ϊ����PKս.ף������");
			} else {
				cm.sendOk("�Բ���.PK̫Σ����.100�����µ���Ҳ��ܽ�����.");
			}
			cm.dispose();
            break;
		 case 11:
		if (cm.getPlayer().getLevel() > 30 ) {
			cm.warp(746000003);
			cm.sendOk("���Ѿ��������PK ף�����");
			} else {
				cm.sendOk("�Բ���.PK̫Σ����.ֻ����ȼ���С��30������ҽ���");
			}
			cm.dispose();
            break;
            break;
		case 12:
		if (cm.getPlayer().getLevel() > 30 ) {
			cm.warp(746000004);
			cm.sendOk("���Ѿ��������PK ף�����");
			} else {
				cm.sendOk("�Բ���.PK̫Σ����.ֻ����ȼ���С��30������ҽ���");
			}
			cm.dispose();
            break;
		case 13:
            cm.dispose();
			cm.openNpc(9900001,3555);
            break;
		case 14:
            cm.dispose();
			cm.openNpc(9900002,17);
            break;
	}
    }
}
