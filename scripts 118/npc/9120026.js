/*
	Crysta; - Kamuma (Neo Tokyo Teleporter)
*/

function start() {
    switch (cm.getMapId()) {
    case 800000000:
        cm.dispose();
        cm.openNpc(9120026, 1);
        break;
    case 802000211:
        if (cm.getQuestStatus(4686) == 2) {
            cm.gainItem(4032181, 100);
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            cm.forceCompleteQuest(4686);
        }
        cm.warp(802000212, 0);
        cm.dispose();
        break;
    case 802000313:
        if (cm.getQuestStatus(4689) == 2) {
            cm.gainItem(4032181, 50);
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 50);
            cm.forceCompleteQuest(4689);
        }
        cm.warp(802000312, 0);
        cm.dispose();
        break;
    case 802000411:
        if (cm.getQuestStatus(4693) == 2) {
            cm.gainItem(4032181, 100);
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            cm.forceCompleteQuest(4693);
        }
        cm.warp(802000412, 0);
        cm.dispose();
        break;
    case 802000611:
        if (cm.getQuestStatus(4696) == 2) {
            cm.gainItem(4032181, 100);
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            cm.forceCompleteQuest(4696);
        }
        cm.warp(802000612, 0);
        cm.dispose();
        break;
    case 802000111:
        if (cm.getQuestStatus(4698) == 2) {
            cm.gainItem(4032181, 100);
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            cm.forceCompleteQuest(4698);
        }
        cm.warp(802000112, 0);
        cm.dispose();
        break;
    case 802000711:
        if (cm.getQuestStatus(50003) == 2) {
            cm.gainItem(4032181, 100);
            if (!cm.haveItem(4032361)) {
                cm.gainItem(4032361, 1);
            }
        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            if (!cm.haveItem(4032361)) {
                cm.gainItem(4032361, 1);
            }
            cm.forceCompleteQuest(50003);
        }
        cm.warp(802000712, 0);
        cm.dispose();
        break;
    case 802000803:
        if (cm.getQuestStatus(50016) == 2) {
            cm.gainItem(4032181, 100);

        } else {
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.gainItem(4032181, 100);
            cm.forceCompleteQuest(50016);
        }
        cm.warp(802000804, 0);
        cm.dispose();
        break;
    default:
        cm.sendSimple("���Ǹ�����ǿ��Ϧ�Ǵ���������ˮ������Ϧ�Ǵ��˸�����ʱ����Ծ���������ҿ��Խ��㴫������ȥ����δ�������֮��\r\n#b#L0#δ�� - 2100�� ������#l\r\n#L1#δ�� - 2095�� ��԰#l\r\n#L2#δ�� - 2102�� �߿�����#l\r\n#L3#δ�� - 2102�� ��մ�ս��#l\r\n#L4#δ�� - 2102�� ������ҵ��#l\r\n#L5#δ�� - 2102�� ��ó����#l\r\n#L6#δ�� - 2102�� ��ó���Ķ�¥#l\r\n#L8#��ȥ - ��Ҷ�ų�#l\r\n#L7#�������#l");
        break;
    }
}

function action(mode, type, selection) {
    if (selection != 9) {
        var questid = true,
        mapid = 0,
        portal = 0;
        switch (selection) {
        case 0:
            questid = cm.getQuestStatus(4682) == 2;
            mapid = 802000200; //���֮�� - ������ 2100��
            portal = 2;
            break;
        case 1:
            questid = cm.getQuestStatus(4687) == 2;
            mapid = 802000300; //���֮�� - ��԰ 2095��
            portal = 0;
            break;
        case 2:
            questid = cm.getQuestStatus(4690) == 2;
            mapid = 802000500; //���֮�� - �߿�����˾� 2102��
            portal = 0;
            break;
        case 3:
            questid = cm.getQuestStatus(4694) == 2;
            mapid = 802000600; //���֮�� - ��մ�ս�� 2102��
            portal = 0;
            break;
        case 4:
            questid = cm.getQuestStatus(50001) == 2;
            mapid = 802000700; //���֮�� - ������ҵ�� 2102��
            portal = 0;
            break;
        case 5:
            questid = cm.getQuestStatus(50015) == 2;
            mapid = 802000800; //���֮�� - ��ó���� 2102�꣨����볡��
            portal = 0;
            break;
        case 6:
            questid = cm.getQuestStatus(50017) == 2;
            mapid = 802000820; //���֮�� - ��ó���Ķ�¥ 2102�꣨Զ���ӣ��볡
            portal = 0;
            break;
        case 7:
            cm.forceCompleteQuest(4682);
            cm.forceCompleteQuest(4687);
            cm.forceCompleteQuest(4690);
            cm.forceCompleteQuest(4694);
            cm.forceCompleteQuest(50001);
            cm.forceCompleteQuest(50015);
            cm.forceCompleteQuest(50017);
            break;
        }
        if (questid && mapid > 0) {
            cm.warp(mapid, portal);
        } else {
              //  cm.forceCompleteQuest(4682);
            cm.sendOk("����û��ð�Ϧ���������ʱ��ת�������ɸղŵ����񲢱��氢Ϧ�ǡ�1");
        }
    } else {
        cm.warp(800040000, 0);
    }
    cm.dispose();
}