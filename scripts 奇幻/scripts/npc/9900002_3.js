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
    if (cm.getPlayer().getLevel() < 0 && cm.getPlayer().getJob() != 200) {
	cm.warp(50000);
        cm.sendOk("�ȼ��ﵽ 8 ������ʹ�ô˹���.�������������� 8 ����.\r\n8 ��ǰ��Ϊְҵ������ܾ��鲻��200��.\r\n8 �����齫��ָ���ǰ����.8 �����������������ȡ���˽���Ŷ!\r\n���ף����Ϸ���!");
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
                cm.forceCompleteQuest(29003);
                cm.sendOk("��ӭ���٣���Ϊ����ң�ϵͳ�����㼸�����ϣ��������Ϸ�������죡");
            } else {
                cm.sendOk("�뽫������һ���Ŀռ�.");
            }
            cm.dispose();
            return;
        }
        var selStr = "���ã�����ѡ������Ҫ�Ĺ���:\r\n\r\n#b#L0#���̵�(����ҩˮ/װ��/�ٻ���Ʒ/��...)#l\r\n#L1#������NPC(���͹���/��...)#l\r\n#L3#��תְNPC#l\r\n#L2#�������(����/����/��ɫ/��ɫ/��...)#l\r\n#L4#��������#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openNpc(1012121);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9270035);
            break;
        case 2:
            cm.dispose();
            cm.warp(100000104);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9300011);
            break;
        case 4:
            cm.dispose();
	    cm.openNpc(9900002,1);
            break;
        }
    }
}