var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("���Ĵ���Ϊ�Զ�תְְҵ����Ҳ�����ֶ����תְ\r\n#b#L0#��ҪתְΪ���Ĵ��ˣ�һת��#l  \r\n#L1#��ҪתְΪ���Ĵ��ˣ���ת��#l \r\n#L2#��ҪתְΪ���Ĵ��ˣ���ת��#l \r\n#L3#��ҪתְΪ���Ĵ��ˣ���ת��#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(508);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���Ĵ���.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻������ְҵ ����ĵȼ�û�дﵽ10��.");
            }
            cm.dispose();
            break;
        case 1:
            if (cm.getJob() == 508 && cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(570);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���Ĵ��ˣ���ת��.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻�����Ĵ��ˣ�һת�� ����ĵȼ�û�дﵽ30��.");
            }
            cm.dispose();
            break;
        case 2:
            if (cm.getJob() == 570 && cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(571);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���Ĵ��ˣ���ת��.\r\n�Ժ��תְ��Ϊ�Զ�תְ.");
            } else {
                cm.sendOk("�㲻�����Ĵ��ˣ���ת�� ����ĵȼ�û�дﵽ70��.");
            }
            cm.dispose();
            break;
        case 3:
            if (cm.getJob() == 571 && cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(572);
		cm.sendOk("ϵͳ�Ѿ�Ϊ��תְΪ���Ĵ��ˣ���ת��.\r\n��ϲ����������Ĵ���ȫ��תְ.");
            } else {
                cm.sendOk("�㲻�����Ĵ��ˣ���ת�� ����ĵȼ�û�дﵽ120��.");
            }
            cm.dispose();
            break;

         } 
    }
}