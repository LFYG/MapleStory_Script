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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n#b#L0#���͵��г�#l #L8#�����(���)#l\r\n#L1#������NPC#l#L2#�鿴�������#l#L5#�����Ӷ�̵�#l\r\n#L7##r��ֵ�һ�#l #L10#����ֵ�н�һ�(new!!)#l\r\n#L6#��ֵ��վ(1RMB:3000���)#l\r\n#L9#�鿴������Ϸ���ݸ�����ϸ(7��3��)#l\r\n#L11##b���߶һ� #rNEW#l#L12##b����һ� #rNEW#l#k#L13##bVIP���� #rNEW#l#k";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("��ĵȼ�����10,���������ֵ�ͼ����.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("��ֵ��վwww.5ifly.com.\r\n������ֵ����Ϊ1:3000.\r\n���������������..\r\n�����ʲô��������ѯ����Ա.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		case 11:
            cm.dispose();
	    cm.openNpc(9900004,11);
            break;
		case 12:
            cm.dispose();
	    cm.openNpc(9900004,12);
            break
		case 13:
            cm.dispose();
	    cm.openNpc(9900004,13);
            break
		}
    }
}