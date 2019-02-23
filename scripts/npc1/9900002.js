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
    if (cm.getPlayer().getLevel() < 8 && cm.getPlayer().getJob() != 200) {
	cm.warp(50000);
        cm.sendOk("�ȼ��ﵽ 8 ������ʹ�ô˹���.�������������� 8 ����.\r\n8 ��ǰ��Ϊְҵ������ܾ��鲻//��100��.\r\n8 �����齫��ָ���ǰ����.8 �����������������ȡ���˽���Ŷ!\r\n���ף����Ϸ���!");
        cm.dispose();
        return;
    }
        if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419, 1)) {
                cm.gainItem(1002419, 1); //��Ҷñ
            }
            if (cm.canHold(1142184, 1)) {
                cm.gainItem(1142184, 1); //����ð�ռ�
                cm.gainMeso(200000); //yo shit who the hell added this
		cm.gainItem(1302063,1);
                cm.forceCompleteQuest(29003);
                cm.sendOk("��ӭ���٣���Ϊ����ң�ϵͳ�����㼸�����ϣ��������Ϸ�������죡");
            } else {
                cm.sendOk("�뽫������һ���Ŀռ�.");
            }
            cm.dispose();
            return;
        }
        var selStr = "�װ���#r#h ##k���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n#b#L0#����תְ#l  #L1#���ܴ���#l  #L3#��Ϸ�̵�#l  #L2#��������#l\r\n#L4#�ٱ��齱#l  #L5#����̵�#l  #L13#BOSS����#l  #L14#��Ϸ����#l\r\n#L6#�ֿ����#l  #L7#����н�#l  #L8#ѧϰ����#l  #L10#���д��#l\r\n#L11##r�ȼ�����#l#l  #L18##r���ϵͳ#l  #L15##bÿ��ǩ��  #L12##r���帱��\r\n#l#L16##bBOSS��ѯ#l  #L19##r7���긱�� #L21##r��ֵ����  #L20#ת������\r\n#L23#140װ���ϳ�  #L24#�����ܣ��Ƽ���";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openNpc(9900002,20);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9270035);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,21);
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
	    cm.openNpc(9900002,2);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 8:
            cm.dispose();
	    cm.openNpc(9270035,1);
            break;
        case 9:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 11:
            cm.dispose();
	    cm.openNpc(9900002,12);
            break;
        case 12:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 13:
            cm.dispose();
	    cm.openNpc(9900002,1);
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
	    cm.openNpc(9900004,80);
            break;
        case 17:
            cm.dispose();
	    cm.openNpc(9900004,4);
            break;
        case 18:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("���Ѿ��ڽ���ͼ��.");
}else{
            cm.warp(700000000);
	    cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n����ʢ��һ��.\r\n�������İ���.���������������!\r\nף���»����!!!");
            break;
}
        case 19:
            cm.dispose();
	    cm.openNpc(9120033);
            break;
	case 20:
            cm.dispose();
	    cm.openNpc(9900002,24);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9900002,17);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9900002,25);
            break;
        }
    }
}