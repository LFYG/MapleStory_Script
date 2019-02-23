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
        if (cm.getPlayerStat("LVL") >= 180) {
            cm.sendSimple("�װ���#r" + cm.getChar().getName() + "#k��ã�����ÿ�ո���NPC��#b \r\n - ÿ�ջ����>> #e#d(��ǩ��" + cm.getBossLog("�ܼ�ǩ��", 1) + "�� ����ȡ����" + cm.getBossLog("�ܼƸ���", 1) + "��)#n#r\r\n#L1# ÿ��ǩ��#l\r\n#L2# ÿ�ո���#l\r\n#L3# ǩ�������һ�#l")
        } else {
            cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n180�����µĲ��ܲμӻ��");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n180�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\nǩ��ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ��ǩ��") == 0) {
                    cm.gainItem(4032398, 1);//��ϯͼ��
                    cm.gainItem(4310002, 2);//��������
                    cm.setBossLog("ÿ��ǩ��");
                    cm.setBossLog("�ܼ�ǩ��", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ�ǩ��.��ǰǩ������" + cm.getBossLog("�ܼ�ǩ��", 1));
                    cm.sendOk("#r - ÿ��ǩ�� >> \r\n#dǩ���ɹ�#k\r\n���7��������x2#v4310002#\r\n���#b��ϯͼ��#v4032398##k���ռ�������Ը�����ȡ������");
                } else {
                    cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n�Բ���һ��ֻ��ǩ��һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n30�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ�ո���") == 0) {
		    cm.gainItem(2022118, 3);//����Ա��ף��x3
                    cm.gainItemPeriod(5072000,10,1);//���ʵ�����x10
                    cm.gainItemPeriod(5030001,1,1);//��Ӷ����x10 
                    cm.gainItemPeriod(5220040,2,1);//ת����x2
                    cm.gainNX(2, 600);//���þ� 600
                    cm.setBossLog("ÿ�ո���");
                    cm.setBossLog("�ܼƸ���", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����.��ȡ�����ܴ���" + cm.getBossLog("�ܼƸ���", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�ո�����ȡ�ɹ�#k\r\n���#v2022118# x 3   #v5072000# x 10 #v5030001# x 1 #v5220040# x 2 ��õ��þ�600�㡣");
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ�ܸ���һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9310058, 1);
        } else if (selection == 4) {
	if (cm.getBossLog("ÿ�չ�Ӷ") == 0) {
	    cm.gainItemPeriod(5030001,1,1);
                    cm.setBossLog("ÿ�չ�Ӷ");
                    cm.setBossLog("�ܼƹ�Ӷ", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ��Ӷ�̵�.��ȡ��Ӷ�̵��ܴ�����" + cm.getBossLog("�ܼƹ�Ӷ", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�չ�Ӷ��ȡ�ɹ�#k\r\n��ù�Ӷ�̵�꿨x1");
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ����ȡһ�Ρ�");
            cm.dispose();
        }
    }
}
    }