var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
            cm.sendSimple("����ȥ�Ķ��أ�\r\n\r\n#L0##b��������ũ��#k (��ɫҩ�ݴԡ���ɫҩ�ݴ�)#b#l\r\n#L1##b�м�����ũ��#k (��ɫҩ�ݴԡ���ɫҩ�ݴ�)#b#l\r\n#L2#�߼�����ũ��#k(��ɫҩ�ݴԡ���ɫҩ�ݴ�)#b#l\r\n#L3#ר������ũ��#k(����ɫҩ�ݴԡ���ɫҩ�ݴ�)#l#k");
        } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
            cm.sendSimple("����ȥ�Ķ��أ�\r\n\r\n#L4##b�������ܿ�ɽ#k(��ɫ��������ɫ����)#b#l\r\n#L5#�м����ܿ�ɽ#k(��ɫ��������ɫ����)#b#l\r\n#L6#�߼����ܿ�ɽ#k(��ɫ��������ɫ����)#b#l\r\n#L7#ר�����ܿ�ɽ#k(����ɫ��������ɫ����)#l#k");
        } else {
            cm.sendOk("ֻ��ѧ��ɿ���ҩ���˲���ʹ�á�");
        }
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(910001003, 0);
                cm.playerMessage( - 9, "������������ũ������;�˳�ʱ�޷����½��롣");
            break;
        case 1:
                cm.warp(910001004, 0);
                cm.gainItem(4001483, -1);
                cm.playerMessage( - 9, "�����м���������ũ������;�˳�ʱ�޷����½��롣");
            break;
        case 2:
                cm.warp(910001007, 0);
                cm.gainItem(4001570, -1);
                cm.playerMessage( - 9, "����߼�����ũ������;�˳�ʱ�޷����½��롣");
            break;
        case 3:
                cm.warp(910001009, 0);
                cm.gainItem(4001572, -1);
                cm.playerMessage( - 9, "����ר������ũ������;�˳�ʱ�޷����½��롣");
            break;
        case 4:
                cm.warp(910001005, 0);
                cm.gainItem(4001480, -1);
                cm.playerMessage( - 9, "�����������ܿ�ɽ����;�˳�ʱ�޷����½��롣");
            break;
        case 5:
                cm.warp(910001006, 0);
                cm.gainItem(4001481, -1);
                cm.playerMessage( - 9, "�����м����ܿ�ɽ����;�˳�ʱ�޷����½��롣");
            break;
        case 6:
                cm.warp(910001008, 0);
                cm.gainItem(4001569, -1);
                cm.playerMessage( - 9, "����߼����ܿ�ɽ����;�˳�ʱ�޷����½��롣");
            break;
        case 7:
                cm.warp(910001010, 0);
                cm.gainItem(4001571, -1);
                cm.playerMessage( - 9, "����ר�����ܿ�ɽ����;�˳�ʱ�޷����½��롣");
            break;
        }
        cm.dispose();
    }
}