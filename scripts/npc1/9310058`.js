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
        if (cm.getPlayerStat("LVL") >= 160) {
            cm.sendSimple("�װ���#r" + cm.getChar().getName() + "#k��ã�����ÿ�ո���NPC��#b \r\n - ÿ�ջ����>> #e#d(��ǩ��" + cm.getBossLog("�ܼ�ǩ��", 1) + "�� ����ȡ����" + cm.getBossLog("�ܼƸ���", 1) + "��)#n#r\r\n#L1# ÿ��ǩ��#l\r\n#L2# ÿ�ո���#l\r\n#L3# ǩ�������һ�#l")
        } else {
            cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n160�����µĲ��ܲμӻ��");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 120) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n120�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\nǩ��ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ��ǩ��") == 0) {
		    cm.registerSquad("ChaosHT",null," �Ѿ���ȡ�˱��յĸ���. - ��ȡ�����ܴ���Ϊ" + cm.getBossLog("�ܼ�ǩ��", 1)+1 + "��");
                    cm.gainItem(4032398, 1);
                    cm.gainItem(4310002, 5);
                    cm.setBossLog("ÿ��ǩ��");
                    cm.setBossLog("�ܼ�ǩ��", 1);
                    cm.sendOk("#r - ÿ��ǩ�� >> \r\n#dǩ���ɹ�#k\r\n���7��������\r\n���#b#i4032398##t4032398##k���ռ�������Ը�����ȡ������");
                } else {
                    cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n�Բ���һ��ֻ��ǩ��һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 160) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n160�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ�ո���") == 0) {
		    cm.registerSquad("ChaosHT",null," �Ѿ���ȡ�˱��յĸ���. - ��ȡ�����ܴ���Ϊ" + cm.getBossLog("�ܼƸ���", 1)+1 + "��");
		    cm.gainItem(5072000, 1);
		    cm.gainItem(5073000, 1);
		    cm.gainItem(5074000, 1);
		    cm.gainItem(2022118, 3);
                    cm.gainNX(2, 1500);
                    cm.setBossLog("ÿ�ո���");
                    cm.setBossLog("�ܼƸ���", 1);
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dǩ���ɹ�#k\r\n���1500���\r\n���#b\r\n#i5360014#\r\n#i2022118#\r\n#i5072000##i5073000##i5074000#");
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ�ܸ���һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.sendOk("�����ڴ���")
            cm.dispose();
        }
    }
}