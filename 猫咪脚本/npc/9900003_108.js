
var status = 0;
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////����2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////����!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var ttt8 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt6 = "#fEffect/CharacterEff/1114000/1/0#";  //���ǻ�

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
    }
    else if (status == 0) {
        var selStr = "\r\n#e#d���ã�����������ɫ����ϵ��,�������ڴ����..#n#l#k";
        selStr +="\r\n#d======================================================#k";
        selStr += "#L10#" + ttt6 + " #e#k0.#b#n ���ﰲ�ؾ�����(New~)#l#n\r\n";
        selStr += "#b#L0#" + ttt6 + " #e#k1.#b#n ���ɶ�ɭ�ֱ���ս#l\r\n";
        selStr += "#L1#" + ttt6 + " #e#k2.#b#n ȫ��ɻ���ս#l\r\n";
        selStr += "#L2#" + ttt6 + " #e#k3.#b#n �����ڳ����ð�ռ�#l\r\n";
        selStr += "#L3#" + ttt6 + " #e#k4.#b#n ����������ͥԺ#l\r\n";
        selStr += "#L4#" + ttt6 + " #e#k5.#b#n ��սӢ���Ĵ���������#l\r\n";
        selStr += "#L5#" + ttt6 + " #e#k6.#b#n �ƽ���Ժ��ɮ��ŵ������Ը#l\r\n";
        selStr += "#L6#" + ttt6 + " #e#k7.#b#n �ؿ���������(С��ţ��)#l\r\n";
        selStr += "#L7#" + ttt6 + " #e#k8.#b#n ��԰����ս#l\r\n";
        selStr += "#L8#" + ttt6 + " #e#k9.#b#n ���޻�����ս[HOT]#l\r\n";
		selStr += "#L11#" + ttt6 + "#e#k 10.#b#n �񻰸���<��ǿ�񻯶���>#l\r\n";
        selStr += "#L9#" + ttt6 + " #e#k11.#b#n ����ħ��ŷ����#l\r\n";

        selStr += "\r\n";
        //selStr +="\r\n#d======================================================#k\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900003, 109);
                break;
            case 1:
                cm.worldSpouseMessage(0x20, "[ȫ��ɻ���ս] ����� " + cm.getChar().getName() + " �����˻�������ҡ�");
                cm.dispose();
                cm.warp(540010001, 0);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9900003, 107);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9220032);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(9310057);
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9900003, 101);
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9900003, 102);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900003, 700);
                break;
            case 8:
                cm.dispose();
                cm.openNpc(2060103);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9120050);
                break;
            case 10:
                cm.dispose();
                cm.openNpc(2101017,1);
                break;
			case 11:
				cm.dispose();
				cm.warp(262030000);
				break;


        }
    }
}